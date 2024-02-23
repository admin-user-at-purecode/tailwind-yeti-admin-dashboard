import { createContext, useContext, useEffect, useRef, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "actions";
import classNames from "classnames";
import Tippy, { useSingleton } from "@tippyjs/react";
import useMenuType from "hooks/useMenuType";
import useOnClickOutside from "hooks/useOnClickOutside";
import useWindowSize from "hooks/useWindowSize";
import Collapse from "../collapse";
import Backdrop from "../backdrop";
import Avatar from "../avatar";
import { MenuDetailApplicationsItems, MenuDetailMenuItems, MenuDetailMenuTypes, MenuDetailPagesItems, MenuDetailUIItems } from "mock_data";

const MenuBarContext = createContext();

const MenuBar = () => {

  const dispatch = useDispatch();
  const menuBarVisible = useSelector((state) => state.root.menuBarVisible);

  const [menuType] = useMenuType();
  const windowSize = useWindowSize();
  const [activeMenus, setActiveMenus] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBackdropActive, setIsBackdropActive] = useState(false);
  const [isTooltipDisabled, setIsTooltipDisabled] = useState(false);

  const menuBar = useRef(null);
  const [source, target] = useSingleton();

  const activateMenu = (menuName, withMenuDetail = true) => {
    if (menuType !== "wide") {
      if (activeMenus.includes(menuName) && isMenuOpen) {
        setActiveMenus([]);
        hideMenuDetail();
      } else {
        setActiveMenus([menuName]);

        if (withMenuDetail) {
          setIsMenuOpen(true);
          setIsBackdropActive(true);
        } else {
          hideMenuDetail();
        }
      }
    } else {
      if (activeMenus.includes(menuName)) {
        setActiveMenus([]);
      } else {
        setActiveMenus([menuName]);
      }
    }
  };

  const isActive = (menuName) => {
    return activeMenus.includes(menuName);
  };

  const isOpen = (menuName) => {
    return activeMenus.includes(menuName) && isMenuOpen;
  };

  const hideMenuDetail = () => {
    setIsMenuOpen(false);
    setIsBackdropActive(false);
  };

  useOnClickOutside(menuBar, () => {
    if (menuType !== "wide") {
      hideMenuDetail();
    }
  });

  useEffect(() => {
    if (menuType === "icon-only") {
      setIsTooltipDisabled(true);
    }
  }, [menuType]);

  useEffect(() => {
    if (windowSize.width > 640) {
      dispatch(toggleMenu(true));
    } else {
      dispatch(toggleMenu(false));
    }
  }, [windowSize]);

  return (
    <MenuBarContext.Provider value={{ isOpen, hideMenuDetail }}>
      <Backdrop active={isBackdropActive} workspaceOnly={true} />
      <Tippy
        singleton={source}
        touch={["hold", 500]}
        theme="light-border tooltip"
        offset={[0, 12]}
        animation="scale"
        placement="right"
        appendTo={document.body}
        disabled={isTooltipDisabled}
      />

      <aside
        ref={menuBar}
        className={classNames(
          "menu-bar",
          "menu-sticky",
          { "menu-hidden": !menuBarVisible },
          {
            menu_branded: false,
          },
          "menu-" + menuType
        )}
      >
        <div className="menu-items">
          <div
            className={classNames("menu-header", {
              hidden: menuType !== "wide",
            })}
          >
            <a href="/" className="flex items-center mx-8 mt-8">
              <Avatar size="medium">JD</Avatar>
              <div className="ltr:ml-4 rtl:mr-4 ltr:text-left rtl:text-right">
                <h5>John Doe</h5>
                <p className="mt-2">Editor</p>
              </div>
            </a>
            <hr className="mx-8 my-4" />
          </div>
          <Tippy content="Dashboard" singleton={target}>
            <a
              href="/"
              onClick={() => activateMenu("dashboard", false)}
              className={classNames("link", { active: isActive("dashboard") })}
            >
              <span className="icon la la-laptop"></span>
              <span className="title">Dashboard</span>
            </a>
          </Tippy>
          <Tippy content="UI" singleton={target}>
            <button
              onClick={() => activateMenu("ui")}
              className={classNames("link", { active: isActive("ui") })}
            >
              <span className="icon la la-cube"></span>
              <span className="title">UI</span>
            </button>
          </Tippy>
          {menuType === "wide" ? (
            <Collapse open={isActive("ui")}>
              <MenuDetailUI />
            </Collapse>
          ) : null}
          <Tippy content="Pages" singleton={target}>
            <button
              onClick={() => activateMenu("pages")}
              className={classNames("link", { active: isActive("pages") })}
            >
              <span className="icon la la-file-alt"></span>
              <span className="title">Pages</span>
            </button>
          </Tippy>
          {menuType === "wide" ? (
            <Collapse open={isActive("pages")}>
              <MenuDetailPages />
            </Collapse>
          ) : null}
          <Tippy content="Applications" singleton={target}>
            <button
              onClick={() => activateMenu("applications")}
              className={classNames("link", {
                active: isActive("applications"),
              })}
            >
              <span className="icon la la-store"></span>
              <span className="title">Applications</span>
            </button>
          </Tippy>
          {menuType === "wide" ? (
            <Collapse open={isActive("applications")}>
              <MenuDetailApplications />
            </Collapse>
          ) : null}
          <Tippy content="Menu" singleton={target}>
            <button
              onClick={() => activateMenu("menu")}
              className={classNames("link", { active: isActive("menu") })}
            >
              <span className="icon la la-sitemap"></span>
              <span className="title">Menu</span>
            </button>
          </Tippy>
          {menuType === "wide" ? (
            <Collapse open={isActive("menu")}>
              <MenuDetailMenu />
            </Collapse>
          ) : null}
          <Tippy content="Blank Page" singleton={target}>
            <a
              href="/blank"
              onClick={() => activateMenu("blank", false)}
              className={classNames("link", { active: isActive("blank") })}
            >
              <span className="icon la la-file"></span>
              <span className="title">Blank Page</span>
            </a>
          </Tippy>
          <Tippy content="Docs" singleton={target}>
            <a href="/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <span className="icon la la-book-open"></span>
              <span className="title">Docs</span>
            </a>
          </Tippy>
        </div>

        {menuType !== "wide" ? (
          <>
            <MenuDetailUI />
            <MenuDetailPages />
            <MenuDetailApplications />
            <MenuDetailMenu />
          </>
        ) : null}
      </aside>
    </MenuBarContext.Provider>
  );
};

export default MenuBar;

const MenuDetailUI = () => {
  const { isOpen, hideMenuDetail } = useContext(MenuBarContext);
  
  return (
    <div
      className={classNames("menu-detail", {
        open: isOpen("ui"),
      })}
    >
      <div className="menu-detail-wrapper">
      {MenuDetailUIItems.map((item, index) => (
        <Fragment key={index}>
          {index === 0 || index === 5 || index === 18 ? <h6 className="uppercase">{item.text}</h6> : null}
          <a href='/' >
            <span className={item.icon}></span>
            {item.text}
          </a>
          {index === 4 || index === 17 ? <hr /> : null}
        </Fragment>
      ))}
    </div>
    </div>
  );
};

const MenuDetailPages = () => {
  const { isOpen, hideMenuDetail } = useContext(MenuBarContext);
 
  return (
    <div className={classNames("menu-detail", { open: isOpen("pages") })}>
      <div className="menu-detail-wrapper">
      {MenuDetailPagesItems.map((item, index) => (
        <Fragment key={index}>
          {index === 0 || index === 3 || index === 7 || index === 11 ? <h6 className="uppercase">{item.text}</h6> : null}
          <a href='/'>
            <span className={item.icon}></span>
            {item.text}
          </a>
          {index === 2 || index === 6 || index === 10 || index === 13 ? <hr /> : null}
        </Fragment>
      ))}
    </div>
    </div>
  );
};

const MenuDetailApplications = () => {
  const { isOpen, hideMenuDetail } = useContext(MenuBarContext);

  return (
    <div
      className={classNames("menu-detail", { open: isOpen("applications") })}
    >
      <div className="menu-detail-wrapper">
      {MenuDetailApplicationsItems.map((item, index) => (
        <a key={index} href='/'>
          <span className={item.icon}></span>
          {item.text}
        </a>
      ))}
    </div>
    </div>
  );
};

const MenuDetailMenu = () => {
  const { isOpen } = useContext(MenuBarContext);

  const [menuType, switchMenuType] = useMenuType();

  const [menuGrandParentCollapse, setMenuGrandParentCollapse] = useState(true);
  const [menuParentCollapse, setMenuParentCollapse] = useState(true);

  const toggleMenuGrandParentCollapse = () => {
    setMenuGrandParentCollapse(!menuGrandParentCollapse);
  };
  const toggleMenuParentCollapse = () => {
    setMenuParentCollapse(!menuParentCollapse);
  };

  return (
    <div className={classNames("menu-detail", { open: isOpen("menu") })}>
      <div className="menu-detail-wrapper">
      {MenuDetailMenuItems.map((item, index) => (
        <a key={index} href="#no-link">
          <span className={item.icon}></span>
          {item.text}
        </a>
      ))}
        <hr />
        <a href="#no-link">
          <span className="la la-layer-group"></span>
          Main Level
        </a>
        <a href="#no-link">
          <span className="la la-arrow-circle-right"></span>
          Grand Parent
        </a>
        <button
          className={classNames("collapse-header", {
            active: menuGrandParentCollapse,
          })}
          onClick={() => toggleMenuGrandParentCollapse()}
        >
          <span className="collapsible-indicator la la-arrow-circle-down"></span>
          Grand Parent Open
        </button>
        <Collapse open={menuGrandParentCollapse}>
          <a href="#no-link">
            <span className="la la-layer-group"></span>
            Sub Level
          </a>
          <a href="#no-link">
            <span className="la la-arrow-circle-right"></span>
            Parent
          </a>
          <button
            className={classNames("collapsible-header", {
              active: menuParentCollapse,
            })}
            onClick={() => toggleMenuParentCollapse()}
          >
            <span className="collapsible-indicator la la-arrow-circle-down"></span>
            Parent Open
          </button>
          <Collapse open={menuParentCollapse}>
            <a href="#no-link">
              <span className="la la-layer-group"></span>
              Sub Level
            </a>
          </Collapse>
        </Collapse>
        <hr />
        <h6 className="uppercase">Menu Types</h6>
        {MenuDetailMenuTypes.map((item, index) => (
        <button key={index} onClick={() => switchMenuType(item.type)}>
          <span className={item.icon}></span>
          {item.label}
        </button>
      ))}
      </div>
    </div>
  );
};
