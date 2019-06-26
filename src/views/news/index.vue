<template>
     <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <breadcrumb :paths="breadcrumbs" :actions="actions"></breadcrumb>
                <p class="text-muted page-title-alt"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered dataTable no-footer">
                            <thead>
                                <tr>
                                    <th v-for="(header,index) in headers" :key="index">
                                        <div v-if="header.filters && header.filters.length">
                                           <menu-button :filters="header.filters" :label="header.label" :name="header.name" :selected="params[header.name]" @action="doFilter"></menu-button>
                                        </div>
                                        <div v-else>{{header.label}}</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(news,index) in data" :key="index">
                                    <td>{{news.id}}</td>
                                    <td>
                                        <img :src="news.thumb" style="width: 26px;" alt="">
                                    </td>
                                    <td>{{news.title}}</td>
                                    <td>{{news.source}}</td>
                                    <td></td>
                                    <td>
                                        <button type="button" v-if="news.status==0" class="btn btn-white btn-xs">审核中</button>
                                        <button type="button" v-else-if="news.status==1" class="btn btn-white btn-xs">已上线</button>
                                        <button type="button" v-else-if="news.status==-1" class="btn btn-white btn-xs">已拒绝</button>
                                    </td>
                                    <td>{{news.createtime | dateFormat}}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary btn-xs waves-effect waves-light m-r-10" @click="editNews(news)">编辑</button>
                                        <button type="button" class="btn btn-danger btn-xs waves-effect waves-light m-r-10" @click="doDel(news)">删除</button>
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
    import page_mixin from '@/mixins/page'
    import tableLoading from '@/components/loading/table'
    import loading_mixin from '@/mixins/loading'
    import { getNewsList,delNews,updateNewsStatus } from '@/api/news'
    import menuButton from '@/components/menu/button'
    export default {
        name:"NewsList",
        components:{
            breadcrumb,
            iswitch,
            tableLoading,
            menuButton
        },
        mixins:[page_mixin,loading_mixin],
        data(){
            return {
                headers:[
                    {
                        label:"ID",
                        name:"id",
                        width:"60px",
                        sort:true,
                    },
                    {
                        label:"封面图片",
                        name:"thumb",
                    },
                    {
                        label:"标题",
                        name:"title",
                    },
                    {
                        label:"来源",
                        name:"source",
                    },
                    {
                        label:"轮播图推荐",
                        name:"show_banner",
                        filters:[{text:"推荐",value:1},{text:"不推荐",value:0}],
                    },
                    {
                        label:"状态",
                        name:"status",
                        filters:[{text:"审核中",value:0},{text:"已上线",value:1},{text:"已驳回",value:-1}],
                    },
                    {
                        label:"创建时间",
                        name:"createtime",
                    },
                    {
                        label:"操作"
                    }
                ],
                data:[],
                params:{},
                breadcrumbs:[
                    {
                        name:"新闻管理",
                        route:""
                    },
                    {
                        name:"新闻列表",
                    }
                ],
                actions:[
                    {
                        name:"新增",
                        icon:"fa-plus",
                        route:{
                            name:'news_add'
                        }
                    }
                ],
                showModalDel: false,
                total:0,
            }
        },
        methods:{
            editNews(news){
                this.$router.push({name:"news_edit",params:{id:news.id}})
            },
            doDel(news){
                this.$confirm('是否确认删除?').then(()=>{
                    delNews(news.id).then(()=>{
                        this.data=this.data.filter(item=>item.id!=news.id)
                    })
                })
            },
            doFilter(name,filter){
                this.$set(this.params, name, filter.value)
                this.changePage(1)
            },
            changePage(page){
                this.params.page=page
                getNewsList(this.params).then(data=>{
                    this.loading=false
                    this.data=data.data
                    this.total=data.total
                })
            }
        },
        mounted(){
            this.changePage(1)
        }
    }
</script>
