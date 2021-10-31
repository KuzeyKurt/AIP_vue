import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import ru from 'vuetify/es5/locale/ru'

export default new Vuetify({
    lang:
    {
        locales: { ru },
        current: 'ru',
    },

    
});
