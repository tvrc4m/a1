<template>
     <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <breadcrumb :paths="breadcrumbs"></breadcrumb>
                <p class="text-muted page-title-alt"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="table-responsive">
                        <table class="table m-0 table-striped table-bordered dataTable no-footer">
                            <thead>
                                <tr>
                                    <th v-for="(header,index) in headers" :key="index">{{header.label}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(demand,index) in data" :key="index">
                                    <td>{{demand.id}}</td>
                                    <td>{{demand.img}}</td>
                                    <td>{{demand.realname}}</td>
                                    <td>{{demand.sex==1?"男":"女"}}</td>
                                    <td>{{demand.company}}</td>
                                    <td>{{demand.job}}</td>
                                    <td>
                                        <button type="button" class="btn btn-white btn-xs">{{demand.status?"未回复":"已回复"}}</button>
                                        
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-primary btn-xs waves-effect waves-light m-r-10" @click="reponseDemand(demand)">回复</button>
                                        <button type="button" class="btn btn-danger btn-xs waves-effect waves-light m-r-10" @click="doDel(demand)">删除</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table-loading v-if="loading"></table-loading>
                    </div>
                    <pagination :total="total" :size="params.limit" :page="params.page" @change="changePage"></pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import breadcrumb from '@/components/breadcrumb/index'
    import iswitch from '@/components/switch/index'
    import tableLoading from '@/components/loading/table'
    import loading_mixin from '@/mixins/loading'
    import page_mixin from '@/mixins/page'
    import { getUsers,delUser,editUserStatus } from '@/api/user'
    export default {
        name:"UserDemandList",
        components:{
            breadcrumb,
            iswitch,
            tableLoading
        },
        mixins:[page_mixin,loading_mixin],
        data(){
            return {
                headers:[
                    {
                        label:"ID",
                        name:"id",
                        width:"60px",
                        sort:true
                    },
                    {
                        label:"图片",
                    },
                    {
                        label:"标题",
                        name:"realname",
                    },
                    {
                        label:"内容",
                        name:"sex",
                    },
                    {
                        label:"联系电话",
                        name:"company",
                    },
                    {
                        label:"提交时间",
                        name:"job",
                    },
                    {
                        label:"状态",
                        name:"status",
                    },
                    {
                        label:"操作",
                        name:"opt",
                    }
                ],
                data:[],
                breadcrumbs:[
                    {
                        name:"人才管理",
                        route:""
                    },
                    {
                        name:"个性需求管理",
                    }
                ],
                actions:[
                    {
                        name:"新增",
                        icon:"fa-plus",
                        route:{
                            name:'user_add'
                        }
                    }
                ],
                showModalDel: false,
                total:0,
            }
        },
        methods:{
            reponseDemand(demand){
                // this.$router.push({name:"user_edit",params:{id:user.id}})
            },
            doDel(demand){
                this.$confirm('是否确认删除?').then(()=>{
                    delUser(demand.id).then(()=>{
                        this.data=this.data.filter(item=>item.id!=demand.id)
                    })
                })
            },
            changePage(page){
                this.params.page=page
                getUsers(this.params).then(data=>{
                    console.log("data:",data)
                    this.loading=false
                    this.data=data.data
                    this.total=data.total
                    console.log(data)
                })
            }
        },
        mounted(){
            this.changePage(1)
        }
    }
</script>