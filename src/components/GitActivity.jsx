import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/context";
import { fetchGitActivity, timeAgo } from "../lib/github";
import { Code } from "./ui";

// "git: last push 3 hours ago → repo" — hidden if GitHub can't be reached.
function GitActivity({ className = "" }) {
  const { t, isAr } = useLanguage();
  const [activity, setActivity] = useState(undefined);

  useEffect(() => {
    let cancelled = false;
    fetchGitActivity().then((data) => {
      if (!cancelled) setActivity(data?.repo ? data : null);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (activity === null) return null;

  return (
    <p className={"min-h-5 text-xs text-muted " + className} aria-live="polite">
      {activity ? (
        <>
          <span className="text-ok">●</span> {t.git.lastPush}{" "}
          <time dateTime={activity.pushed_at} className="text-ink">
            {timeAgo(activity.pushed_at, t.git.locale)}
          </time>{" "}
          {isAr ? "←" : "→"}{" "}
          <a href={activity.url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            <Code>{activity.repo}</Code>
          </a>
        </>
      ) : (
        <span className="opacity-60">{t.git.fetching}</span>
      )}
    </p>
  );
}

export default GitActivity;
