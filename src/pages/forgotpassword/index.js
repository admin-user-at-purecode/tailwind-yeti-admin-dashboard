import classNames from "classnames";
import Button from "components/button";
import Input from "components/input";
import Label from "components/label";
import Switch from "components/switch";
import Tooltip from "components/tooltip";

import useFullscreen from "hooks/useFullScreen";

const AuthForgotPassword = () => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();

  return (
    <>
      <section className="top-bar">
        <span className="brand">Yeti</span>
        <nav className="flex items-center ltr:ml-auto rtl:mr-auto">
          <Tooltip content="Toggle Dark Mode">
            <Switch outlined />
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
          <a
            href="/auth-login"
            className="btn btn_primary uppercase ltr:ml-5 rtl:mr-5"
          >
            Login
          </a>
        </nav>
      </section>
      <div className="container flex items-center justify-center mt-20 py-10">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <div className="mx-5 md:mx-10">
            <h2 className="uppercase">Forgot Password?</h2>
            <h4 className="uppercase">We'll Email You Soon</h4>
          </div>
          <form className="card mt-5 p-5 md:p-10">
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="email">
                Email
              </Label>
              <Input id="email" placeholder="example@example.com" />
            </div>
            <div className="flex">
              <Button className="ltr:ml-auto rtl:mr-auto uppercase">
                Send Reset Link
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthForgotPassword;