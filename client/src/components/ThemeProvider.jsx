import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  const darkClass = theme === "dark" ? "dark" : ""; // ✅ Only apply 'dark' if it's dark mode

  return (
    <div className={darkClass}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
}
