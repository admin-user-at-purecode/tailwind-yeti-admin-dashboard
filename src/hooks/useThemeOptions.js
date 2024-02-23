import {useState } from "react";

const useThemeOptions = () => {

  const style = getComputedStyle(document.body);

  const [colors, setColors] = useState({
    primary: style.getPropertyValue("--color-primary"),
    text: style.getPropertyValue("--color-text-normal"),
  });

  const [fonts, setFonts] = useState({
    heading: style.getPropertyValue("--font-heading"),
    body: style.getPropertyValue("--font-body"),
  });


  return { colors, fonts };
};

export default useThemeOptions;
