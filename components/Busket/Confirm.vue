<template>
	<div :class="`confirm ${ isOpen ? 'confirm_show' : ''}`">
		<button @click="closeConfirm" class="confirm__close">
			<IconClose />
		</button>

		<div class="confirm__content">
			<div class="confirm__info">
				<p class="confirm__text">Заведение</p>
				<p class="confirm__value">{{ cafeName }}</p>
			</div>
			<div class="confirm__info">
				<p class="confirm__text">Сумма</p>
				<p class="confirm__value">{{ costToStr(busketCost) }} т</p>
			</div>
			<div class="confirm__info">
				<div class="confirm__bonus">
					<p class="confirm__text confirm__text_bonus">Потратить Бонусы</p>
					<span class="confirm__bonus-bank">Накоплено {{ costToStr(bonusPayment) }} Б</span>
				</div>
				<BusketCheckbox :toogleBonus="toogleBonus" />
			</div>

			<div class="confirm__info">
				<p class="confirm__text confirm__text_bold">К оплате</p>
				<p class="confirm__value confirm__value_bold">{{ costToStr(totalPayment) }} т</p>
			</div>
		</div>
		

		<div class="confirm__payment">
			<div class="confirm__payment-titles">
				<h4 class="confirm__payment-title">Способ оплаты</h4>
				<p @click="toogleBankHide" class="confirm__payment-hide">Скрыть сумму</p>
			</div>
			<div class="confirm__payment-type">
				<img :src="imageGold" alt="kaspiGold" class="confirm__payment-img">
				<p class="confirm__payment-name">Kaspi Gold</p>
				<p class="confirm__payment-cost">{{ bankHide ? '******' : '300 000'}} т</p>
			</div>
			<button @click="confirmOrder" class="confirm__btn">Оплатить</button>
		</div>
	</div>
</template>

<script>
import avaGold from '../../assets/Busket/AvatarGold.png'

export default {
	props: {
		busketCost: Number,
		cafeName: String,
		closeConfirm: Function,
		isOpen: Boolean,
		confirmOrder: Function,
		totalPayment: Number,
		bonusPayment: Number,
		toogleBonus: Function
	},
	data() {
		return {
			imageGold: avaGold,
			bankHide: false
		}
	},
	methods: {
		costToStr(num) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		},
		toogleBankHide() {
			this.bankHide = !this.bankHide
		}
	},
}
</script>


<style lang="scss">

.confirm {
	z-index: 120;

	display: flex;
	flex-direction: column;
	align-items: start;

	width: 100%;
	box-sizing: border-box;

	position: fixed;
	bottom: 0;
	background: #f2f2f2;

	border-top: solid 1px #f2f2f2;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;


	transform: translateY(100%);
	transition: all 0.6s ease;

	&_show {
		transform: translateY(0);
	}

	&__close {
		position: absolute;
		top: 12px;
		right: 16px;

		padding: 0;

		outline: none;
		border: none;
		background: none;
		height: 20px;
		width: 20px;

		display: flex;
		align-items: center;
		justify-content: center;

	}

	&__content {
		width: 100%;
		display: flex;
		flex-direction: column;

		padding: 16px;
		padding-top: 40px;

		box-sizing: border-box;

		
		border-top-left-radius: 24px;
		border-top-right-radius: 24px;
		
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;

		background: #fff;

		margin-bottom: 8px;
	}

	&__payment {
		width: 100%;
		display: flex;
		flex-direction: column;

		padding: 16px;

		box-sizing: border-box;

		
		border-top-left-radius: 24px;
		border-top-right-radius: 24px;

		background: #fff;

		&-titles {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}

		&-title {
			margin: 0;
			font-weight: bold;
			font-size: 16px;
		}

		&-hide {
			margin: 0;
			color: #0075CA;
			font-size: 16px;
			margin-bottom: 8px;
		}

		&-type {
			display: grid;
			grid-template-columns: 1fr 9fr 3fr;
			gap: 16px;
			align-items: center;

			margin-bottom: 24px;

		}

		&-img {
			width: 40px;
		}

		&-name {
			width: max-content;
			margin: 0;
		}

		&-cost {
			width: 80px;
			text-align: right;
			margin: 0;
		}
	}

	&__info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin-bottom: 16px;
	}

	&__text {
		margin: 0;
		font-size: 14px;

		&_bonus {
			color: #58A000;
			font-size: 16px;
		}

		&_bold {
			font-weight: bold;
			font-size: 16px;
		}
	}

	&__bonus-bank {
		font-size: 12px;
		color: #757575;
	}

	&__value {
		margin: 0;
		font-size: 14px;

		&_bold {
			font-weight: bold;
			font-size: 16px;
		}
	}

	&__field {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 5px 0;

		margin-bottom: 16px;
	}

	&__label {
		font-size: 12px;
		margin-bottom: 5px;
	}

	&__input {
		width: 100%;
		height: 36px;

		box-sizing: border-box;

		border-radius: 12px;

		outline: none;
		border: solid 1px #f2f2f2;
		padding: 5px 10px;
	}

	&__btn {
		width: 100%;
		border: none;
		background: #0075CA;
		color: #fff;
		height: 52px;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 12px;

		font-size: 16px;
	}
}

</style>