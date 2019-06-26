<template>
    <menu-wrapper ref="menuwrapper">
        <template slot="menu-button">
            {{labelName}} <span class="caret"></span>
        </template>
        <template slot="menu-content">
            <menu-item @click="doFilter(all)">
                <i :class="{'ti-check':selected==all.value}" style="width: 16px;display: inline-block;"></i> 
                {{all.text}}
            </menu-item>
            <menu-item @click="doFilter(filter)" v-for="(filter,index) in filters" :key="index">
                <i :class="{'ti-check':selected==filter.value}" style="width: 16px;display: inline-block;"></i> 
                {{filter.text}}
            </menu-item>
        </template>
    </menu-wrapper>
</template>
<script>
    import { MenuWrapper, MenuItem, MenuLink } from "vue-menu-button";
    export default {
        name:"MenuButton",
        components:{
            MenuWrapper,
            MenuItem,
            MenuLink
        },
        data(){
            return {
                all:{
                    text:"全部",
                    value:null
                }
            }
        },
        props:{
            filters:{
                type:Array,
                default(){
                    return []
                }
            },
            label:{
                type:String,
                required:true,
            },
            name:{
                type:String,
                required:true,
            },
            selected:{
                type:[String,Number],
                default:""
            }
        },
        computed:{
            labelName(){
                if(typeof(this.selected)=='undefined' || this.selected==null){
                    return this.label
                }else{
                    var filter = this.filters.filter(item=>item.value==this.selected)
                    if(filter.length>0){
                        return filter[0].text
                    }
                    return this.label
                }
            }
        },
        watch:{
            selected(){
                console.log("seleceed",this.selected)
            }
        },
        methods:{
            doFilter(filter){
                this.$emit("action", this.name, filter)
            }
        }
    }
</script>
<style>
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 3px;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid\9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}

[data-vue-menu-button] {
  background-color: transparent;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: inherit;
  display: inline-block;
  border-radius: 3px;
  /*font-weight: 700;*/
  /*height: 40px;*/
  /*line-height: 40px;*/
  /*padding: 0 30px;*/
  text-align: center;
  white-space: nowrap;
}

[data-vue-menu-button]:focus,[data-vue-menu-button]:hover {
  outline: 0;
  color: #236ca4;
  /*border-color: #236ca4;*/
  /*box-shadow: 0 0 3px 2px #236ca4;*/
}

[data-vue-menu-button]:hover + [data-vue-menu]{
    display: block !important;
    -webkit-transition:all .5s ease;
   -moz-transition:all .5s ease;
   -o-transition:all .5s ease;
   -ms-transition:all .5s ease;
   transition:all .5s ease;
   opacity: 1;
   visibility: visible;
}

[data-vue-menu]{
    opacity: 0;
    -webkit-transition:all .5s ease;
   -moz-transition:all .5s ease;
   -o-transition:all .5s ease;
   -ms-transition:all .5s ease;
   transition:all .5s ease;
}
[data-vue-menu]:hover{
    display: block !important;
    opacity: 1;
    visibility: visible;
}
[data-vue-menu] {
    display: block !important;
    visibility: hidden;
  list-style: none;
  margin: 10px 0 0 0;
  padding: 0;
  min-width: 110px;
  /*padding: 10px 0;*/
  border: 1px solid #236ca4;
  position: fixed;
  background-color: #236ca4;
  /*animation: slide-down 0.2s ease;*/
}

[data-vue-menu]::before {
  content: "";
  width: 0;
  height: 0;
  position: fixed;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #236ca4;
  top: -7px;
  left: 15px;
}

[data-vue-menu]::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #236ca4;
  top: -6px;
  left: 16px;
}

[data-vue-menu-item],
[data-vue-menu-link] {
  color: #fff;
  text-decoration: none;
  line-height: 28px;
  height: 28px;
  cursor: pointer;
  padding: 0 10px 5px 10px;
  display: block;
}

[data-vue-menu-item]:focus,
[data-vue-menu-link]:focus {
  outline: 0;
  background-color: #236ca4;
  color: #fff;
  display: block;
  text-decoration: underline;
}

[data-vue-menu-item]:hover,
[data-vue-menu-link]:hover {
  outline: 0;
  background-color: #236ca4;
  color: #fff;
  display: block;
  text-decoration: underline;
}

[tabindex="-1"]:focus,
*::-moz-focus-inner {
  border: 0;
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>