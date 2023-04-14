<template>
  <div class="container flex justify-center text-xs dark:text-white">
    <div class="flex flex-col items-center justify-center">
      <div class="text-2xl text-primary">{{ daysTo }}</div>
      <div>D</div>
    </div>
    <div class="text-2xl">:</div>
    <div class="flex flex-col items-center justify-center">
      <div class="text-2xl">{{ hoursTo }}</div>
      <div>H</div>
    </div>
    <div class="text-2xl">:</div>
    <div class="flex flex-col items-center justify-center">
      <div class="text-2xl">{{ minutesTo }}</div>
      <div>M</div>
    </div>
    <div class="text-2xl">:</div>
    <div client:only class="flex flex-col items-center justify-center">
      <div class="text-2xl">{{ secondsTo }}</div>
      <div>S</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inviteDate } from "../config/inviteDate";
import { useCountdown } from "./../composables/countdown";
const { daysTo, hoursTo, minutesTo, secondsTo } = useCountdown(inviteDate);
</script>
