<template>
  <div id="app">
    <h1>在线翻译</h1>
    <p class="desc">简洁/高效/并不美观</p>
    <translateForm v-on:submitText="submitTextFun"></translateForm>
    <translateOutput v-bind:outPut="reloutPut"></translateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm';
import TranslateOutput from './components/TranslateOutput';

export default {
  name: 'App',
  data:function(){
    return{
      reloutPut:""
    }
  },
  components:{
    TranslateForm,TranslateOutput
  },
  methods: {
    submitTextFun:function(text,val){
      if(val=="en"){
          this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181031T075947Z.a9ae76141b0a1408.f7f730c924f3a93b3a4849a6ea99cd13bf78cdfd&lang=en&text='+text)
              .then((response)=>{
                this.reloutPut=response.body.text[0];
              })
      }
      else if(val=="japenese"){
          this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181031T075947Z.a9ae76141b0a1408.f7f730c924f3a93b3a4849a6ea99cd13bf78cdfd&lang=ja&text='+text)
              .then((response)=>{
                this.reloutPut=response.body.text[0];
              })
      }
      else{
          this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181031T075947Z.a9ae76141b0a1408.f7f730c924f3a93b3a4849a6ea99cd13bf78cdfd&lang=ko&text='+text)
              .then((response)=>{
                this.reloutPut=response.body.text[0];
              })
      }
    }
  }
}
</script>

<style>
*{
  text-align:center;
}
.desc {
  color:grey;
}
</style>
