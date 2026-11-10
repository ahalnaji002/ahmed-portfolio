import { useEffect, useState } from "react";
import { fetchGitActivity, timeAgo } from "../lib/github";

// "git: last push 3 hours ago → repo" — hidden if GitHub can't be reached.
function GitActivity({ className = "" }) {
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
          <span className="text-ok">●</span> git: last push{" "}
          <time dateTime={activity.pushed_at} className="text-ink">
            {timeAgo(activity.pushed_at)}
          </time>{" "}
          →{" "}
          <a href={activity.url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            {activity.repo}
          </a>
        </>
      ) : (
        <span className="opacity-60">git: fetching activity…</span>
      )}
    </p>
  );
}

export default GitActivity;
