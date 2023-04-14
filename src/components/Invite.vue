<template>
  <div
    class="container flex h-full flex-col items-center justify-center backdrop-blur-xs dark:text-white"
  >
    <div class="text-shadow relative my-7 font-paris text-9xl text-primary">
      50
      <div class="absolute bottom-0 right-0 translate-x-6 text-3xl text-white">
        Mirko Žiak
      </div>
    </div>
    <p>Milá rodina a priatelia,</p>
    <p class="text-center">srdečne Vás pozývam na oslavu</p>
    <p class="my-3 text-center font-paris text-5xl">môjho jubilea,</p>
    <p class="text-center">ktorá sa uskutoční</p>
    <div class="flex w-full items-center">
      <div class="flex flex-1 justify-end">
        <p
          class="border-t border-b border-black px-4 py-1 capitalize dark:border-white"
        >
          {{ inviteDate.format("dddd") }}
        </p>
      </div>
      <div class="mx-6 my-3 flex flex-col items-center">
        <p class="capitalize">{{ inviteDate.format("MMMM") }}</p>
        <p class="my-3 font-paris text-4xl text-primary">
          {{ inviteDate.format("DD") }}
        </p>
        <p>{{ inviteDate.format("YYYY") }}</p>
      </div>
      <div class="flex flex-1">
        <p class="border-t border-b border-black px-4 py-1 dark:border-white">
          {{ inviteDate.format("HH:mm") }}
        </p>
      </div>
    </div>
    <p class="text-sm">Bútľavá Vŕba</p>
    <p class="text-sm">Nábrežie A. Stodolu 1</p>
    <p class="text-sm">Liptovský Mikuláš</p>
  </div>
</template>

<script setup lang="ts">
import { inviteDate } from "../config/inviteDate";
</script>
