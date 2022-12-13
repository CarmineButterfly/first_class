<template>
  <Hero msg="汉" @colleague='showColleague'/>
  <hr>
  <Coord v-if="isCoord"/>
  <hr>
  <button @click="showCoord">显示坐标</button>
  <hr>
  <Shakeless/>
</template>

<script>
import {ref} from 'vue'
import Hero from "./components/Hero.vue"
import Coord from "./components/Coord.vue"
import Shakeless from "./components/Shakeless.vue"
export default {
  name:'App',
  components: { Hero,Coord,Shakeless},
  setup(){
    let isCoord = ref(true)
    function showColleague(general,legatus){
      alert(`汉大将${general}、${legatus}大破匈奴!凯旋而归!`)
    }
    function showCoord(){
      // 因为使用的是ref,不加value这里不会生效
      isCoord.value = !isCoord.value
    }
    return {
      isCoord,
      showColleague,
      showCoord
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button,input{
  margin-right: 5px;
}
</style>
