import Vue from 'vue'
import App from './App.vue'

// registering components globally
// Vue.component('text-input', {
//   template: '<textarea :placeholder="textValue" @click="changeText"></textarea>',
//   data: function(){
//     return {
//       textvalue: 'Type Here'
//     }
//   },
//   methods: {
//     changeText: function() {
//       this.textValue= 'Text changed'
//     }
//   }
// })
// Vue.compo
// var component1 = {
//   template: '<p>Component 1</p>'
// }
// var component2 ={
//   template: '<p>Component2</p>'
// }

export const EventBus = new Vue();
new Vue({
  el: '#app',
  // registering components enternally
  // components: {
  //   'component-1':component1,
  //   'component-2': component2
  // }
  render: h => h(App)
})
