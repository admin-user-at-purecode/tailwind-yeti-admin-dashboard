import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import { TableHeadings, tableData } from "mock_data";

const ComponentsTables = () => {
  return (
    <main className="workspace main">
      <Breadcrumb title="Tables" className="Breadcrumb">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Tables</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-y-5">
          <div className="card p-5">
            <h3>Basic</h3>
            <table className="table w-full mt-3">
              <thead>
                <tr>
                  {TableHeadings.map((heading, index) => (
                    <th
                      className="ltr:text-left rtl:text-right uppercase"
                      key={index}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((val, index) => (
                  <tr key={index}>
                    <td>{val}</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@john</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <h3>Bordered</h3>
            <table className="table table_bordered w-full mt-3">
              <thead>
                <tr>
                  {TableHeadings.map((heading, index) => (
                    <th
                      key={index}
                      className="ltr:text-left rtl:text-right uppercase"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((val, index) => (
                  <tr key={index}>
                    <td>{val}</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@john</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <h3>Hoverable</h3>
            <table className="table table_hoverable w-full mt-3">
              <thead>
                <tr>
                  {TableHeadings.map((heading, index) => (
                    <th
                      className="ltr:text-left rtl:text-right uppercase"
                      key={index}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((val, index) => (
                  <tr key={index}>
                    <td>{val}</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@john</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="card p-5">
            <h3>Striped</h3>
            <table className="table table_striped w-full mt-3">
              <thead>
                <tr>
                  {TableHeadings.map((heading, index) => (
                    <th
                      className="ltr:text-left rtl:text-right uppercase"
                      key={index}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((val, index) => (
                  <tr key={index}>
                    <td>{val}</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@john</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <h3>Borderless</h3>
            <table className="table table_borderless w-full mt-3">
              <thead>
                <tr>
                  {TableHeadings.map((heading, index) => (
                    <th
                      className="ltr:text-left rtl:text-right uppercase"
                      key={index}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((val, index) => (
                  <tr key={index}>
                    <td>{val}</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@john</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ComponentsTables;