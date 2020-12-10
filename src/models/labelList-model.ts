const localStorageKeyName = 'labelList';
type Label = {
    id: string
    name: string
}
type LabelListModel = {
    data: Label[]
    fetch: () => Label[] // 是一个函数，参数是空的，返回一个 string 数组
    create: (name: string) => 'success' | 'duplicated' // 联合类型
    save: () => void // void 的意思是不返回
    // 如果是函数，箭头前面是输入参数的类型，箭头后面是返回值的类型。
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
}
const labelListModel: LabelListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    create(name) {
        // this.data = [{id:'1', name:'1'}, {id:'2',name:'2'}]
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        this.data.push({id: name, name: name});
        this.save();
        return 'success';
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    update(id, name) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const label = this.data.filter(item => item.id === id)[0];
                label.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    }
};

export {labelListModel};