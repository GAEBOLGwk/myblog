<template>
    <div class="main">
        <div class="top">
            <router-link to="/addblog" class="trs">添加博客</router-link>
            <p>博客总览</p>
            <input type="text" v-model="searchunit" placeholder="搜索" >
        </div>
            <div class="content"  v-for="(blog,index) in search" :key="index">
                <router-link class="trs" :to="'/blog/' + blog.id">
                <h2 v-rainbow>{{blog.title |toup}}</h2>
                </router-link>
                <article>{{blog.body | snippet}}</article>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                list:[],
                searchunit:'',
            }
        },
        created () {
            var that =this
            // axios.get('https://jsonplaceholder.typicode.com/posts')
            axios.get('https://myblog-1a1d4-default-rtdb.firebaseio.com/posts.json')
            .then(function(data){
                // console.log(data.data);
                return data.data
            })
            .then(function(d){
                var bloglist =[];
                for(let key in d){
                    d[key].id = key;
                    bloglist.push(d[key])
                    that.list = bloglist
                }


            })
        },
        filters: {
            toup: function(value) {
                return value.toUpperCase();
            },
            snippet:function(value){
                return value.slice(0,100) +'...';
            }
        },
        computed: {
             search:function(){
               return this.list.filter((e)=>{
                    return e.title.match(this.searchunit)
               })
            },
        },
        directives:{
            'rainbow':{
                bind(el,binding,vnode){
                    el.style.color = '#' + Math.random().toString(16).slice(2,8);
                }
                }
        }
    }
</script>

<style scoped>
.trs{
    text-decoration: none;
}
.top{
    margin: auto;
    text-align: center;
}
.main{
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center; 
    
    
}
.content{
    width: 800px;
    background: #eee;
    margin: 10px auto;
    padding: 20px;
}
</style>