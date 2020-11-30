<template>
    <layout>
        <div class="tags">
            <div class="current-labels">
                <ul>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
            </div>
            <div class="new-label">
                <button>新增标签</button>
            </div>
        </div>
        <div>
            <label class="remarks">
                <span class="remarks-name">备注</span>
                <input type="text">
            </label>
        </div>
        <div>
            <ul class="types">
                <li class="selected">支出</li>
                <li class="selected">收入</li>
            </ul>
        </div>
        <div class="number-pad">
            <div class="number-pad-output">100</div>
            <div class="number-pad-buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>ok</button>
                <button>0</button>
                <button>.</button>
            </div>
        </div>
    </layout>
</template>

<script lang="ts">
    export default {
        name: 'Money',
    };
</script>

<style lang="scss" scoped>

</style>