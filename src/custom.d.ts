// 全局使用的类型放到这个文件夹里来
type RecordItem = { // ts 类型声明
        labels: string[],
        remarks: string,
        type: string,
        amount: number,
        createdAt?: Date
        //OR createdAt: Date | undefined
    }

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

interface Window {
    labelList: Label[],
    createLabel: (name:string)=>void
}