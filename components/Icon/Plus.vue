
<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="defWidth" :height="defHeight" viewBox="0 0 24 24"><path :fill="defColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path></svg>
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