
<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="defWidth" :height="defHeight" viewBox="0 0 24 24"><path :fill="defColor" d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1z"></path><circle cx="12" cy="16" r="1" :fill="defColor"></circle><path :fill="defColor" d="M11 7h2v7h-2z"></path></svg>
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
			defWidth: this.width ? this.width : '99px',
			defHeight: this.height ? this.height : '99px',
			defColor: this.color ? this.color : '#F14635'
		}
	}
}
</script>