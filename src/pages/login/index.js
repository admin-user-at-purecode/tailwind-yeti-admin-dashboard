import { useState } from "react";
import classNames from "classnames";
import Button from "components/button";
import Input from "components/input";
import Label from "components/label";
import Switch from "components/switch";
import Tooltip from "components/tooltip";
import useFullscreen from "hooks/useFullScreen";

const AuthLogin = () => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <section className="top-bar topBar">
        <span className="brand name">Yeti</span>
        <nav className="flex items-center ltr:ml-auto rtl:mr-auto">
          <Tooltip content="Toggle Dark Mode" className="Tooltip1">
            <Switch outlined />
          </Tooltip>

          <Tooltip content="Fullscreen" className="Tooltip2">
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

          <a
            href="/auth-register"
            className="btn btn_primary uppercase ltr:ml-5 rtl:mr-5 anchorElement"
          >
            Register
          </a>
        </nav>
      </section>

      <div className="container flex items-center justify-center mt-20 py-10">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <div className="mx-5 md:mx-10">
            <h2 className="uppercase">It’s Great To See You!</h2>
            <h4 className="uppercase">Login Here</h4>
          </div>
          <form className="card mt-5 p-5 md:p-10" action="/">
            <div className="mb-5">
              <Label className="block mb-2 label1" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="example@example.com"
                className="input1"
              />
            </div>
            <div className="mb-5">
              <Label className="block mb-2 label2" htmlFor="password">
                Password
              </Label>
              <label className="form-control-addon-within">
                <Input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  className="border-none input2"
                  defaultValue="12345"
                />
                <span className="flex items-center ltr:pr-4 rtl:pl-4">
                  <button
                    type="button"
                    className="text-gray-300 dark:text-gray-700 la la-eye text-xl leading-none button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  ></button>
                </span>
              </label>
            </div>
            <div className="flex items-center">
              <a href="/auth-forgot-password" className="text-sm uppercase anchorElement2">
                Forgot Password?
              </a>
              <Button className="ltr:ml-auto rtl:mr-auto uppercase button">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;