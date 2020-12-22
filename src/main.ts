import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import {labelListModel} from '@/models/labelList-model';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.labelList = labelListModel.fetch();
window.createLabel = (name: string) => {
    const message = labelListModel.create(name);
    if (message === 'duplicated') {
        window.alert('标签名重复了');
    } else {
        window.alert('添加成功');
    }
}


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
