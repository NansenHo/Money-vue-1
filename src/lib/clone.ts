function clone<T>(data: T): T {
    // 我们可以在 <> 里声明一个东西，然后在后面使用它
    // (data: T): T 意思是，data 什么类型，就返回什么类型
    return JSON.parse(JSON.stringify(data));
}

export default clone;