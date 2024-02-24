import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Label from "components/label";
import CustomSelect from "components/customselect";
import Textarea from "components/textarea";
import Checkbox from "components/checkbox";
import Radio from "components/radio";
import Input from "components/input";


const FormValidations = () => {
  return (
    <main className="workspace">
      <Breadcrumb title="Validations">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Form</BreadcrumbItem>
        <BreadcrumbItem>Validations</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="flex flex-col gap-y-5">
          <div className="card p-5">
            <h3>Input</h3>
            <div className="mt-5">
              <Label className="block mb-2" htmlFor="input">
                Label
              </Label>
              <Input id="input" placeholder="Enter text here" invalid />
              <small className="block mt-2 invalid-feedback">
                This is help text.
              </small>
            </div>
          </div>

          <div className="card p-5">
            <h3>Custom Select</h3>
            <div className="mt-5">
              <CustomSelect invalid>
                <option>Select</option>
                <option>Option</option>
              </CustomSelect>
            </div>
          </div>

          <div className="card p-5">
            <h3>Textarea</h3>
            <div className="mt-5">
              <Textarea rows="5" invalid></Textarea>
            </div>
          </div>
        </div>

        <div>
          <div className="card p-5">
            <h3>Custom Input</h3>
            <h4 className="mt-5 uppercase">Checkbox</h4>
            <div className="mt-5">
              <Checkbox label="Checkbox" invalid />
            </div>
            <h4 className="mt-10 uppercase">Radio</h4>
            <div className="mt-5">
              <Radio name="radio" label="Radio" invalid />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default FormValidations;
