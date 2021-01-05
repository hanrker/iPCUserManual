// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    props:['todo'],
    template: '<li>{{todo.text}}</li>'
       
})

var app2 = new Vue({
    el:'#app2',
    data:{
        name:'han',
        groceryList: [
            { id: 0, text: '蔬菜1' },
            { id: 1, text: '奶酪1' },
            { id: 2, text: '随便其它什么人吃的东西' }
          ]
    }
})

var app = new Vue({
    el:'#app',
    data:{
        message:"sss"
    },
});

