<template>
	<div class="registerForm">
		<Nav></Nav>
		<div class="form-title">注册</div>
		<div class="form">
			<el-input v-model="nickname" placeholder="昵称"></el-input>
			<el-input v-model="email" placeholder="邮箱"></el-input>
			<el-input v-model="password" placeholder="密码" show-password="true"></el-input>
			<el-button type="primary">同意协议并注册</el-button>
			<el-checkbox v-model="checked">
				<span>《注册协议》</span>
			</el-checkbox>
		</div>
	</div>
</template>

<script>
import Nav from "../../components/Nav";

export default {
	name: "RegisterForm",
	data() {
		return {
			nickname: '',
			email: '',
			password: '',
			checked:''
		}
	},
	components: {
		Nav,
	}
}
</script>

<style scoped lang="less">
.registerForm {
	height: 100vh;
	.flex_init(column,flex-start);

	.form-title {
		.letter(#9981B8, 30px, 450, 4px);
		align-self: flex-start;
		padding-top: 6vh;
		padding-left: 20px;
	}

	.form {
		flex-grow: 1;
		.flex_init(column,flex-start,center);
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
			margin-top: 40px;
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

		/deep/ .el-checkbox{
			position: absolute;
			bottom: 5vh;
		}

		/deep/ .is-checked{
			.el-checkbox__label{
				color: #9981B8;
			}
		}
	}
}
</style>