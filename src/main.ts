import './assets/styles/main.scss'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {
  Button,
  Input,
  InputNumber,
  Select,
  Radio,
  Checkbox,
  Slider,
  Switch,
  Modal
} from 'ant-design-vue';

const app = createApp(App)
// antdV 组件库
app.use(Button)
app.use(Input)
app.use(InputNumber)
app.use(Select)
app.use(Radio)
app.use(Checkbox)
app.use(Slider)
app.use(Switch)
app.use(Modal)

app.use(createPinia())
app.use(router)

app.mount('#app')
