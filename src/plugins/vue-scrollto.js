import Vue from 'vue';
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
    duration: 1000,//早すぎないように遅くする
    easing: "ease-out"
})

export default new Vue({
});