import {
  SWITCH_FONTS,
  SWITCH_MENU_TYPE,
  TOGGLE_MENU,
  SWITCH_THEME,
} from "actions/types";

export const toggleMenu = (visibility) => {
  return {
    type: TOGGLE_MENU,
    payload: visibility,
  };
};

export const switchMenuType = (menuType) => {
  return {
    type: SWITCH_MENU_TYPE,
    payload: menuType,
  };
};

export const switchTheme = (theme) => {
  return {
    type: SWITCH_THEME,
    payload: theme,
  };
};

export const switchFonts = (fonts) => {
  return {
    type: SWITCH_FONTS,
    payload: fonts,
  };
};
