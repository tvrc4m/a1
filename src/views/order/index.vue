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
                        <div :is="orderTable" :orders="data" @edit="editOrder"></div>
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
    import { getOrders,delOrder } from '@/api/service/order'
    import { getServiceDetail } from '@/api/service'
    import { getAllCompanies } from '@/api/company'
    import TijianOrder from './hospital/tijian/index'
    import JiatingOrder from './hospital/jiating/index'
    import MenzhenOrder from './hospital/menzhen/index'
    import LiliaoOrder from './hospital/liliao/index'
    import ZhuyuanOrder from './hospital/zhuyuan/index' 
    import JiaotongOrder from './hospital/jiaotong/index' // 交通服务
    import JiaoyuOrder from './hospital/jiaoyu/index' // 子女教育
    import JiuyuanOrder from './hospital/jiuyuan/index' // 紧急救援

    import GovGongShangOrder from './gov/gongshang/index'
    import GovGongJiJinOrder from './gov/gongjijin/index'
    import GovSheBaoOrder from './gov/shebao/index'
    import GovShuiwuOrder from './gov/shuiwu/index'
    export default {
        name:"ServiceOrderList",
        components:{
            breadcrumb,
            iswitch,
            tableLoading
        },
        mixins:[page_mixin,loading_mixin],
        data(){
            return {
                data:[],
                service:{
                    alias:null,
                    name:null,
                    id:0
                },
                companies:[],
                breadcrumbs:[],
                actions:[],
                showModalDel: false,
                total:0,
                table:null,
            }
        },
        computed:{
            orderTable(){
                switch(this.service.alias){
                    // 医院生活服务
                    case 'tijian':return TijianOrder
                    case 'jiating':return JiatingOrder
                    case 'menzhen':return MenzhenOrder
                    case 'liliao':return LiliaoOrder
                    case 'zhuyuan':return ZhuyuanOrder
                    case 'jiaotong':return JiaotongOrder
                    case 'jiaoyu':return JiaoyuOrder
                    case 'jiuyuan':return JiuyuanOrder
                    // 政府工作服务
                    case 'gongshang':return GovGongShangOrder
                    case 'gongjijin':return GovGongJiJinOrder
                    case 'shebao':return GovSheBaoOrder
                    case 'shuiwu':return GovShuiwuOrder
                }
            }
        },
        watch:{
            $route(route){
                if(route.name=="order"){
                    this.service.alias=route.params.name
                    this.loading=true
                    this.changePage(1)
                    this.getService()
                }
            }
        },
        methods:{
            editOrder(user){
                this.$router.push({name:"order_edit",params:{id:user.id}})
            },
            doDel(user){
                this.$confirm('是否确认删除?').then(()=>{
                    delOrder(user.id).then(()=>{
                        this.data=this.data.filter(item=>item.id!=user.id)
                    })
                })
            },
            changePage(page){
                this.params.page=page
                getOrders(this.service.alias).then(data=>{
                    this.loading=false
                    this.data=data.data
                    this.total=data.total
                    console.log(data)
                })
            },
            getService(){
                getServiceDetail(this.service.alias).then(data=>{
                    console.log(data.service)
                    this.service.name = data.service.name
                    this.service.id = data.service.id
                    this.breadcrumbs=[
                        {
                            name:"订单管理",
                            route:""
                        },
                        {
                            name: this.service.name,
                            route:""
                        }
                    ]
                })
            }
        },
        mounted(){
            this.params.stype=1
            if(this.$route.params.name){
                this.service.alias=this.$route.params.name
            }else{
                this.$message.error("该服务不存在")
                this.$router.back();
            }
            this.changePage(1)
            getAllCompanies().then(data=>{
                this.companies=data.data
            })
            this.getService()
        }
    }
</script>