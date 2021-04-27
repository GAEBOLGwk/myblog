<template>
    <div class="main">
        <h1>题目{{blog.title}}</h1>
        <article>内容{{blog.body}} </article>
        <button @click="del()">删除</button>
        <button><router-link :to="'/editblog/' + id">修改</router-link></button>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                blog:{},
                key:''
            }
        },

        created () {
            // console.log(this.id);
            var that =this
            axios.get('https://myblog-1a1d4-default-rtdb.firebaseio.com/posts.json')
            .then(function(d){
                that.blog = d.data[that.id]
                console.log(that.blog);
            })
            
        },
        // created () {
        //     var that =this
        //     axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
        //     .then(function(d){
        //         that.blog = d.data
        //     })
        // },
        methods: {
            del() {
                axios.delete('https://myblog-1a1d4-default-rtdb.firebaseio.com/posts/' + this.id +".json")           
                .then(response => this.$router.push({path:'/showblog'}))

            },
            edit(){
                this.$router.push({path:'/editblog'})
            }
        },
    }
</script>

<style scoped>
 .main{
     background: #eee;
     padding: 20px;
     height: 700px;

 }
</style>