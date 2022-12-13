    <template>
        <h3>民族英雄</h3>
        <h3>将军:{{hero.name}}</h3>
        <h3>年龄:{{hero.age}}</h3>
        <h3>官职:{{hero.job.name}}</h3>
        <h3>俸禄:{{hero.job.salary}}</h3>
        <h3>荣誉:{{hero.honor}}</h3>
        <input type="text" v-model="hero.issue">
        <h3>功绩:{{hero.contribution}}</h3>
        <button @click="fight">发话</button>
        <button @click="growUp">成长</button>
        <button @click="updateJob">升官</button>
        <button @click="award">授予荣誉</button>
        <!-- 触发自定义事件 -->
        <button @click="backHome">凯旋</button>
        <hr>
        <h2>{{msg}}</h2>
        <h2>千古一帝:{{hero.job.king.leader}}</h2>
        <h2>在位主张:{{hero.job.king.policy}}</h2>
        <button @click="hero.job.king.policy += '!'">加强语气</button>
    </template>
  
  <script>
    // 引入渲染函数render
  // import {h} from 'vue' 
  import {computed, reactive,watch} from 'vue'
  export default {
    name: 'Hero',
    props:['msg'],
    emits:['colleague'],
    setup(props,context){
      console.log(props,context)
      // 数据
      let hero = reactive({
        name : '霍去病',
        age : 20,
        issue:'封狼居胥',
        friend:'卫青',
        job :{
          name:'山海关刺史',
          salary:'五百两',
          king:{
            leader:'汉武帝',
            policy:'寇可往我亦可往'
          }
        },
        honor : ['军事家','英雄','西汉名将']
      })
      
      // 计算属性
      // let contribution = computed(()=>{
      //   return hero.name + '-' + hero.issue
      // })
      hero.contribution = computed({
        get(){
          return hero.name + '-' + hero.issue
        },
        set(value){
          const newArr = value.split('-')
          hero.issue = newArr[1]
        }
      })
  
      // 监视数据
      //只要监视的是对象数据,oldValue就无法正确获取   
      watch(()=>hero.job.king,(newVal,oldVal)=>{
        // 监视hero对象的话默认强制开启了深度监视,此时deep配置项失效,但oldValue无法正确获取
        // 监视hero对象中的job.king.policy的话,oldValue可以正确获取
        // 监视hero对象中的job.king对象的话,oldValue无法正确获取,但deep配置项有效
        console.log('数据变化',newVal,oldVal)
      },{immediate:true,deep:true})
  
      // 方法
      function fight(){
        alert(`末将${hero.name},今年${hero.age}岁`)
      }
      function growUp(){
        if(hero.age < 24){
          hero.age ++
        }else{
          // alert不是异步操作,是同步操作,因此不需要使用async和await
          alert(`${hero.name}将军去世,享年${hero.age}岁`)
          hero.age = 18
        } 
      }
      function updateJob(){
        hero.job.name = '镖旗大将军'
        hero.job.salary = '八百两'
      }
      function award(){
       hero.honor[0] = '参谋将军'
       hero.honor.push('节度使')
      }
      function backHome(){
        context.emit('colleague',hero.name,hero.friend)
      }
  
      // 返回一个对象,对象中的属性、方法可以直接在模板中直接使用
      return {
        hero,
        award,
        fight,
        growUp,
        updateJob,
        backHome
      }
      
      // 可以返回一个渲染函数render
      // return () => h('h1','醉里挑灯看剑')
    }
  }
  </script>