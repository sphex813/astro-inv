<template>
  <div class="bg-gray-100 p-5">
    <div v-if="isLoading">Načítavam..</div>
    <div v-if="!isLoading">
      <div>
        Celkový počet ľudí: <span class="font-bold">{{ visitorsCount }}</span>
      </div>
      <div>
        Celkový počet ľudí ktorí potrebujú odvoz:
        <span class="font-bold">{{ needRideCount }}</span>
      </div>
    </div>
    <div
      class="container my-3 grid grid-cols-2 rounded-xl bg-white p-3 shadow-lg"
      v-for="result of results"
    >
      <div class="font-bold">Rodina</div>
      <div>{{ result.family_name }}</div>
      <div class="font-bold">Počet osôb</div>
      <div>{{ result.visitors }}</div>
      <div class="font-bold">Prídu vlakom</div>
      <div>{{ result.need_ride ? "Áno" : "Nie" }}</div>
      <div class="font-bold">Správa</div>
      <div>{{ result.message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncState } from "@vueuse/core";
import { computed } from "vue";
import { getSurveyResult } from "../config/supabase";

const { state: results, isLoading } = useAsyncState(getSurveyResult(), []);

const visitorsCount = computed(() => {
  return results.value?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.visitors,
    0
  );
});

const needRideCount = computed(() => {
  return results.value
    ?.filter((result) => result.need_ride)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.visitors,
      0
    );
});
</script>
