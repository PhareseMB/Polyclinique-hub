import { createApp } from 'vue'
import App from './App.vue'

// Reset global minimal
const style = document.createElement('style')
style.textContent = `
  html, body { margin: 0; padding: 0; }
  body {
    background: #eceef1;
    font-family: 'Public Sans', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  * { box-sizing: border-box; }
`
document.head.appendChild(style)

createApp(App).mount('#app')
