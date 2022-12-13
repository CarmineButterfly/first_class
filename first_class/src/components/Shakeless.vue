<template>
    <input type="text" v-model="shakeless">
    <h2>{{shakeless}}</h2>
</template>

<script>
import useShakeless from '../hooks/useShakeless'
export default {
    name:'Shakeless',
    setup(){
        let shakeless = useShakeless()
        return{
            shakeless
        }
    }
}
</script>

<style>

</style>