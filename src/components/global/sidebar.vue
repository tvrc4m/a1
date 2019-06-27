<template>
    <div class="left side-menu">

        <div class="sidebar-inner slimscrollleft" :class="{'mini-side-menu':minibar}">
            <!--- Divider -->

            <div id="sidebar-menu">
                <!-- <li class="text-muted menu-title">导航</li> -->
                <ul style="z-index: 999999;">
                    <template v-for="menu in menus">
                        <li class="has_sub" v-if="menu.chear && menu.chear.length>0">
                            <a href="javascript:void(0);" :class="['waves-effect',{subdrop:menu.open,'active':($route.path==menu.url || (menu.key && $route.meta.sidebar==menu.key))}]" @click="menuClick(menu)">
                                <i :class="menu.icon"></i> 
                                <span> {{menu.name}} </span>
                                <span v-if="menu.chear && menu.chear.length" class="menu-arrow"></span>
                            </a>
                            <ul v-if="menu.chear && menu.chear.length" v-show="menu.open" class="list-unstyled" :class="{mini:minibar}">
                                <li v-for="submenu in menu.chear">
                                    <router-link :to="submenu.url" :class="{'active':$route.path==submenu.url || $route.meta.sidebar==submenu.key}">{{submenu.name}}</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="has_sub" v-else>
                            <a href="javascript:void(0);" :class="['waves-effect',{subdrop:$route.path==menu.url,'active':$route.path==menu.url || (menu.key && $route.meta.sidebar==menu.key)}]"  @click="$router.push({path:menu.url})">
                                <i :class="menu.icon"></i> 
                                <span>{{menu.name}}</span>
                            </a>
                        </li>
                    </template>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
    import { getSideMenu } from '@/api/login'
    import { getAllServices } from '@/api/service'
    import { mapState } from 'vuex'
    export default {
        name:"SideBar",
        data(){
            return {
                menus:[
                    {
                        name:"系统首页",
                        key:"home",
                        icon:"ti-home",
                        open:true,
                        url:"/",
                        chear:[]
                    },
                    {
                        name:"后台账户",
                        key:"account",
                        icon:"ti-user",
                        open:false,
                        url:"/adm",
                        chear:[
                            {
                                name:"用户管理",
                                url:"/adm/user",
                                key: "admin_user"
                            },
                            {
                                name:"角色管理",
                                url:"/adm/rule",
                                key: "admin_rule"
                            },
                            {
                                name:"部门管理",
                                url:"/adm/dept",
                                key: "admin_dept"
                            },
                        ]
                    },
                    {
                        name:"企事业单位",
                        icon:"ti-crown",
                        open:false,
                        chear:[
                            {
                                name:"医院管理",
                                url:"/hospital",
                                key:"hospital"
                            },
                            {
                                name:"政府单位",
                                url:"/gov",
                                key:"gov"
                            },
                            {
                                name:"市场企业",
                                url:"/company",
                                key:"company"
                            },
                        ]
                    },
                    {
                        name:"生活服务管理",
                        key:"hospital_order",
                        icon:"ti-receipt",
                        open:false,
                        chear:[]
                    },
                    {
                        name:"工作服务管理",
                        key:"gov_order",
                        icon:"ti-receipt",
                        open:false,
                        chear:[]
                    },
                    {
                        name:"新闻管理",
                        icon:"ti-gallery",
                        open:false,
                        chear:[
                            {
                                name:"新闻列表",
                                url:"/news",
                                key:"news"
                            },
                            {
                                name:"审核列表",
                                url:"/news/verify",
                                key:"news_verify"
                            }
                        ]
                    },
                    {
                        name:"政策速递",
                        key:"policy",
                        icon:"ti-rocket",
                        open:false,
                        chear:[
                            {
                                name:"模块管理",
                                url:"/policy/module",
                                key:"policy_module"
                            },
                            {
                                name:"新闻管理",
                                url:"/policy/news",
                                key:"policy_news"
                            },
                        ]
                    },
                    {
                        name:"人才管理",
                        key:"user",
                        icon:"ti-user",
                        open:false,
                        chear:[
                            {
                                name:"用户管理",
                                url:"/user",
                                key:"user"
                            },
                            {
                                name:"个性需求管理",
                                url:"/user/demand",
                                key:"user_demand"
                            },
                        ]
                    }
                ],
                selected: null,
                services:[]
            }
        },
        computed:{
            ...mapState(["minibar"])
        },
        methods:{
            menuClick(menu){
                this.menus=this.menus.map(m=>{
                    if(m.name!=menu.name){
                        m.open=false
                    }
                    return m
                })
                menu.open=!menu.open
            }
        },
        mounted(){
             getAllServices().then(data=>{
                this.hospital_services=data.filter(item=>{
                    return item.type==1
                }).map(item=>{
                    return {name:item.name,url:`/order/${item.alias}`,key:item.alias}
                })
                this.gov_services=data.filter(item=>{
                    return item.type==2
                }).map(item=>{
                    return {name:item.name,url:`/order/${item.alias}`,key:item.alias}
                })
                for(let index in this.menus){
                    if(this.menus[index].key=="hospital_order"){
                        this.menus[index]['chear']=this.hospital_services
                    }else if(this.menus[index].key=="gov_order"){
                        this.menus[index]['chear']=this.gov_services
                    }
                }
            })
        },
    }
</script>
<style>
    .mini-side-menu{
        width: auto;
        height: 100%;
        overflow: visible;
        position: relative;
    }
</style>