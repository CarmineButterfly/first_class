import { customRef } from 'vue'

export default function () {
    // 定义一个定时器
    let timer
    function myRef(val, delay) {
        return customRef((track, trigger) => {
            return {
                get() {
                    // 追踪val
                    track()
                    return val
                },
                set(newVal) {
                    val = newVal
                    // 消抖的关键:每次更改input框里的数据都会先关闭上一个已经开启的定时器
                    clearTimeout(timer)
                    // 延迟500毫秒重新解析模板
                    timer = setTimeout(() => {
                        trigger()
                    }, delay)
                }
            }
        })
    }
    let world = myRef('日月山河永在!', 500)
    return world
}