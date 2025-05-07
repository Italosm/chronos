import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Button } from "../Button";

type AvailableThemes = "dark" | "light";
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });
  function handleThemeChange() {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <nav className={styles.menuContainer}>
      <div className={styles.menuItem}>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ir para home"
          title="Home"
        >
          <HouseIcon />
        </a>
        <span className={styles.menuLabel}>Home</span>
      </div>
      <div className={styles.menuItem}>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ver histórico"
          title="Histórico"
        >
          <HistoryIcon />
        </a>
        <span className={styles.menuLabel}>Histórico</span>
      </div>
      <div className={styles.menuItem}>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ir para configurações"
          title="Configuração"
        >
          <SettingsIcon />
        </a>
        <span className={styles.menuLabel}>Configurações</span>
      </div>
      <div className={styles.menuItem}>
        <Button
          icon={nextThemeIcon[theme]}
          className={styles.menuButton}
          aria-label="Mudar o tema"
          title="Tema"
          onClick={handleThemeChange}
          type="button"
        />
        <span className={styles.menuLabel}>Tema</span>
      </div>
    </nav>
  );
}
