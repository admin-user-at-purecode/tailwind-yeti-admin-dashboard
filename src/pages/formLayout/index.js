import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Input from "components/input";
import Label from "components/label";
import { lableInputData } from "mock_data";

const FormLayout = () => {
  return (
    <main className="workspace">
      <Breadcrumb title="Layout">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Form</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-3 gap-5">
        {lableInputData.map((input, index) => (
          <div key={index} className="card p-5">
            <h3>{input.cardTitle}</h3>
            <div className="relative mt-5">
              <Label
                className={`absolute block ${input.labelClassName}`}
                htmlFor={input.id}
              >
                 Label
              </Label>
              <Input
                id={input.id}
                className="mt-2 pt-5"
                placeholder= "Enter text here"
              />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default FormLayout;
