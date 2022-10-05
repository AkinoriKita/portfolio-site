import Vue from 'vue';
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
    duration: 1000,//早すぎないように遅くする
    offset: -60,//オフセットで遷移先の要素がヘッダーに隠れるのを対策
    easing: "ease-out"
})

export default new Vue({
});