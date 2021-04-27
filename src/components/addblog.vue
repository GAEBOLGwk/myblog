<template>
    <div id="app">
        <router-link to="/showblog"> 博客列表</router-link>
            <p>添加博客</p>
            <form class="theme" v-if="!submit">
                <label for="">主题:</label>
                <input type="text" v-model="title">
                <label for="">内容:</label>
                <textarea v-model="centre" cols="30" rows="10"></textarea>
                <label for="">分类:</label>
                <div>
                    <label for="">Node.js:</label>
                    <input type="checkbox" v-model="category" value="Node.js">
                     <label for="">Vue.js:</label>
                    <input type="checkbox" v-model="category" value="Vue.js">
                     <label for="">React.js:</label>
                    <input type="checkbox" v-model="category" value="React.js">
                </div>
                <p>作者:</p>
                <select v-model="authors">
                    <option v-for="(author,index) in authors" :key="index">{{author}}</option> 
                </select>

                <button @click="post">添加博客</button>
            </form>       
                <div footer>
                    <p v-if="submit">提交成功</p>   
                    <p>主题:{{title}}</p>
                    <p>内容:{{centre}}</p>
                    <p v-for="(i,index) in category" :key="index">分类:{{i}}</p>
                </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'addblog',
        data(){
            return{
                title:'',
                centre:'',
                category:[],
                authors:['chris','Miss-yang','Mr-ka'],
                submit:false
            } 
        },
        methods:{
            // 'https://jsonplaceholder.typicode.com/posts'
            post(){
                axios.post('https://myblog-1a1d4-default-rtdb.firebaseio.com/posts.json',
                   { userid:1,title:this.title,body:this.centre
                   })
                .then(this.submit = true)
            }
        }
    }
</script>

<style scoped>
#app{
    margin: 0;
    padding: 0;
}
p{
    margin: 0,auto;
    width: 800px;
}
.theme{
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin:auto;
    flex: 1;
}
.footer{
    height: 300px;
}
</style>