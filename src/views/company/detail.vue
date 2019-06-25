<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <breadcrumb :paths="breadcrumbs"></breadcrumb>
                <p class="text-muted page-title-alt"></p>
            </div>
        </div>
        <div class="row">
            <form class="form-horizontal" role="form">
                <img :src="company.logo" alt="" style="width: 64px;margin-left: 100px;margin-bottom: 10px;" />
                <iform type="text" label="企业名称" placeholder="请输入企业名称" :value.sync="company.name" disabled></iform>
                <!-- <iform type="upload" label="上传头像" @change-file="uploadImg" :btnSize="11" :small="true" :url="company.logo"></iform> -->
                <iform type="text" label="企业地址" placeholder="请输入企业地址" :value.sync="company.address" disabled></iform>
                <iform type="text" label="联系人" placeholder="请输入联系人" :value.sync="company.contact" disabled></iform>
                <iform type="text" label="联系人电话" placeholder="请输入联系人电话" disabled :value.sync="company.tel"></iform>
                <div class="form-group">
                    <label class="control-label col-md-1">开通服务</label>
                    <div class="col-md-10" style="padding-top: 7px;">
                        <router-link :to="service | serviceLink(company.id, services)" v-for="(service,index) in company.services" :key="index">
                            [{{service | serviceName(services)}}]&nbsp;&nbsp;
                        </router-link>
                    </div>
                </div>
                <iform type="textarea" label="介绍" placeholder="请输入介绍" disabled :value.sync="company.content"></iform>
                <iform type="text" label="排序" placeholder="请输入排序值" :value.sync="company.sort" disabled></iform>
                <iform type="confirm" back="" confirm="编辑" @submit="editCompany"></iform>
            </form>
        </div>
    </div>
</template>
<script>
    import breadcrumb from '@/components/breadcrumb/index'
    import iform from '@/components/form/index'
    import { getCompany,addCompany,editCompany,getAllTypes } from '@/api/company'
    import { getAllServices } from '@/api/service'
    export default {
        name:"CompanyDetail",
        components:{
            breadcrumb,
            iform
        },
        data(){
            return {
                company:{},
                services:[],
                breadcrumbs:[
                    {
                        name:"医院/政府",
                        route:{name:"company"}
                    }
                ]
            }
        },
        filters:{
            serviceName(service_id,services){
                let service = services.filter(service=>service.value==service_id)
                if(service.length){
                    return service[0].name
                }
                return ""
            },
            serviceLink(service_id,company_id,services){
                let service = services.filter(service=>service.value==service_id)
                if(service.length){
                    return {name:"service_setting",params:{cid:company_id,alias:services[0].alias}}
                }
                return {}
            }
        },
        methods:{
            editCompany(){
                this.$router.push({name:"company_edit",params:{id:this.company.id}})
            }
        },
        mounted(){
            let company_id=this.$route.params.id
            getCompany(company_id).then(data=>{
                this.company=data
                this.breadcrumbs.push({
                    name: this.company.name,
                    route:{}
                })
            })
            getAllServices().then(data=>{
                this.services=data.map(item=>{
                    return {
                        name:item.name,
                        alias:item.alias,
                        value:item.id,
                    }
                })
            })
        }
    }
</script>