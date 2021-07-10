<template>
	<div class="nav" @click="goBack">
		<svg t="1625675932643" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2378" width="200" height="200"><path d="M930.850995 459.349873l-639.197984 0 293.4044-293.400307-73.349565-73.350588L92.559581 511.748267l419.149289 419.143149 73.349565-73.350588L291.654035 564.139497l639.197984 0L930.852018 459.349873 930.850995 459.349873 930.850995 459.349873zM930.850995 459.349873" p-id="2379"></path></svg>
		<span class="nav-title">
			<slot></slot>
		</span>
	</div>
</template>

<script>
export default {
	name: "Back",
	methods:{
		goBack(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped lang="less">
.nav{
	width: 100vw;
	height: 60px;
	overflow: hidden;
	.flex_init(row,center,center);
	svg{
		.scale(@scale-rate: .12,@scale-x-rate:1.1);
		.offset-x(@offset-type: absolute,@offset-left-value: -70px);
		opacity: 0.7;
	}
	.nav-title{
		.letter(@letter-spacing: 2px,@font-size: 18px,@font-weight: 450)
	}
}

</style>