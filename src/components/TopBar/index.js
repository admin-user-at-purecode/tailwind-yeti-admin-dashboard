import { useDispatch, useSelector } from "react-redux";

import { toggleMenu } from "actions";

import classNames from "classnames";

import useFullscreen from "hooks/useFullScreen";
import Tooltip from "../tooltip";
import Dropdown from "../dropdown";
import Avatar from "../avatar";
import Switch from "../switch";

const TopBar = () => {
  const dispatch = useDispatch();

  const menuBarVisible = useSelector((state) => state.root.menuBarVisible);

  const [isFullscreen, toggleFullscreen] = useFullscreen();

  return (
    <header className="top-bar">
      <button
        className="menu-toggler la la-bars"
        onClick={() => dispatch(toggleMenu(!menuBarVisible))}
      ></button>

      <span className="brand">Yeti</span>

      <form className="hidden md:block ltr:ml-10 rtl:mr-10">
        <label className="form-control-addon-within rounded-full">
          <input className="form-control border-none" placeholder="Search" />
          <button className="text-gray-300 dark:text-gray-700 text-xl leading-none la la-search ltr:mr-4 rtl:ml-4"></button>
        </label>
      </form>

      <div className="flex items-center ltr:ml-auto rtl:mr-auto">
        <Tooltip content="Toggle Dark Mode">
          <Switch
            outlined
          />
        </Tooltip>

        <Tooltip content="Fullscreen">
          <button
            className={classNames(
              "hidden lg:inline-block ltr:ml-3 rtl:mr-3 px-2 text-2xl leading-none la",
              {
                "la-compress-arrows-alt": isFullscreen,
                "la-expand-arrows-alt": !isFullscreen,
              }
            )}
            onClick={toggleFullscreen}
          ></button>
        </Tooltip>

        <div className="self-stretch">
          <Dropdown
            arrow={true}
            placement="bottom"
            content={
              <div className="p-5 text-center">
                <div className="flex justify-around">
                  <a
                    href="#no-link"
                    className="p-5 text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
                  >
                    <span className="block la la-cog text-5xl leading-none"></span>
                    <span>Settings</span>
                  </a>
                  <a
                    href="#no-link"
                    className="p-5 text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
                  >
                    <span className="block la la-users text-5xl leading-none"></span>
                    <span>Users</span>
                  </a>
                </div>
                <div className="flex justify-around">
                  <a
                    href="#no-link"
                    className="p-5 text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
                  >
                    <span className="block la la-book text-5xl leading-none"></span>
                    <span>Docs</span>
                  </a>
                  <a
                    href="#no-link"
                    className="p-5 text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
                  >
                    <span className="block la la-dollar text-5xl leading-none"></span>
                    <span>Shop</span>
                  </a>
                </div>
              </div>
            }
          >
            <button className="flex items-center h-full ltr:ml-4 rtl:mr-4 lg:ltr:ml-1 lg:rtl:mr-1 px-2 text-2xl leading-none la la-box"></button>
          </Dropdown>
        </div>

        <div className="self-stretch">
          <Dropdown
            arrow={true}
            content={
              <div>
                <div className="flex items-center px-5 py-2">
                  <h5 className="mb-0 uppercase">Notifications</h5>
                  <button className="btn btn_outlined btn_warning uppercase ltr:ml-auto rtl:mr-auto">
                    Clear All
                  </button>
                </div>
                <hr />
                <div className="p-5 hover:bg-primary-50 dark:hover:bg-primary dark:hover:bg-opacity-5">
                  <a href="#no-link">
                    <h6 className="uppercase">Heading One</h6>
                  </a>
                  <p>Lorem ipsum dolor, sit amet consectetur.</p>
                  <small>Today</small>
                </div>
                <hr />
                <div className="p-5 hover:bg-primary-50 dark:hover:bg-primary dark:hover:bg-opacity-5">
                  <a href="#no-link">
                    <h6 className="uppercase">Heading Two</h6>
                  </a>
                  <p>Mollitia sequi dolor architecto aut deserunt.</p>
                  <small>Yesterday</small>
                </div>
                <hr />
                <div className="p-5 hover:bg-primary-50 dark:hover:bg-primary dark:hover:bg-opacity-5">
                  <a href="#no-link">
                    <h6 className="uppercase">Heading Three</h6>
                  </a>
                  <p>Nobis reprehenderit sed quos deserunt</p>
                  <small>Last Week</small>
                </div>
              </div>
            }
          >
            <button className="relative flex items-center h-full ltr:ml-1 rtl:mr-1 px-2 text-2xl leading-none la la-bell">
              <span className="absolute top-0 right-0 rounded-full border border-primary -mt-1 -mr-1 px-2 leading-tight text-xs font-body text-primary">
                3
              </span>
            </button>
          </Dropdown>
        </div>

        <div>
          <Dropdown
            arrow={true}
            content={
              <div className="w-64">
                <div className="p-5">
                  <h5 className="uppercase">John Doe</h5>
                  <p>Editor</p>
                </div>
                <hr />
                <div className="p-5">
                  <a
                    href="#no-link"
                    className="flex items-center text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
                  >
                    <span className="la la-user-circle text-2xl leading-none ltr:mr-2 rtl:ml-2"></span>
                    View Profile
                  </a>
                  <a
                    href="#no-link"
                    className="flex items-center text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary mt-5"
                  >
                    <span className="la la-key text-2xl leading-none ltr:mr-2 rtl:ml-2"></span>
                    Change Password
                  </a>
                </div>
                <hr />
                <div className="p-5">
                  <a
                    href="#no-link"
                    className="flex items-center text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
                  >
                    <span className="la la-power-off text-2xl leading-none ltr:mr-2 rtl:ml-2"></span>
                    Logout
                  </a>
                </div>
              </div>
            }
          >
            <button className="ltr:ml-4 rtl:mr-4">
              <Avatar>JD</Avatar>
            </button>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
