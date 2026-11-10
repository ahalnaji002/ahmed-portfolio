// Shared client for /api/github: one request per page load, reused by every caller.
let activityPromise;

export function fetchGitActivity() {
  activityPromise ??= fetch("/api/github")
    .then((response) => (response.ok ? response.json() : null))
    .catch(() => null);
  return activityPromise;
}

const UNITS = [
  ["year", 31536000],
  ["month", 2592000],
  ["week", 604800],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
];

export function timeAgo(isoDate, locale = "en") {
  const seconds = (new Date(isoDate).getTime() - Date.now()) / 1000;
  const format = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  for (const [unit, size] of UNITS) {
    if (Math.abs(seconds) >= size) return format.format(Math.round(seconds / size), unit);
  }
  return format.format(0, "minute");
}
