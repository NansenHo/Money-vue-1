import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        recordList: [],
        labelList: [],
        currentLabel: undefined
    } as RootState,
    mutations: {
        setCurrentLabel(state, id: string) {
            state.currentLabel = state.labelList.filter(t => t.id === id)[0];
        },
        updateLabel(state, payload: { id: string, name: string }) {
            const {id, name} = payload;
            const idList = state.labelList.map(item => item.id);
            if (idList.indexOf(id) >= 0) {
                const names = state.labelList.map(item => item.name);
                if (names.indexOf(name) >= 0) {
                    window.alert('标签名已存在');
                } else {
                    const label = state.labelList.filter(item => item.id === id)[0];
                    label.name = name;
                    store.commit('saveLabels');
                }
            }
        },
        removeLabel(state, id: string) {
            let index = -1;
            for (let i = 0; i < state.labelList.length; i++) {
                if (state.labelList[i].id === id) {
                    index = i;
                    break;
                }
            }
            if(index>=0){
                state.labelList.splice(index, 1);
                store.commit('saveLabels');
                router.back();
            } else {
                window.alert('删除失败');
            }
        },
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
        },
        createRecord(state, record) {
            const record2: RecordItem = clone(record);
            record2.createdAt = new Date().toISOString();
            state.recordList.push(record2);
            store.commit('saveRecords');
            // console.log(state.recordList);
            // recordStore.saveRecords();
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList',
                JSON.stringify(state.recordList));
        },
        fetchLabels(state) {
            state.labelList = JSON.parse(window.localStorage.getItem('labelList') || '[]');
        },
        createLabel(state, name: string) {
            // this.data = [{id:'1', name:'1'}, {id:'2',name:'2'}]
            const names = state.labelList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                window.alert('标签名重复了');
            }
            const id = createId().toString();
            state.labelList.push({id, name: name});
            store.commit('saveLabels');
            window.alert('添加成功');
        },
        saveLabels(state) {
            window.localStorage.setItem('labelList',
                JSON.stringify(state.labelList));
        }
    }
});

export default store;