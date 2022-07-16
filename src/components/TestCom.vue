<template>
  <div>
    <h5>{{ msg }}</h5>
  </div>
</template>

<script setup>
import { defineComponent, defineProps } from '_vue@3.2.37@vue';
defineComponent({
  name: 'TestCom'
});
defineProps({
  msg: String
});
</script>
