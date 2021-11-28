import Vue from 'vue'
import App from './App.vue'

// require styles
import 'video.js/dist/video-js.css'


Vue.config.productionTip = false

import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'

import vuetify from './plugins/vuetify'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer)

// console.log(VueVideoPlayer);
new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')