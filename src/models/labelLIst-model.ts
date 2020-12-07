const localStorageKeyName = 'labelList';
type LabelLIstModel = {
    data: string[]
    fetch: () => string[] // 是一个函数，参数是空的，返回一个 string 数组
    create: (name: string) => 'success' | 'duplicated' // 联合类型
    save: () => void // void 的意思是不返回
    // 如果是函数，箭头前面是输入参数的类型，箭头后面是返回值的类型。
}
const labelListModel: LabelLIstModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    create(name) {
        if(this.data.indexOf(name) >= 0) {return 'duplicated'}
        this.data.push(name);
        this.save();
        return 'success';
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export {labelListModel};