import recordStore from '@/store/recordStore';
import labelStore from '@/store/labelStore';

// console.log('index2 执行了一次')

const store = {
    ...recordStore,
    ...labelStore // 浅拷贝，直接把地址复制过来
};

// console.log(store); // 查看 store 的所有 API

export default store;