<template>
  <div id="app">
    <div id="nav">
	    <div class="touch"
	         @touchstart="touchstart"
	         @touchmove="touchmove"
	         @touchend="touchend">
		    <img src="https://tva1.sinaimg.cn/large/008i3skNly1gsb45h68qwj30sr0ezq4t.jpg" alt="">
	    </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App',
	props: {
	},
	data(){
		return{
			touchEvent:'',
			longTouch:''
		}
	},
	methods:{
		touchstart(){
			this.longTouch = false
			clearTimeout(this.touchEvent)
			this.touchEvent = setTimeout(()=>{
				this.longTouch=true;
				console.log("grey!")
			},1000)
		},
		touchmove(){
			if(!this.longTouch){
				console.log("huale")
				clearTimeout(this.touchEvent)
				this.touchEvent = 0;
			}
		},
		touchend(){
			if (this.touchEvent != 0) { // 滑动的时候timeoutEvent会为0 ，则不会走进end
				console.log("一起聊天")
			}
		}
	}
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
