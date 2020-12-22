import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import {labelListModel} from '@/models/labelList-model';
import {recordListModel} from '@/models/recordList-model';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

// record store
window.recordList = recordListModel.fetch();
window.createRecord = (record: RecordItem) => recordListModel.create(record);

// label store
window.labelList = labelListModel.fetch();
window.findLabel = (id: string) => {
    return window.labelList.filter(l => l.id === id)[0];
}
window.createLabel = (name: string) => {
    const message = labelListModel.create(name);
    if (message === 'duplicated') {
        window.alert('标签名重复了');
    } else {
        window.alert('添加成功');
    }
}
window.removeLabel = (id: string) => {
    return labelListModel.remove(id);
}
window.updateLabel = (id: string, name: string) => {
    return labelListModel.update(id, name);
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
