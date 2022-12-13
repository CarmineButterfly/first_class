<template>
  <div>
    <h2>坐标组件</h2>
    <h3>当前的鼠标点击处坐标为:x:{{coords.x}} y:{{coords.y}}</h3>
  </div>
</template>

<script>
// 引入hooks的自定义服用函数
import useCoord from '../hooks/useCoord'
export default {
    name:'Coord',
    setup(){
        // 配置可复用的hooks函数
        let coords = useCoord()

        return{
            // 配置好的hooks需要返回出去
            coords
        }
    }

}
</script>

<style scoped>
    div{
        background-color: orange;
    }
</style>
