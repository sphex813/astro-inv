import { useTimestamp } from "@vueuse/core";
import dayjs, { Dayjs } from "dayjs";
import { computed } from "vue";

export const useCountdown = (dateOfInvite: Dayjs) => {
  const inviteDay = () => {
    return dateOfInvite.format("dddd");
  };

  const timestamp = useTimestamp({
    interval: 1000,
  });

  const formatNumber = (value: number): string => {
    if (value < 1) {
      return "00";
    } else {
      return `${value}`;
    }
  };

  const daysTo = computed(() => {
    const days = dateOfInvite.diff(dayjs(timestamp.value), "days");

    return formatNumber(days);
  });

  const hoursTo = computed(() => {
    const hours = dateOfInvite.diff(dayjs(timestamp.value), "hours", true);

    return dayjs().hour(hours).format("HH");
  });

  const minutesTo = computed(() => {
    const minutes = dateOfInvite.diff(dayjs(timestamp.value), "minutes", true);

    return dayjs().minute(minutes).format("mm");
  });

  const secondsTo = computed(() => {
    const seconds = dateOfInvite.diff(dayjs(timestamp.value), "seconds", true);

    return dayjs().second(seconds).format("ss");
  });

  return { daysTo, hoursTo, minutesTo, secondsTo, inviteDay };
};
