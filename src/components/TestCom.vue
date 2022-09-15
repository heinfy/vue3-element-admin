<template>
  <div>
    <h5>{{ msg }}</h5>
  </div>
</template>

<script setup>
import { defineComponent, defineProps } from 'vue';
defineComponent({
  name: 'TestCom'
});
defineProps({
  msg: String
});
</script>
