import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Button from "components/button";
import { btnDat } from "mock_data";

const ComponentsButtons = () => {

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Buttons">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Buttons</BreadcrumbItem>
      </Breadcrumb>

      {/* Default */}
      <div className="card p-5">
        <h3>Default</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          <Button className="uppercase">Primary</Button>
          {btnDat.map((button, index) => (
            <Button
              key={index}
              color={button.color}
              className={`uppercase ${button.disabled ? "disabled" : ""}`}
              disabled={button.disabled}
            >
              {button.text}
            </Button>
          ))}
           <Button className="uppercase" disabled>
            Disabled
          </Button>
          <Button className="uppercase">
            <span className="la la-star ltr:mr-2 rtl:ml-2"></span>
            With Icon
          </Button>
        </div>
      </div>

      {/* Outlined */}
      <div className="card mt-5 p-5">
        <h3>Outlined</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          <Button outlined className="uppercase">
            Primary
          </Button>
          {btnDat.map((button, index) => (
            <Button
              key={index}
              outlined
              color={button.color}
              className={`uppercase ${button.disabled ? "disabled" : ""}`}
              disabled={button.disabled}
            >
              {button.text}
              {button.text === "With Icon" && (
                <span className="la la-star ltr:mr-2 rtl:ml-2"></span>
              )}
            </Button>
          ))}
           <Button outlined className="uppercase" disabled>
            Disabled
          </Button>
          <Button outlined className="uppercase">
            <span className="la la-star ltr:mr-2 rtl:ml-2"></span>
            With Icon
          </Button>
        </div>
      </div>

      {/* Icon Default */}
      <div className="card mt-5 p-5">
        <h3>Icon Button Default</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          {btnDat.map((button, index) => (
            <Button
              key={index}
              icon
              color={button.color}
              disabled={button.disabled}
            >
              <span className="la la-star"></span>
            </Button>
          ))}
          <Button icon color="info">
            <span className="la la-star"></span>
          </Button>
          <Button icon disabled>
            <span className="la la-star"></span>
          </Button>
        </div>
      </div>

      {/* Icon Outlined */}
      <div className="card mt-5 p-5">
        <h3>Icon Button Outlined</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          <Button icon outlined>
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="secondary">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="success">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="danger">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="warning">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="info">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined disabled>
            <span className="la la-star"></span>
          </Button>
        </div>
      </div>

      {/* Grouped */}
      <div className="card mt-5 p-5 flex flex-col gap-y-5">
        <h3>Grouped</h3>
        <div className="btn-group">
          <Button>L</Button>
          <Button>C</Button>
          <Button>R</Button>
        </div>
        <div className="btn-group">
          <Button outlined>L</Button>
          <Button outlined>C</Button>
          <Button outlined>R</Button>
        </div>
        <div className="btn-group">
          <Button>L</Button>
          <Button>L</Button>
          <Button outlined>R</Button>
          <Button outlined>R</Button>
        </div>
        <div className="btn-group">
          <Button outlined>L</Button>
          <Button outlined>L</Button>
          <Button>R</Button>
          <Button>R</Button>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsButtons;
