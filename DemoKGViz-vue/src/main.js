import {createApp} from 'vue'
import App from './App.vue'
import {store} from "@/store"
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    }
})

const app = createApp(App)
app.use(store)
app.use(vuetify)
app.component('VueDatePicker', VueDatePicker)
app.mount('#app')
