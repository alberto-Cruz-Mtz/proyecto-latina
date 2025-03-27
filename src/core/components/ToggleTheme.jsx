import { Button } from "@heroui/button";
import React, { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("ligth");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleClick = () => {
    if (theme === "ligth") {
      setTheme("dark");
    } else {
      setTheme("ligth");
    }
  };

  return (
    <div className="absolute z-50">
      <Button onPress={handleClick} color="primary" variant="shadow">
        cambiar tema
      </Button>
    </div>
  );
}
