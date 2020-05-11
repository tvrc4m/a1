<template>
    <div class="container">
        <div class="row">
            <div :is="service"></div>
        </div>
    </div>
</template>
<script>
    import tijian from './hospital/tijian/package/index'
    import jiating from './hospital/jiating/doctor/index'
    import liliao from './hospital/liliao/index'
    import menzhen from './hospital/menzhen/index'
    import zhuyuan from './hospital/zhuyuan/index'
    export default {
        data() {
            return {
                service:null
            }
        },
        watch:{
            $route(){
                if(route.name=='service_setting'){
                    this.changeService()
                }
            }
        },
        methods:{
            changeService(){
                switch(this.$route.params.alias){
                    case 'tijian':
                        this.service = tijian;
                        break;
                    case 'jiating':
                        this.service= jiating;
                        break;
                    case 'liliao':
                        this.service= liliao;
                        break;
                    case 'menzhen':
                        this.service= menzhen;
                        break;
                    case 'zhuyuan':
                        this.service= zhuyuan;
                        break;
                }
            }
        },
        mounted(){
           this.changeService()
        }
    }
</script>
<style scoped>
   
</style>
