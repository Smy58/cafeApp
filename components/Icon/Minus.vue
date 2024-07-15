
<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="defWidth" :height="defHeight" viewBox="0 0 24 24"><path :fill="defColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"></path></svg>
</template>


<script>
export default {
	props: {
		color: String,
		width: String,
		height: String
	},
	data() {
		return {
			defWidth: this.width ? this.width : '18px',
			defHeight: this.height ? this.height : '20px',
			defColor: this.color ? this.color : '#000'
		}
	}
}
</script>