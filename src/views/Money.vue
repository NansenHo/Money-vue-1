<template>
    <layout class-prefix="layout">
        <NumberPad/>
        <Remarks/>
        <Label :data-source="remarks"/>
        <Types/>
    </layout>
</template>

<script>
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Remarks from '@/components/Money/Remarks.vue';
    import Label from '@/components/Money/Label.vue';

    export default {
        name: 'Money',
        components: {Label, Remarks, Types, NumberPad},
        data(){
            return{
                remarks: ['衣', '食', '住', '行', 'Subscribe']
            }
        },
    };
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>