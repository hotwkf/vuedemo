<template>
<div id="login">
  <el-container>
    <el-header>
      top
    </el-header>
  </el-container>
  
  <el-container>
    <el-main>
      <h1 v-bind:name="name" :id="1" v-on:click="reverseMessage">{{name}}</h1>
      <div v-html="html"></div>
      <topd></topd>
      <bottomd></bottomd>
      <sided></sided>
      <div v-for="val in sortItems">
          {{val}}
      </div>
      
      
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
    </el-main>
  </el-container>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  <el-container>
    <el-footer>
      fotter
    </el-footer>
  </el-container>
</div>
</template>
<script>
import topd from "./header/top.vue"
import bottomd from "./header/bottom"
import sided from "./header/side"
export default {
  components: {
      topd,
      bottomd,
      sided
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'HelloWorld',
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      items: [
        1,2,4,3,5,7,6
      ],
      html:"<h1>标题</h1>"
    }
  },
	methods: {
		reverseMessage: function(element) {
      
			console.log(this)
			var data = {
				params: {
			      token: '6f61615c7321a1408da9b7da34844837'
			   }
			}
			this.$axios.get('/user/info', 
				data
			  )
			  .then(function (response) {
			    console.log(response);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},
		doSomething:function(){
			console.log(1)
		}
	},
	computed: {
	    now: function () {
	        return Date.now()
      },
      sortItems: function() {
         return this.items.sort() 
      } 
  }
}
</script>

<style>

</style>