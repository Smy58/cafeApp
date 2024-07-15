
<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="defWidth" :height="defHeight" viewBox="0 0 24 24"><path :fill="defColor" d="M4 21v-2h16v2zm4-4q-1.65 0-2.825-1.175T4 13V3h16q.825 0 1.413.588T22 5v3q0 .825-.587 1.413T20 10h-2v3q0 1.65-1.175 2.825T14 17zm0-2h6q.825 0 1.413-.587T16 13V5H6v8q0 .825.588 1.413T8 15m10-7h2V5h-2zM8 15H6h10z"></path></svg>
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
			defHeight: this.height ? this.height : '18px',
			defColor: this.color ? this.color : '#000'
		}
	}
}
</script>