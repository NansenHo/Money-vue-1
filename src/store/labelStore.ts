import createId from '@/lib/createId';
const localStorageKeyName = 'labelList';


const labelStore = {
    // label store
    labelList: [] as Label[],
    fetchLabels(){
        this.labelList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.labelList
    },
    findLabel(id: string) {
        return this.labelList.filter(l => l.id === id)[0];
    },
    createLabel(name: string) {
        // this.data = [{id:'1', name:'1'}, {id:'2',name:'2'}]
        const names = this.labelList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            window.alert('标签名重复了');
            return 'duplicated';
        }
        const id = createId().toString();
        this.labelList.push({id, name: name});
        this.saveLabels();
        window.alert('添加成功');
        return 'success';
    },
    removeLabel(id: string) {
        let index = -1;
        for (let i = 0; i < this.labelList.length; i++) {
            if (this.labelList[i].id === id) {
                index = i;
                break;
            }
        }
        this.labelList.splice(index, 1);
        this.saveLabels();
        return true;
    },
    updateLabel(id: string, name: string) {
        const idList = this.labelList.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.labelList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const label = this.labelList.filter(item => item.id === id)[0];
                label.name = name;
                this.saveLabels();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    saveLabels(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.labelList));
    }
};

labelStore.fetchLabels();

export default labelStore;