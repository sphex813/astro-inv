<template>
  <div class="container mx-auto rounded-xl px-3 pt-3 shadow-lg sm:w-[450px]">
    <FormKit type="form" @submit="submitHandler" v-if="!surveyCompleted">
      <div class="pb-4 text-primary">Prosím vyplňte:</div>
      <FormKit
        type="text"
        label="Meno / Rodina"
        name="family_name"
        validation="required"
        placeholder="Žiakovci"
      />
      <FormKit
        type="number"
        label="Počet osôb"
        name="visitors"
        placeholder="2"
        validation="required|between:0,10"
      />
      <FormKit
        type="checkbox"
        label="Prídeme vlakom"
        help="(potrebujeme odvoz zo stanice)"
        name="need_ride"
        :value="false"
      />
      <FormKit
        type="textarea"
        label="Správa"
        name="message"
        rows="5"
        placeholder="Tešíme sa na vás..."
        :value="null"
      />
    </FormKit>
    <div
      class="container flex flex-col text-center dark:text-white"
      v-if="surveyCompleted"
    >
      Ďakujem za vyplnenie, tešíme sa na Vás!
      <div class="mb-2">Uvidíme sa za:</div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { supabase } from "../config/supabase";
import type { ISurveyData } from "../models/SurveyData.interface";
const surveyCompleted = ref(false);

//surveyCompleted needs to update in onMounted because of hydration missmatch
onMounted(() => {
  surveyCompleted.value = useStorage("survey-completed", false).value;
});

const submitHandler = async (fields: ISurveyData) => {
  const { error } = await supabase.from("survey_results").insert(fields);

  if (!error) {
    surveyCompleted.value = true;
  }
};
</script>
