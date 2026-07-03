import { useEffect, useState } from "react";
import {
  getTodayPanchang,
} from "../services/panchangService";

export default function TodayPanchang() {
  const [data, setData] =
    useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response =
        await getTodayPanchang();

      setData(response);
    };

    fetchData();
  }, []);

  if (!data) return null;

  return (
    <section className="bg-green-50 py-4">
      <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-6">

        <div className="rounded-xl bg-white p-4 shadow">
          ⭐ Nakshatra
          <div>{data.nakshatra}</div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow">
          🌙 Tithi
          <div>{data.tithi}</div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow">
          ⏰ Rahu Kalam
          <div>{data.rahuKalam}</div>
        </div>

      </div>
    </section>
  );
}