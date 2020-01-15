export default {
    install(Vue){
        Vue.directive('custom',{
            inserted: function (el) {
                el.focus()
            }
        })
    }
}