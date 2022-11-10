<template>
  <v-chart class="chart" :option="options"/>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import {Ref} from 'vue'
const {options} = defineProps<{ options: any}>()
</script>

  <style scoped>

  
.chart {
  height: 100vh;
}
  </style>
  