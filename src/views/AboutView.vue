<template>
  <div class="about">
    <router-link to="/">Home</router-link>
    <h1>This is an about page</h1>
    <h1>Fade 淡入淡出</h1>
    <el-button @click="show = !show">Click Me</el-button>
    <div>
      <div style="display: flex; margin-top: 20px; height: 100px">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </transition>
      </div>
    </div>
    <h1>Zoom 缩放</h1>
    <div>
      <div style="display: flex; margin-top: 20px; height: 100px">
        <transition name="el-zoom-in-center">
          <div v-show="show" class="transition-box">.el-zoom-in-center</div>
        </transition>
        <transition name="el-zoom-in-top">
          <div v-show="show" class="transition-box">.el-zoom-in-top</div>
        </transition>
        <transition name="el-zoom-in-bottom">
          <div v-show="show" class="transition-box">.el-zoom-in-bottom</div>
        </transition>
      </div>
    </div>
    <h1>Collapse 折叠面板</h1>
    <div>
      <div style="margin-top: 20px; height: 200px">
        <el-collapse-transition>
          <div v-show="show">
            <div class="transition-box">el-collapse-transition</div>
            <div class="transition-box">el-collapse-transition</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
