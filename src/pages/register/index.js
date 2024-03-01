import { useState } from "react";

import classNames from "classnames";

import Button from "components/button";
import Input from "components/input";
import Label from "components/label";
import Switch from "components/switch";
import Tooltip from "components/tooltip";

import useFullscreen from "hooks/useFullScreen";

const AuthRegister = () => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <section className="top-bar topBar">
        <span className="brand">Yeti</span>
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
            href="/auth-login"
            className="btn btn_primary uppercase ltr:ml-5 rtl:mr-5 anchorElement"
          >
            Login
          </a>
        </nav>
      </section>

      <div className="container flex items-center justify-center mt-20 py-10">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <div className="mx-5 md:mx-10">
            <h2 className="uppercase">Create Your Account</h2>
            <h4 className="uppercase">Let's Roll</h4>
          </div>
          <form className="card mt-5 p-5 md:p-10 form">
            {['Name', 'Email'].map((value,index) => (
              <div className="mb-5" key={index}>
              <Label className="block mb-2" htmlFor={value}>
                {value}
              </Label>
              <Input id={value} placeholder="John Doe"/>
            </div>
            ))}
            <div className="mb-5">
              <Label className="block mb-2 label" htmlFor="password">
                Password
              </Label>
              <label className="form-control-addon-within inputContainer">
                <Input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  className="border-none"
                  defaultValue="12345"
                />
                <span className="flex items-center ltr:pr-4 rtl:pl-4">
                  <button
                    type="button"
                    className="text-gray-300 dark:text-gray-700 la la-eye text-xl leading-none"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  ></button>
                </span>
              </label>
            </div>
            <div className="flex">
              <Button className="ltr:ml-auto rtl:mr-auto uppercase button">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthRegister;