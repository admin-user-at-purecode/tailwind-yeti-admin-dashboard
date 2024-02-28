import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Button from "components/button";
import Dropdown from "components/dropdown";
import { DropdownContent } from "mock_data";

const ComponentsDropdowns = () => {
  return (
    <main className="workspace main">
      <Breadcrumb title="Dropdowns" className="Breadcrumb">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Dropdowns</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-y-5">
          <div className="card p-5">
            <h3>Dropdowns</h3>
            <div className="mt-5">
              <Dropdown className="Dropdown4" content={<DropdownContent />}>
                <Button className="uppercase">
                  Dropdown
                  <span className="ltr:ml-3 rtl:mr-3 la la-caret-down text-xl leading-none"></span>
                </Button>
              </Dropdown>
            </div>
          </div>

          <div className="card p-5">
            <h3>Split Dropdowns</h3>
            <div className="mt-5">
              <div className="btn-group">
                <Button className="uppercase">Split Dropdown</Button>
                <Dropdown className="Dropdown5" content={<DropdownContent />}>
                  <Button className="uppercase ltr:pl-4 rtl:pr-4">
                    <span className="la la-caret-down text-xl leading-none"></span>
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsDropdowns;