"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Echo Productions page error", error);
  }, [error]);

  return (
    <main className="page">
      <section className="pageHero">
        <p className="eyebrow">SOMETHING WENT WRONG</p>
        <h1>The production hit a technical issue.</h1>
        <p>
          Try loading this page again. If the problem continues, head back to
          Echo Productions.
        </p>
        <div className="actions">
          <button className="primaryButton" onClick={() => reset()}>
            Try again
          </button>
          <a href="/" className="secondaryButton">
            Back home
          </a>
        </div>
      </section>
    </main>
  );
}
