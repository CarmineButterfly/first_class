// hooks的作用类似与mixin
import { reactive, onMounted, onUnmounted } from 'vue'

export default function () {
    // 数据
    let coords = reactive({
        x: 0,
        y: 0
    })
    // 方法
    function getCoords(e) {
        coords.x = e.pageX
        coords.y = e.pageY
    }

    // 生命周期钩子
    onMounted(() => {
        window.addEventListener('click', getCoords)
    })
    onUnmounted(() => {
        window.removeEventListener('click', getCoords)
    })

    return coords
}