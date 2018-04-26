<template>
	<div @click="consoleF">foo
		事实上
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			consoleF:function(){
				console.log(this.$store.state)
			}
		},
		computed:{

		}
	}
</script>

<style>
</style>