import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import store from './store'
import router from '@/router'

// 创建vue实例
const app = createApp(App)

// 挂载router
app.use(router)
// 挂载pinia
app.use(store)
// 挂载ElementPlus
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

// 挂载实例
app.mount('#app')
