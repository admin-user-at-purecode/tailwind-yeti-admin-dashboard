import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const Blank = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Blank Page">
        <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
        <BreadcrumbItem>Blank Page</BreadcrumbItem>
      </Breadcrumb>

      <Footer />
    </main>
  );
};

export default Blank;
