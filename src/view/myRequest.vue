<template>
	<div></div>
</template>

<script setup lang="ts">
import API from '@/api'

const requestRes = async () => {
	// 直接调用封装好的对应的api去使用即可
	let result = await API.login('zhangsan', '123456')
	console.log(result)
}
console.log(requestRes)
</script>

<style scoped></style>
