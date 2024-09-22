export const operatingHoursMarks = [
  { value: 0, label: "12 AM" },
  { value: 2, label: "2 AM" },
  { value: 4, label: "4 AM" },
  { value: 6, label: "6 AM" },
  { value: 8, label: "8 AM" },
  { value: 10, label: "10 AM" },
  { value: 12, label: "12 PM" },
  { value: 14, label: "2 PM" },
  { value: 16, label: "4 PM" },
  { value: 18, label: "6 PM" },
  { value: 20, label: "8 PM" },
  { value: 22, label: "10 PM" },
  { value: 24, label: "12 AM" },
];

export const formatOPeratingHourTime = (value: number) => {
  const hours = Math.floor(value);
  const minutes = (value % 1) * 60;
  const period = hours < 12 || hours === 24 ? "AM" : "PM";
  const formattedHour =
    hours === 0 || hours === 12 || hours === 24 ? 12 : hours % 12;
  const formattedMinutes = minutes === 0 ? "00" : `${minutes}`.padStart(2, "0");
  return `${formattedHour}:${formattedMinutes} ${period}`;
};
