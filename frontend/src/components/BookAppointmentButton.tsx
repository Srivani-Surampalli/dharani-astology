import { useNavigate } from "react-router-dom";

type Props = {
  text?: string;
};

export default function BookAppointmentButton({
  text = "Book Appointment",
}: Props) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate("/book-appointment")
      }
      className="
        cursor-pointer
        rounded-full
        px-5
        py-2.5
        text-sm
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-lg
      "
      style={{
        background:
          "linear-gradient(90deg, #2e8b57 0%, #d4af37 100%)",
      }}
    >
      {text}
    </button>
  );
}