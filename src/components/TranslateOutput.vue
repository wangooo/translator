<template>
    <div id="translateOutput">
        <p>{{outPut}}</p>
    </div>
</template>

<script>
export default {
    name:'translateOutput',
    // props:['outPut']
    props:{
        outPut:{
            type:String,
            required:true
        }
    }
}
</script>
    
<style scoped>
    p{
        color:brown;
        font-size:24px;
    }
</style>
