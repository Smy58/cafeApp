<template>
	<div>
		<slot />
		<Loader v-if="isLoad" />
	</div>
</template>

<script>
import { useLoader } from '@/store/loader.js'

export default {
	computed: {
		isLoad() {
			const { getLoader } = useLoader()
			return getLoader
		}
	}
}
</script>