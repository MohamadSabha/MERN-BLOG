import { useSelector } from "react-redux";

export default function AdminTopBar() {
  const { CurrentUser } = useSelector((state) => state.user);

  if (!CurrentUser?.isAdmin) return null;

  return (
    <div className="w-full bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black rounded-b-xl shadow-lg px-6  py-2 flex items-center justify-between">
      <span className="font-bold tracking-wide text-lg flex items-center gap-2">
        {/* Example logo/icon */}
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#18181b" />
          <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#ffd600">
            A
          </text>
        </svg>
        Admin Panel
      </span>
      {/* Add admin shortcuts or info here if needed */}
    </div>
  );
}
