<template>
	<div>{{ userStore.username }}</div>
	<button @click="edit">点击修改status数据</button>
</template>

<script lang="ts" setup>
import useUserStore from '@/store/user/user'

const userStore = useUserStore()

const edit = () => {
	console.log('被点击了')
}
</script>
