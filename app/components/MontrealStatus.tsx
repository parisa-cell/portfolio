"use client";

import { useEffect, useState } from "react";

function getMontrealTime() {
  const now = new Date();
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Montreal",
  }).format(now);
}

function getMontrealHour() {
  const now = new Date();
  const hour = parseInt(
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: false,
      timeZone: "America/Montreal",
    }).format(now)
  );
  return hour;
}

function getTimeOfDay(hour: number) {
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "nighttime";
}

function weatherToText(code: number): string {
  if (code === 0) return "clear skies";
  if (code <= 3) return "partly cloudy";
  if (code <= 48) return "foggy";
  if (code <= 57) return "drizzling";
  if (code <= 65) return "raining";
  if (code <= 67) return "freezing rain";
  if (code <= 75) return "snowing";
  if (code <= 77) return "snow grains";
  if (code <= 82) return "rain showers";
  if (code <= 86) return "snow showers";
  if (code <= 99) return "thunderstorms";
  return "cloudy";
}

export default function MontrealStatus() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTime(getMontrealTime());
    setTimeOfDay(getTimeOfDay(getMontrealHour()));

    const timer = setInterval(() => {
      setTime(getMontrealTime());
      setTimeOfDay(getTimeOfDay(getMontrealHour()));
    }, 60000);

    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=45.5017&longitude=-73.5673&current_weather=true&timezone=America/Montreal"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.current_weather) {
          setWeather(weatherToText(data.current_weather.weathercode));
        }
      })
      .catch(() => {});

    setReady(true);
    return () => clearInterval(timer);
  }, []);

  if (!ready) return null;

  return (
    <p className="montreal-status">
      It&apos;s {time} over here, currently {weather || timeOfDay}{weather && ` and ${timeOfDay}`}.
    </p>
  );
}
