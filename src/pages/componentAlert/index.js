import Alert from "components/alert";
import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Footer from "components/footer";
import { alertData } from "mock_data";

const ComponentsAlerts = () => {
  return (
    <main className="workspace">
      <Breadcrumb title="Alerts">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Alerts</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="card p-5 flex flex-col gap-y-5">
          <h3>Default</h3>
          <Alert title="Hello!" dismissable>
            This is an alert message.
          </Alert>
      {alertData.map((alert, index) => (
        <Alert key={index} title="Hello!" color={alert.color} dismissable>
           This is an alert message.
        </Alert>
       ))}

        </div>

        <div className="card p-5 flex flex-col gap-y-5">
          <h3>Outlined</h3>
          <Alert title="Hello!" outlined={true} dismissable={true}>
            This is an alert message.
          </Alert>
          {alertData.map((alert, index) => (
            <Alert key={index} title="Hello!" color={alert.color} outlined={true} dismissable={true}
            >
              This is an alert message.
            </Alert>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsAlerts;
