<template>
  <div class="home">
    <test-com msg="Welcome to Vue3 App" />
    <hr />
    <el-button>
      <router-link to="/about">跳转到：About页</router-link>
    </el-button>
    <hr />
    <el-button @click="toggleDark()">
      <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
      <span class="ml-2">{{ isDark ? '暗黑模式' : '一般模式' }}</span>
    </el-button>
    <hr />
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script setup>
import { defineComponent, defineProps } from '_vue@3.2.37@vue';
// @ is an alias to /src
import TestCom from '@/components/TestCom';
import { isDark, toggleDark } from '@/composables';

defineComponent({
  name: 'HomeView'
});
defineProps({
  msg: String
});
</script>
