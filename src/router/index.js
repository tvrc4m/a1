import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const LayoutBasic = () => import('@/views/layout/basic')

const home = () => import('@/views/home/index')
const login = () => import('@/views/login')
const AdminUserList = () => import('@/views/admin/user/index')
const AdminUserForm = () => import('@/views/admin/user/form')
const AdminRuleList = () => import('@/views/admin/rule/index')
const AdminRuleForm = () => import('@/views/admin/rule/form')
const AdminRulePermission = () => import('@/views/admin/rule/permission')
const AdminDeptList = () => import('@/views/admin/dept/index')
const AdminDeptForm = () => import('@/views/admin/dept/form')

const UserList = () => import('@/views/user/index')
const UserForm = () => import('@/views/user/form')
const UserDemandList = () => import('@/views/user/demand/index')

const NewsList = () => import('@/views/news/index')
const NewsForm = () => import('@/views/news/form')

const HospitalList = () => import('@/views/hospital/index')
const HospitalDetail = () => import('@/views/hospital/detail')
const HospitalForm = () => import('@/views/hospital/form')
const HospitalUserList = () => import('@/views/hospital/user/index')
const HospitalUserForm = () => import('@/views/hospital/user/form')
const HospitalRuleList = () => import('@/views/hospital/rule/index')
const HospitalRuleForm = () => import('@/views/hospital/rule/form')
const HospitalRulePermission = () => import('@/views/hospital/rule/permission')
const HospitalOfficeList = () => import('@/views/hospital/office/index')
const HospitalOfficeForm = () => import('@/views/hospital/office/form')

const GovList = () => import('@/views/gov/index')
const GovForm = () => import('@/views/gov/form')
const GovUserList = () => import('@/views/gov/user/index')
const GovUserForm = () => import('@/views/gov/user/form')
const GovRuleList = () => import('@/views/gov/rule/index')
const GovRuleForm = () => import('@/views/gov/rule/form')
const GovRulePermission = () => import('@/views/gov/rule/permission')

const CompanyList = () => import('@/views/company/index')
const CompanyDetail = () => import('@/views/company/detail')
const CompanyForm = () => import('@/views/company/form')
const CompanyUserList = () => import('@/views/company/user/index')
const CompanyUserForm = () => import('@/views/company/user/form')
const CompanyRuleList = () => import('@/views/company/rule/index')
const CompanyRuleForm = () => import('@/views/company/rule/form')
const CompanyRulePermission = () => import('@/views/company/rule/permission')


const OrderList = () => import('@/views/order/index')
const OrderForm = () => import('@/views/order/form')

const ServiceSetting = () => import('@/views/service/setting')
const TijianPakcageForm = () => import('@/views/service/hospital/tijian/package/form')
const JiatingDoctorForm = () => import('@/views/service/hospital/jiating/doctor/form')

const PolicyModuleList = () => import('@/views/policy/module/index')
const PolicyModuleForm = () => import('@/views/policy/module/form')
const PolicyNewsList = () => import('@/views/policy/news/index')
const PolicyNewsForm = () => import('@/views/policy/news/form')

const routes = [
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: '/',
        components: {
            default: LayoutBasic,
        },
        children: [
            {
                path: "/",
                name: "home",
                component: home
            },
            {
                path: "/adm/user",
                name: "admin_user",
                component: AdminUserList,
                meta:{
                    sidebar:"admin_user"
                }
            },
            {
                path: "/adm/user/add",
                name: "admin_user_add",
                component: AdminUserForm,
                meta:{
                    sidebar:"admin_user"
                }
            },
            {
                path: "/adm/user/edit/:id",
                name: "admin_user_edit",
                component: AdminUserForm,
                meta:{
                    sidebar:"admin_user"
                }
            },
            {
                path: "/adm/rule",
                name: "admin_rule",
                component: AdminRuleList,
                meta:{
                    sidebar:"admin_rule"
                }
            },
            {
                path: "/adm/rule/add",
                name: "admin_rule_add",
                component: AdminRuleForm,
                meta:{
                    sidebar:"admin_rule"
                }
            },
            {
                path: "/adm/rule/edit/:id",
                name: "admin_rule_edit",
                component: AdminRuleForm,
                meta:{
                    sidebar:"admin_rule"
                }
            },
            {
                path: "/adm/rule/:id/permission",
                name: "admin_rule_permission",
                component: AdminRulePermission,
                meta:{
                    sidebar:"admin_rule"
                }
            },
            {
                path: "/adm/dept",
                name: "admin_dept",
                component: AdminDeptList,
                meta:{
                    sidebar:"admin_dept"
                }
            },
            {
                path: "/adm/dept/add",
                name: "admin_dept_add",
                component: AdminDeptForm,
                meta:{
                    sidebar:"admin_dept"
                }
            },
            {
                path: "/adm/dept/edit/:id",
                name: "admin_dept_edit",
                component: AdminDeptForm,
                meta:{
                    sidebar:"admin_dept"
                }
            },
        ]
    },
    {
        path: '/news',
        components: {
            default: LayoutBasic,
        },
        children:[
            {
                path: "",
                name: "news",
                components: {
                    default: NewsList,
                },
                meta:{
                    sidebar:"news"
                }
            },
            {
                path: "add",
                name: "news_add",
                components: {
                    default: NewsForm,
                },
                meta:{
                    sidebar:"news"
                }
            },
            {
                path: "edit/:id",
                name: "news_edit",
                components: {
                    default: NewsForm,
                },
                meta:{
                    sidebar:"news"
                }
            },
        ]
    },
    {
        path: '/policy',
        components: {
            default: LayoutBasic,
        },
        children:[
            {
                path: "module",
                name: "policy_module",
                component: PolicyModuleList,
                meta:{
                    sidebar:"policy_module"
                }
            },
            {
                path: "module/add",
                name: "policy_module_add",
                component: PolicyModuleForm,
                meta:{
                    sidebar:"policy_module"
                }
            },
            {
                path: "module/edit/:id",
                name: "policy_module_edit",
                component: PolicyModuleForm,
                meta:{
                    sidebar:"policy_module"
                }
            },
            {
                path: "news",
                name: "policy_news",
                component: PolicyNewsList,
                meta:{
                    sidebar:"policy_news"
                }
            },
            {
                path: "news/add",
                name: "policy_news_add",
                component: PolicyNewsForm,
                meta:{
                    sidebar:"policy_news"
                }
            },
            {
                path: "news/edit/:id",
                name: "policy_news_edit",
                component: PolicyNewsForm,
                meta:{
                    sidebar:"policy_news"
                }
            },
        ]
    },
    {
        path: '/hospital',
        components: {
            default: LayoutBasic,
        },
        children:[
            {
                path: "",
                name: "hospital",
                component:HospitalList,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: "add",
                name: "hospital_add",
                component: HospitalForm,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: "edit/:id",
                name: "hospital_edit",
                component: HospitalForm,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: "detail/:id",
                name: "hospital_detail",
                component: HospitalDetail,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/user",
                name: "hospital_user",
                component: HospitalUserList,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/user/add",
                name: "hospital_user_add",
                component: HospitalUserForm,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/user/edit/:id",
                name: "hospital_user_edit",
                component: HospitalUserForm,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/rule",
                name: "hospital_rule",
                component: HospitalRuleList,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/rule/add",
                name: "hospital_rule_add",
                component: HospitalRuleForm,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/rule/edit/:id",
                name: "hospital_rule_edit",
                component: HospitalRuleForm,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/rule/edit/:id/permission",
                name: "hospital_rule_permission",
                component: HospitalRulePermission,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/office",
                name: "hospital_office",
                component: HospitalOfficeList,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/office/add",
                name: "hospital_office_add",
                component: HospitalOfficeForm,
                meta:{
                    sidebar:"hospital"
                }
            },
            {
                path: ":cid/office/edit/:id",
                name: "hospital_office_edit",
                component: HospitalOfficeForm,
                meta:{
                    sidebar:"hospital"
                }
            },
        ]
    },
    {
        path: '/gov',
        components: {
            default: LayoutBasic,
        },
        children:[
            {
                path: "",
                name: "gov",
                component:GovList,
                meta:{
                    sidebar:"gov"
                }
            },
            {
                path: "add",
                name: "gov_add",
                component: GovForm,
                meta:{
                    sidebar:"gov"
                }
            },
            {
                path: "edit/:id",
                name: "gov_edit",
                component: GovForm,
                meta:{
                    sidebar:"gov"
                }
            },
            {
                path: ":cid/user",
                name: "gov_user",
                component: GovUserList,
                meta:{
                    sidebar:"gov"
                }
            },
            {
                path: ":cid/user/add",
                name: "gov_user_add",
                component: GovUserForm,
                meta:{
                    sidebar:"gov"
                }
            },
            {
                path: ":cid/user/edit/:id",
                name: "gov_user_edit",
                component: GovUserForm,
                meta:{
                    sidebar:"gov"
                }
            },
            {
                path: ":cid/rule",
                name: "gov_rule",
                component: GovRuleList,
                meta:{
                    sidebar:"gov"
                }
            },
            {
                path: ":cid/rule/add",
                name: "gov_rule_add",
                component: GovRuleForm,
                meta:{
                    sidebar:"gov"
                }
            },
            {
                path: ":cid/rule/edit/:id",
                name: "gov_rule_edit",
                component: GovRuleForm,
                meta:{
                    sidebar:"gov"
                }
            },
            {
                path: ":cid/rule/edit/:id/permission",
                name: "gov_rule_permission",
                component: GovRulePermission,
                meta:{
                    sidebar:"gov"
                }
            },
        ]
    },
    {
        path: '/company',
        components: {
            default: LayoutBasic,
        },
        children:[
            {
                path: "",
                name: "company",
                component:CompanyList,
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: "add",
                name: "company_add",
                components: {
                    default: CompanyForm,
                },
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: "edit/:id",
                name: "company_edit",
                component: CompanyForm,
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: "detail/:id",
                name: "company_detail",
                component: CompanyDetail,
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: ":cid/user",
                name: "company_user",
                component: CompanyUserList,
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: ":cid/user/add",
                name: "company_user_add",
                component: CompanyUserForm,
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: ":cid/user/edit/:id",
                name: "company_user_edit",
                component: CompanyUserForm,
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: ":cid/rule",
                name: "company_rule",
                component: CompanyRuleList,
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: ":cid/rule/add",
                name: "company_rule_add",
                component: CompanyRuleForm,
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: ":cid/rule/edit/:id",
                name: "company_rule_edit",
                component: CompanyRuleForm,
                meta:{
                    sidebar:"company"
                }
            },
            {
                path: ":cid/rule/edit/:id/permission",
                name: "company_rule_permission",
                component: CompanyRulePermission,
                meta:{
                    sidebar:"company"
                }
            },
        ]
    },
    {
        path: '/order',
        components: {
            default: LayoutBasic,
        },
        children:[
            {
                path: ":name",
                name: "order",
                component: OrderList,
            },
            {
                path: "add",
                name: "order_add",
                component: OrderForm,
            },
            {
                path: "edit/:id",
                name: "order_edit",
                component: OrderForm
            },
        ]
    },
    {
        path: '/company/:cid/service',
        components: {
            default: LayoutBasic,
        },
        children:[
            {
                path: ":alias/setting",
                name: "service_setting",
                components: {
                    default: ServiceSetting,
                }
            },
            {
                path:"tijian/package/add",
                name:"tijian_package_add",
                component:TijianPakcageForm,
                meta:{
                    sidebar:"tijian"
                }
            },
            {
                path:"tijian/package/add/:id",
                name:"tijian_package_edit",
                component:TijianPakcageForm,
                meta:{
                    sidebar:"tijian"
                }
            },
            {
                path:"jiating/doctor/add",
                name:"jiating_doctor_add",
                component:JiatingDoctorForm,
                meta:{
                    sidebar:"jiating"
                }
            },
            {
                path:"jiating/doctor/add/:id",
                name:"jiating_doctor_edit",
                component:JiatingDoctorForm,
                meta:{
                    sidebar:"jiating"
                }
            }
        ]
    },
    {
        path: '/user',
        components: {
            default: LayoutBasic,
        },
        children:[
            {
                path: "",
                name: "user",
                component: UserList,
            },
            {
                path: "add",
                name: "user_add",
                component: UserForm,
            },
            {
                path: "edit/:id",
                name: "user_edit",
                component: UserForm
            },
             {
                path: "demand",
                name: "user_demand",
                component: UserDemandList,
            },
        ]
    }
]

const router = new Router({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
})

export default router
