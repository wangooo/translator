<template>
    <div id="translateForm">
        <form v-on:submit='formSubmit'>
        <input v-model="textToTranslate" type="text" placeholder="请输入要翻译的内容">
        <select v-model="selectValue">
            <option value="en">en</option>
            <option value="japenese">japenese</option>
            <option value="korea">korea</option>
        </select>
        <input type="submit" value="翻译">
        </form>
    </div>
</template>

<script>
export default {
    name:'translateForm',
    // data:{
    //     textToTranslate:""
    // },
    data:function(){
        return {
            textToTranslate:"",
            selectValue:"en",
        }
    },//使用函数返回的data而不用直接调用的原因是：防止其他组件使用此组件时改变data数据，用函数则可以保护作用域
    methods:{
        formSubmit:function(e){
            this.$emit("submitText",this.textToTranslate,this.selectValue);
            e.preventDefault();
        }
    }
}
</script>

<style scoped>
</style>
