
interface StatusBadgeProps {
  status: "upcoming" | "ongoing" | "completed";
  className?: string;
}

const StatusBadge = ({ status, className = "" }: StatusBadgeProps) => {
  let bgColor = "";
  let textColor = "";
  let statusText = "";

  switch (status) {
    case "upcoming":
      bgColor = "bg-blue-100";
      textColor = "text-blue-600";
      statusText = "Upcoming";
      break;
    case "ongoing":
      bgColor = "bg-green-100";
      textColor = "text-green-600";
      statusText = "Ongoing";
      break;
    case "completed":
      bgColor = "bg-gray-100";
      textColor = "text-gray-600";
      statusText = "Completed";
      break;
  }

  return (
    <div
      className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor} ${className}`}
    >
      {statusText}
    </div>
  );
};

export default StatusBadge;
