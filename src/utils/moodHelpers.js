import { format } from "date-fns";

export const getDayEntries = (entries, day) => {
  return entries.filter(
    (entry) =>
      new Date(entry.date).getDate() === day.getDate() &&
      new Date(entry.date).getMonth() === day.getMonth() &&
      new Date(entry.date).getFullYear() === day.getFullYear()
  );
};

export const dateHasEntry = (entries, day) => {
  const entriesOnDay = getDayEntries(entries, day);
  if (entriesOnDay.length === 0) return undefined;
  return entriesOnDay[0].mood;
};

export const getMoodTrendData = (entries) => {
  if (entries.length === 0) return [];

  const monthlyMoodCounts = new Map();

  entries.forEach((entry) => {
    const date = new Date(entry.date);
    const monthYear = format(date, "MMM yyyy");

    if (!monthlyMoodCounts.has(monthYear)) {
      monthlyMoodCounts.set(monthYear, {
        month: monthYear,
        happy: 0,
        neutral: 0,
        sad: 0,
        angry: 0,
        tired: 0,
      });
    }

    const monthData = monthlyMoodCounts.get(monthYear);
    monthData[entry.mood]++;
  });

  const result = Array.from(monthlyMoodCounts.values());

  result.sort((a, b) => {
    const dateA = new Date(a.month.replace("Sept", "Sep"));
    const dateB = new Date(b.month.replace("Sept", "Sep"));
    return dateA.getTime() - dateB.getTime();
  });

  return result;
};

export const getMoodSummary = (entries) => {
  const summary = {
    happy: 0,
    neutral: 0,
    sad: 0,
    angry: 0,
    tired: 0,
  };

  entries.forEach((entry) => {
    summary[entry.mood]++;
  });

  return summary;
};

export const emojis = {
  happy: "😊",
  neutral: "😐",
  sad: "😔",
  angry: "😠",
  tired: "😪",
};

export const weatherIcons = {
  sunny: "☀️",
  cloudy: "☁️",
  rainy: "🌧️",
};
