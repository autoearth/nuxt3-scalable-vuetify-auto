//import createVuetify
import {createVuetify } from "vuetify"
//crate vuetify instance
export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        //enable ssr
        ssr: true,
    })
    //add vuetify to nuxt app
    nuxtApp.vueApp.use(vuetify)
})
