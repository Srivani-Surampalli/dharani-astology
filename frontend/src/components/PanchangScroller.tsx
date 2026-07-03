import { useEffect, useState } from "react";
import { getTodayPanchang } from "../services/panchangService";
import "./PanchangScroller.css";

export default function PanchangScroller() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const loadPanchang = async () => {
      try {
        const response = await getTodayPanchang();
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadPanchang();
  }, []);

  if (!data) return null;

  const currentNakshatra = data?.nakshatra?.[0];
  const currentTithi = data?.tithi?.[0];

  const rahuKalam = data?.inauspicious_period?.find(
    (item: any) => item.name === "Rahu"
  );

  const yamaganda = data?.inauspicious_period?.find(
    (item: any) => item.name === "Yamaganda"
  );

  const gulika = data?.inauspicious_period?.find(
    (item: any) => item.name === "Gulika"
  );

  const formatTime = (dateString: string) => {
    if (!dateString) return "";

    return new Date(dateString).toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );
  };

  return (
    <section className="panchang-bar">

      <div className="live-badge">
        🕉 Today's Panchang
      </div>

      <div className="marquee-container">
        <div className="marquee-content">

          <span>
            ⭐ Nakshatra:
            <strong> {currentNakshatra?.name}</strong>
          </span>

          <span>
            👑 Lord:
            <strong>
              {" "}
              {currentNakshatra?.lord?.name}
            </strong>
          </span>

          <span>
            🌙 Tithi:
            <strong> {currentTithi?.name}</strong>
          </span>

          <span>
            📅 Paksha:
            <strong> {currentTithi?.paksha}</strong>
          </span>

          <span>
            ⏰ Rahu Kalam:
            <strong>
              {" "}
              {formatTime(
                rahuKalam?.period?.[0]?.start
              )}
              {" - "}
              {formatTime(
                rahuKalam?.period?.[0]?.end
              )}
            </strong>
          </span>

          <span>
          ⛔ Yamagandam:
            <strong>
              {" "}
              {formatTime(
                yamaganda?.period?.[0]?.start
              )}
              {" - "}
              {formatTime(
                yamaganda?.period?.[0]?.end
              )}
            </strong>
          </span>

          <span>
            🌑 Gulika:
            <strong>
              {" "}
              {formatTime(
                gulika?.period?.[0]?.start
              )}
              {" - "}
              {formatTime(
                gulika?.period?.[0]?.end
              )}
            </strong>
          </span>

          <span>
            🌅 Sunrise:
            <strong>
              {" "}
              {formatTime(data?.sunrise)}
            </strong>
          </span>

          <span>
            🌇 Sunset:
            <strong>
              {" "}
              {formatTime(data?.sunset)}
            </strong>
          </span>

          {/* Duplicate for seamless scrolling */}

          <span>
            ⭐ Nakshatra:
            <strong> {currentNakshatra?.name}</strong>
          </span>

          <span>
            👑 Lord:
            <strong>
              {" "}
              {currentNakshatra?.lord?.name}
            </strong>
          </span>

          <span>
            🌙 Tithi:
            <strong> {currentTithi?.name}</strong>
          </span>

          <span>
            📅 Paksha:
            <strong> {currentTithi?.paksha}</strong>
          </span>

        </div>
      </div>

    </section>
  );
}