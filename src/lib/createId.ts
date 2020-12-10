let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0; // _id 不想共用的私有 id

function createId() {
    id++;
    window.localStorage.setItem('_idMax', id.toString());
    return id;
}

export default createId;