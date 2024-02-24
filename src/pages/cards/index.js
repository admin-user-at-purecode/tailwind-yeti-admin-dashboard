import { useState } from "react";

import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import { CardColumn, CardList, CardRow } from "components/card";
import Pagination from "components/pagination";
import Checkbox from "components/checkbox";  



import potato from "assets/images/potato.jpg";
import tomato from "assets/images/tomato.jpg";
import breakfast from "assets/images/breakfast.jpg";

const ComponentsCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  return (
    <main className="workspace">
      <Breadcrumb title="Cards">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Cards</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-4 gap-5">
        <div className="card p-5 h-40">
          <h3>Blank Card</h3>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-5 mt-5">
        <div className="card px-4 py-8 text-center">
          <span className="text-primary text-5xl leading-none la la-sun"></span>
          <p className="mt-2">Published Posts</p>
          <div className="text-primary mt-5 text-3xl leading-none">18</div>
        </div>
      </div>

      <div className="lg:flex mt-5">
        <CardRow
          id={1}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          overview="Nunc et tincidunt tortor. Integer pellentesque bibendum neque, ultricies semper neque vulputate congue. Nunc fringilla mi sed nisi finibus vulputate. Nunc eu risus velit."
          thumbnail={potato}
          views={100}
          status="Draft"
          dateTime="1638982148"
        />
      </div>

      <div className="grid lg:grid-cols-4 gap-5 mt-5">
        <CardColumn
          id={1}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          overview="Nunc et tincidunt tortor. Integer pellentesque bibendum neque, ultricies semper neque vulputate congue. Nunc fringilla mi sed nisi finibus vulputate. Nunc eu risus velit."
          thumbnail={tomato}
          views={100}
          status="Draft"
          dateTime="1648017540"
        />
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
        <CardList id={1} title="Potato" dateTime="1652146676" />

        <CardList
          id={1}
          title="Potato"
          thumbnail={breakfast}
          dateTime="1652727063"
        />
      </div>

      <Pagination
        currentPage={currentPage}
        totalCount={50}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
        onPageSizeChange={(size) => setPageSize(size)}
        className="mt-5"
      />

      <Footer />
    </main>
  );
};

export default ComponentsCards;
