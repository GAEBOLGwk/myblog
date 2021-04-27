<template>
    <div id="app">
        <router-link to="/showblog"> 博客列表</router-link>
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

                <button @click="post">修改博客</button>
            </form>       
                <div footer>
                    <h1 v-if="submit">修改成功</h1>   
                </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'addblog',
        data(){
            return{
                id:this.$route.params.id,
                title:'',
                centre:'',
                category:[],
                authors:['chris','Miss-yang','Mr-ka'],
                submit:false
            } 
        },
        methods:{
            
            post(){
                axios.put('https://myblog-1a1d4-default-rtdb.firebaseio.com/posts/' +this.id +'.json',{title:this.title, body:this.centre })
                .then(this.submit = true)
            }
        },
        created () {
            var that = this
            axios.get('https://myblog-1a1d4-default-rtdb.firebaseio.com/posts/' + this.id +'.json')
            .then(function(d){
               that.title = d.data.title;
               that.centre = d.data.body;
            //    console.log(d.title);
            //    console.log(d);
            })
        },
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
    display: flex;
    justify-content: center;
    align-content: center;
    background: linear-gradient(#c3afe9,#39eeee);
}
</style>