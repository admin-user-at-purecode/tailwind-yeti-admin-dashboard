
// import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

import Avatar from "components/avatar";
import Footer from "components/footer";
import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import { avatars } from "mock_data";

const ComponentsAvatars = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Avatars">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Avatars</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-4 gap-5">
      {avatars.map((avatar, index) => (
        <div className="flex flex-col space-y-5" key={index}>
          {avatar.map((item, idx) => (
            <div className="card p-5" key={idx}>
              <h3>{item.title}</h3>
              <div className="flex items-center gap-x-4 mt-4">
                {item.avatars.map((av, i) => (
                  <Avatar key={i} {...av.props}>
                    {av.content}
                  </Avatar>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    

      <Footer />
    </main>
  );
};

export default ComponentsAvatars;
