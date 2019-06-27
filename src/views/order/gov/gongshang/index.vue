<template>
    <table class="table m-0 table-striped table-bordered dataTable no-footer">
        <thead>
            <tr>
                <th v-for="(header,index) in headers" :key="index">{{header.label}}</th>
            </tr>
        </thead>
        <tbody v-if="orders.length">
            <tr v-for="(order,index) in orders" :key="index">
                <td>{{order.id}}</td>
                <td>{{order.user_name}}</td>
                <td>{{order.createtime | dateFormat}}</td>
                <td>
                    <button class="btn btn-white btn-xs" v-if="order.status==1">预约中</button>
                    <button  class="btn btn-white btn-xs" v-else-if="order.status==2">预约成功</button>
                    <button  class="btn btn-white btn-xs" v-else-if="order.status==3">取消预约</button>
                </td>
                <td width="200">
                    <button type="button" class="btn btn-primary btn-xs waves-effect waves-light m-r-10" @click="editOrder(order)">编辑</button>
                </td>
            </tr>
        </tbody>
        <tfoot v-else-if="!loading">
            <tr>
                <td colspan="10" style="text-align: center;">没有数据</td>
            </tr>
        </tfoot>
    </table>
</template>
<script>
    export default {
        name:"GovGongshangOrder",
        props:{
            orders:{
                type:Array,
                default(){
                    return []
                }
            },
            loading:{
                type:Boolean,
                default: true
            }
        },
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
                        label:"预约用户",
                        name:"user_name",
                    },
                    {
                        label:"提交时间",
                        name:"createtime",
                    },
                    {
                        label:"状态",
                        name:"status",
                        filters:[{text:"预约中",value:1},{text:"预约成功",value:2},{text:"取消预约",value:3}],
                    },
                    {
                        label:"操作",
                        name:"operation",
                    }
                ]
            }
        },
        methods:{
            editOrder(order){
                
            }
        }
    }
</script>