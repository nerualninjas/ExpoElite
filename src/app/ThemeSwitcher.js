"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "@/components/shared/component/Icon/MoonIcon";
import {SunIcon} from "@/components/shared/component/Icon/SunIcon";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme=()=>{
    if(theme === "light"){

        setTheme("dark")
    }else{
        setTheme("light")
     }
  }
  return (
    <div>
    

      <Switch
      defaultSelected
      size="lg"
      color="danger"
      onClick={handleTheme}
      startContent={<SunIcon /> }
      endContent={<MoonIcon />}
    >
    
    </Switch>
    </div>
  );
};

export default ThemeSwitcher;