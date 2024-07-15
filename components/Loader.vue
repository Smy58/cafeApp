<template>
	<div class="loader">
		<div class="loader__content"></div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
.loader {
	z-index: 1000;
	width: 100%;
	height: 100vh;

	position: fixed;
	top: 0;
	left: 0;

	background: #00000095;

	display: flex;
	align-items: center;
	justify-content: center;

	&__content {
		width: 50px;
		padding: 8px;
		aspect-ratio: 1;
		border-radius: 50%;
		background: #ffffff;
		--_m: 
			conic-gradient(#0000 10%,#000),
			linear-gradient(#000 0 0) content-box;
		-webkit-mask: var(--_m);
				mask: var(--_m);
		-webkit-mask-composite: source-out;
				mask-composite: subtract;
		animation: l3 1s infinite linear;
		}
		@keyframes l3 {to{transform: rotate(1turn)}
	}
}

</style>