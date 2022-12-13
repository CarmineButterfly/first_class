// 引入的不再是Vue构造函数,引入的是名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象(类似与vue2中的vm,但更轻量型),并挂载
createApp(App).mount('#app')
