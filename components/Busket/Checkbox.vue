<template>
	<div class="checkbox">
		<label class="checkbox__label">
			<input @click="toogleBonus" v-model="isCheck" type="checkbox">
			<span>
				<i></i>
			</span>
		</label>
	</div>
</template>

<script>
export default {
	props: {
		toogleBonus: Function
	}
}
</script>

<style lang="scss" scoped>
.checkbox {
	display: flex;
	&__label {
		position: relative;
		width: 50px;
		height: 26px;
		
		input {
			position: relative;
			z-index: 1;
			appearance: none;

		}

		span {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #f2f2f2;

			border-radius: 13px;

			transition: 0.5s;

		}

		input:checked ~ span {
			background: #8DC347;

		}

		span i {
			position: absolute;
			top: 4px;
			left: 4px;

			width: 18px;
			height: 18px;

			background: #fff;

			border-radius: 50%;
			transition: 0.5s;

			
		}

		input:checked ~ span i {
			left: 28px;
		}
	}
}
</style>