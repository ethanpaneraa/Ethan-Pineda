"use client";

import { useEffect, useState } from "react";

const BIRTH_DATE = new Date(2002, 8, 11).getTime();
const MILLISECONDS_PER_YEAR = 31_556_908_800;

function getAge() {
  return (Date.now() - BIRTH_DATE) / MILLISECONDS_PER_YEAR;
}

export function AgeCounter() {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setAge(getAge());
    tick();
    const interval = window.setInterval(tick, 20);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <p className="age-counter" aria-label={age ? `${age.toFixed(2)} years old` : "Age loading"}>
      <span className="age">{age?.toFixed(20)}</span>
      <br />
      <span className="years-left">
        {age ? `${(90 - age).toFixed(20)} ETD` : ""}
      </span>
    </p>
  );
}
