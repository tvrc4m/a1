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
                <iform type="text" label="部门名称" placeholder="请输入部门名称" :value.sync="dept.name" required></iform>
                <iform type="confirm" @submit="updateDept"></iform>
            </form>
        </div>
    </div>
</template>
<script>
    import iform from '@/components/form/index'
    import breadcrumb from '@/components/breadcrumb/index'
    import { addDept,editDept,getDept } from '@/api/admin/dept'
    import { getAllRules } from '@/api/rule'
    import { assertEmpty,assertNumber,assertLength,assertEmail,assertPhone } from '@/utils/validate'
    export default {
        name:"AdminUserForm",
        components:{
            iform,
            breadcrumb
        },
        data(){
            return {
                dept:{},
                options:[],
                breadcrumbs:[],
                add:true,
                image:null
            }
        },
        methods:{
            updateDept(){
                if(!assertEmpty(this.dept.name)){
                    this.$message.error("请输入部门名称")
                    return false
                }
                if(this.add){
                    addDept(this.dept).then(data=>{
                        console.log("addDept",data)
                        this.$message.success("添加成功")
                        this.$router.push({name:"admin_dept"})
                    })
                }else{
                    editDept(this.dept.id, this.dept).then(data=>{
                        this.$message.success("编辑成功")
                        this.$router.push({name:"admin_dept"})
                    })
                }
            }
        },
        mounted(){
            if(this.$route.params.id){
                this.add=false
                getDept(this.$route.params.id).then(data=>{
                    this.dept=data
                    // this.$set(this.dept, "password", null)
                    console.log("getDept",data)
                })
            }
            
            this.breadcrumbs=[
                {
                    name:"后台账户",
                    route:""
                },
                {
                    name:"部门管理",
                    route:{name:"admin_dept"}
                },
                {
                    name:this.add?"新增":"编辑",
                }
            ]
        }
    }
</script>