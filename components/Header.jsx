import { useContext } from "react";
import { Theme } from "../contexts/Theme";

export default function Header() {
  const [isDark, setTheme] = useContext(Theme);
  const themeHandler = () => {
    if (isDark == true) {
      setTheme(false);
      localStorage.setItem("isDark", false);
    } else {
      setTheme(true);
      localStorage.setItem("isDark", true);
    }

  };

  return (
    <header>
      <div className="container">
        <h2 className="title">Where in the world?</h2>
        <div className="theme-changer" onClick={themeHandler}>
          <i className={"fa-regular fa-" + (isDark ? 'sun' : 'moon')}></i> <span>{isDark ? 'Light Mode':'Dark Mode'}</span>
        </div>
      </div>
    </header>
  );
}
