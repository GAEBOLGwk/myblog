<template>
    <div>
        <router-view/>  
        <add-blog/>
        <show-blog/>
    </div>
</template>

<script>
import AddBlog from '../components/addblog'
import ShowBlog from'../components/showblog'
    export default {
        name:'index',
        components: {
            AddBlog,ShowBlog,
        },
    }
</script>

<style scoped>

</style>