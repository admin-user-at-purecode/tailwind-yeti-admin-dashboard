import { useState } from "react";

import Footer from "components/footer";

import { Accordion, AccordionItem } from "components/collapse";
import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Sidebar from "components/sidebar";
import { QuestionsData, AccordionData } from "mock_data";

const PagesFAQsLayout2 = () => {
  const [activeIndex1, setActiveIndex1] = useState(3);
  const [activeIndex2, setActiveIndex2] = useState(3);

  return (
    <>
      <main className="workspace workspace_with-sidebar">
        <Breadcrumb title="FAQs">
          <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
          <BreadcrumbItem link="#no-link">FAQs</BreadcrumbItem>
          <BreadcrumbItem>Layout 2</BreadcrumbItem>
        </Breadcrumb>

        <div className="flex flex-col gap-y-5">
          {QuestionsData.map((question) => (
            <div className="card p-5">
              <h3>{question}</h3>
              <Accordion>
                {AccordionData.map((data) => {
                  const { title, index } = data;
                  return (
                    <>
                      <AccordionItem
                        activeIndex={
                          question !== "Fruits" ? activeIndex1 : activeIndex2
                        }
                        index={index}
                        title={title}
                        onToggle={
                          question !== "Fruits"
                            ? setActiveIndex1
                            : setActiveIndex2
                        }
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure rem sed dicta ut a perspiciatis temporibus!
                      </AccordionItem>
                      {index !== 3 && <hr />}
                    </>
                  );
                })}
              </Accordion>
            </div>
          ))}
        </div>
        <Footer />
      </main>

      <Sidebar>
        <div className="overflow-y-auto">
          <h2 className="p-5">Categories</h2>
          <hr />
          <div className="p-5 leading-normal">
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-laptop text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              Questions Regarding Potato
            </a>
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-apple-alt text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              Fruits
            </a>
            <hr className="my-2" />
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-egg text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              Tomato
            </a>
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-hamburger text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              Onions Have Skin?
            </a>
            <hr className="my-2" />
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-lemon text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              We Know Nothing
            </a>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default PagesFAQsLayout2;