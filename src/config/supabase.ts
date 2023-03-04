import { createClient } from "@supabase/supabase-js";
import type { ISurveyData } from "../models/SurveyData.interface";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getSurveyResult = async () => {
  const { data: response } = await supabase
    .from("survey_results")
    .select()
    .returns<ISurveyData[]>();

  return response;
};
