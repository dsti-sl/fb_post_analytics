interface StatCardProps {
  label: string;
  value: number | string;
  bgColor?: string; 
  textColor?: string;
}

export default function Cards({ label, value, bgColor = "#20223d", textColor = "white" }: StatCardProps) {
  return (
    <div
      className="rounded-xl shadow-lg p-6 text-center"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p className="text-sm mb-2">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
