<template>
  <FormKit type="form" @submit="submitHandler">
    <FormKit
      type="text"
      label="Rodina"
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
      label="Prídeme autom"
      name="need_ride"
      :value="true"
    />
  </FormKit>
</template>

<script setup lang="ts">
  import type { ISurveyData } from "../models/SurveyData.interface";
  import { supabase } from "../supabase";

  const submitHandler = async (fields: ISurveyData) => {
    // await supabase.from("survey_results").insert(fields);
    const result = await supabase.from("survey_results").select();
    console.log(result);
  };
</script>
