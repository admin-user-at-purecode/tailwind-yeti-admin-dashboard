import config from "config";

import {
  SWITCH_MENU_TYPE,
  TOGGLE_MENU,
} from "actions/types";


const initialMenuType = () => {
  const item = window.localStorage.getItem("menu-type");

  return item ? JSON.parse(item) : config.menuType;
};


const initialState = {
  menuBarVisible: undefined,
  menuType: initialMenuType(),
};

const RootReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuBarVisible: action.payload,
      };

    case SWITCH_MENU_TYPE:
      window.localStorage.setItem("menu-type", JSON.stringify(action.payload));

      return { ...state, menuType: action.payload };

    default:
      return state;
  }
};

export default RootReducers;
