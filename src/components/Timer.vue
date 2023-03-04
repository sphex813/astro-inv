<template>
  <div class="container flex justify-center text-xs dark:text-white">
    <div class="flex flex-col items-center justify-center">
      <div class="text-2xl text-yellow-500">{{ days }}</div>
      <div>D</div>
    </div>
    <div class="text-2xl">:</div>
    <div class="flex flex-col items-center justify-center">
      <div class="text-2xl">{{ hours }}</div>
      <div>H</div>
    </div>
    <div class="text-2xl">:</div>
    <div class="flex flex-col items-center justify-center">
      <div class="text-2xl">{{ minutes }}</div>
      <div>M</div>
    </div>
    <div class="text-2xl">:</div>
    <div class="flex flex-col items-center justify-center">
      <div class="text-2xl">{{ seconds }}</div>
      <div>S</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { useCountdown } from "./../composables/countdown";
const { days, hours, minutes, seconds } = useCountdown(
  dayjs("2023-04-29 13:30")
);
</script>
