<template>
    <div>
        <ul class="types">
            <li :class="type === '-' && 'selected'"
                @click="selectType('-')">支出</li>
            <!-- 如果 type 等于 - ，那 class 为 selected -->
            <li :class="type === '+' && 'selected'"
                @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="js">
    export default {
        name: 'Types',
        data() {
            return {
                type: '-' // - 表示支出，+ 表示收入
            }
        },
        props:['xxx'],
        mounted(){
            console.log(this.xxx);
        },
        methods: {
            selectType(type){ // type 只能是 - 或者 +
                if(type !== '-' && type !== '+'){
                    throw new Error('type is unknown')
                }
                this.type = type
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .types {
        background-color: $color-highlight;
        display: flex;
        text-align: center;
        flex-direction: row;
        font-size: 24px;

        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected {
                /* border-bottom: 4px solid; 不能用 border 因为会影响字所占的空间 */
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: #333333;
                }
            }
        }

        > button {

        }
    }
</style>