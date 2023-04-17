<template>
	<div class="top">
		<h1>测试 vueUse 的鼠标坐标</h1>
	</div>
	<h3>Mouse: {{ x }} x {{ y }}</h3>

	<div>
		<h1>测试 element plus的按需引入</h1>
		<el-button>Default</el-button>
		<el-button type="primary">Primary</el-button>
		<el-button type="success">Success</el-button>
		<el-button type="info">Info</el-button>
		<el-button type="warning">Warning</el-button>
		<el-button type="danger">Danger</el-button>
	</div>

	<el-date-picker
		v-model="value1"
		type="date"
		placeholder="请选择日期222"
		:disabled-date="disabledDate"
		:size="size"
	/>

	<el-button type="danger" @click="myClick">调用eleplus的提示信息</el-button>

	<el-button type="danger" @click="r.b.c++">count is: {{ r.b.c }}</el-button>
	<el-button type="danger" @click="s.b.c++">count is: {{ s.b.c }}</el-button>
</template>

<script setup lang="ts">
// 先引入文件
import useCurrentInstance from '@/hooks/useCurrentInstance'
// import { ElNotification, ElMessage } from 'element-plus' // 不需要引入了，因为在components.d.ts文件，自动帮我们引入了

import { useMouse } from '@vueuse/core'
// import { ref, h, unref } from 'vue' // 不需要引入了，因为在auto-import.d.ts文件，自动帮我们引入了

let r = ref({ a: 1, b: { c: 2 } })
// console.log(r.value);

let s = unref(r)
// console.log(s);

const { x, y } = useMouse()

const size = ref<'default' | 'large' | 'small'>('default')
const value1 = ref('')

const { globalProperties } = useCurrentInstance()

console.log(globalProperties)
const disabledDate = (time: Date) => {
	return time.getTime() > Date.now()
}

const myClick = () => {
	// 这里拿到的也是 element plus中的 ElMessage 事件，但是样式没有生效
	globalProperties.$message.success('123')
	globalProperties.$message({
		type: 'success',
		message: '2222',
		// center: true,
	})
	console.log(globalProperties)
	ElNotification({
		title: 'Title',
		message: h('i', { style: 'color: teal' }, 'This is a reminder'),
	})
	ElMessage({
		message: 'Congrats, this is a success message.',
		type: 'success',
	})
}
</script>

<style scoped lang="scss">
.top {
	width: 100%;
	height: 80px;
	line-height: 80px;
	background: pink;

	h1 {
		color: red;
	}
}
</style>
