// 全局使用的类型放到这个文件夹里来
type RecordItem = { // ts 类型声明
        labels: string[],
        remarks: string,
        type: string,
        amount: number,
        createdAt?: Date
        //OR createdAt: Date | undefined
    }