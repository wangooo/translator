import Vue from 'vue'
import Router from 'vue-router'
import TranslateForm from '@/components/TranslateForm'
import TranslateOutput from '@/components/TranslateOutput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        form: TranslateForm,
        output: TranslateOutput
      }
    }
  ]
})
