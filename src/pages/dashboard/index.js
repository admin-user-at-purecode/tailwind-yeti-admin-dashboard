import Footer from "components/footer";

import LineWithAnnotationChart from "components/LineWithAnnotationChart";
import Area from "components/area";
import Badge from "components/badge";
import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Button from "components/Button";
import CustomSelect from "components/customSelect";
import Input from "components/input";
import Label from "components/label";
import PolarArea from "components/polarArea";
import Textarea from "components/textarea";
import DataChartJS from "components/charts";

const Dashboard = () => {
  const {
    visitors,
    lineWithAnnotationTO,
    lineWithAnnotationAO,
    lineWithAnnotationPO,
    lineWithAnnotationSO,
  } = DataChartJS();

  const data = [
    {
      status: "Draft",
      color: "secondary",
    },
    {
      status: "Published",
      color: "success",
    },
    {
      status: "Pending",
      color: "warning",
    },
    {
      status: "Published",
      color: "success",
    },
    {
      status: "Draft",
      color: "secondary",
    },
  ];
  return (
    <main className="workspace">      <Breadcrumb title="Dashboard">
        <BreadcrumbItem link="#no-link">Login</BreadcrumbItem>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: "la la-sun", title: "Published Posts", count: 18 },
            { icon: "la la-cloud", title: "Pending Posts", count: 16 },
            { icon: "la la-layer-group", title: "Categories", count: 9 },
          ].map((item, index) => (
            <div
              key={index}
              className="card px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200"
            >
              <div>
                <span className="text-primary text-5xl leading-none {item.icon}"></span>
                <p className="mt-2">{item.title}</p>
                <div className="text-primary mt-5 text-3xl leading-none">
                  {item.count}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            lineWithAnnotationTO,
            lineWithAnnotationAO,
            lineWithAnnotationPO,
            lineWithAnnotationSO,
          ].map((data, index) => (
            <div key={index} className="card p-5">
              <LineWithAnnotationChart data={data} />
            </div>
          ))}
        </div>
        <div className="card p-5">
          <h3>Visitors</h3>
          <div className="mt-5">
            <Area data={visitors} withShadow />
          </div>
        </div>
        <div className="card p-5 flex flex-col">
          <h3>Recent Posts</h3>
          <table className="table table_list mt-3 w-full">
            <thead>
              <tr>
                <th className="ltr:text-left rtl:text-right uppercase">
                  Title
                </th>
                <th className="w-px uppercase">Views</th>
                <th className="w-px uppercase">Pulbished</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td className="text-center">100</td>
                  <td className="text-center">
                    <Badge color={item.color} outlined className="uppercase">
                      {item.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-auto">
            <a href="#no-link" className="btn btn_primary mt-5">
              Show all Posts
            </a>
          </div>
        </div>
        <div className="card p-5 flex flex-col">
          <h3>Categories</h3>
          <div className="flex-auto mt-5">
            <PolarArea withShadow />
          </div>
        </div>
        <div className="card p-5">
          <h3>Quick Post</h3>
          <form className="mt-5">
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="title">
                Title
              </Label>
              <Input id="title" />
            </div>
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="content">
                Content
              </Label>
              <Textarea id="content" rows="4"></Textarea>
            </div>
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="category">
                Category
              </Label>
              <CustomSelect id="category">
                <option>Select</option>
                <option>Option</option>
              </CustomSelect>
            </div>
            <div className="mt-10">
              <Button className="uppercase">Publish</Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Dashboard;
