<template>
	<div class="loginForm">
		<div class="form-title">登录</div>
		<div class="form">
			<el-input v-model="nickname" placeholder="昵称"></el-input>
			<el-input v-model="password" placeholder="密码" show-password="true"></el-input>
			<el-button type="primary">登录</el-button>
			<span class="register" @click="goRegister">注册账户</span>
		</div>
	</div>
</template>

<script>
import Nav from "../../components/Nav";

export default {
	name: "LoginForm",
	data() {
		return {
			nickname: '',
			password: ''
		}
	},
	methods:{
		goRegister(){
			this.$router.push('/register')
		}
	},
	components: {
		Nav
	}
}
</script>

<style scoped lang="less">
.loginForm {
	height: 100vh;
	padding-top: 60px;
	.flex_init(column, flex-start);

	.form-title {
		.letter(#9981B8, 30px, 450, 4px);
		align-self: flex-start;
		padding-top: 6vh;
		padding-left: 20px;
	}

	.form {
		flex-grow: 1;
		.flex_init(column, flex-start, center);
		width: 100%;
		margin-top: 40px;

		/deep/ .el-input {
			width: 90%;
			margin: 15px auto;

			input {
				border-radius: 12px;
				height: 50px;
				.letter(@color:#828282,@font-size: 20px,@letter-spacing: 2px)
			}
		}

		/deep/ .el-button {
			margin-top: 120px;
			min-width: 50%;
			background-color: #9981B8;
			border-radius: 20px;
			border: none;

			span {
				font-size: 17px;
				letter-spacing: 2px;
				font-weight: 350;
				text-indent: 2px;
			}
		}

		.register {
			position: absolute;
			text-align: center;
			bottom: 5vh;
			color: #606266;
			border-bottom: solid 1px gray;
		}
		.register:hover {
			color: #9981B8;
			border-bottom: solid 1px #9981B8;
		}
	}
}
</style>