import dayjs, { Dayjs } from "dayjs";
import { useTimestamp } from "@vueuse/core";
import { computed } from "vue";

export const useCountdown = (dateOfInvite: Dayjs) => {
  const timestamp = useTimestamp({
    interval: 1000,
  });

  const days = computed(() => {
    const days = dateOfInvite.diff(dayjs(timestamp.value), "days");

    return days < 0 ? 0 : days;
  });

  const hours = computed(() => {
    const hours = dateOfInvite.diff(dayjs(timestamp.value), "hours", true);

    return dayjs().hour(hours).hour();
  });

  const minutes = computed(() => {
    const minutes = dateOfInvite.diff(dayjs(timestamp.value), "minutes", true);

    return dayjs().minute(minutes).minute();
  });

  const seconds = computed(() => {
    const seconds = dateOfInvite.diff(dayjs(timestamp.value), "seconds", true);

    return dayjs().second(seconds).second();
  });

  return { days, hours, minutes, seconds };
};
