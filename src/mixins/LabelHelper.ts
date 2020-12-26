// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class LabelHelper extends Vue {
    createLabel() {
        const name = window.prompt('请输入标签名');
        if (!name) {return window.alert('标签名不能为空');}
        this.$store.commit('createLabel', name);
    }
}

export default LabelHelper;