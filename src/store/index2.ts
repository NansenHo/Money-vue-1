import {recordListModel} from '@/models/recordList-model';
import {labelListModel} from '@/models/labelList-model';

const store = {
    // record store
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.create(record),

    // label store
    labelList: labelListModel.fetch(),
    findLabel (id: string){
        return this.labelList.filter(l => l.id === id)[0];
    },
    createLabel: (name: string) => {
        const message = labelListModel.create(name);
        if (message === 'duplicated') {
            window.alert('标签名重复了');
        } else {
            window.alert('添加成功');
        }
    },
    removeLabel: (id: string) => {
        return labelListModel.remove(id);
    },
    updateLabel: (id: string, name: string) => {
        return labelListModel.update(id, name);
    },
};

export default store;