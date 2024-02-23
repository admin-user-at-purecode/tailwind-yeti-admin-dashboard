import {
  SWITCH_MENU_TYPE,
  TOGGLE_MENU,
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

