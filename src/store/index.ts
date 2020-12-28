import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);

type RootState = {
    recordList: RecordItem[],
    labelList: Label[],
    currentLabel?: Label
}

const store = new Vuex.Store({
    state: {
        recordList: [],
        labelList: [],
        currentLabel: undefined
    } as RootState,
    mutations: {
        setCurrentLabel(state, id: string){
            state.currentLabel = state.labelList.filter(t => t.id === id)[0];
        },
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList   ') || '[]') as RecordItem[];
        },
        createRecord(state, record) {
            const record2: RecordItem = clone(record);
            record2.createdAt = new Date();
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
            store.commit('saveLabels')
            window.alert('添加成功');
        },
        saveLabels(state){
            window.localStorage.setItem('labelList',
                JSON.stringify(state.labelList));
        }
    }
});

export default store;