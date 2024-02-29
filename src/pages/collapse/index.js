import { useState } from "react";
import Footer from "components/footer";
import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Button from "components/button";
import Collapse, { Accordion, AccordionItem } from "components/collapse";
import { AccordionBodyText } from "mock_data";
import { ButtonText } from "mock_data";
import { AccordionTitle } from "mock_data";

const ComponentsCollapse = () => {
  const [firstCollapse, setFirstCollapse] = useState(false);
  const [secondCollapse, setSecondCollapse] = useState(true);
  const [activeIndex, setActiveIndex] = useState(3);
  const toggleFirstCollapse = () => setFirstCollapse(!firstCollapse);
  const toggleSecondCollapse = () => setSecondCollapse(!secondCollapse);
  const toggleBothCollapses = () => {
    setFirstCollapse(!firstCollapse);
    setSecondCollapse(!secondCollapse);
  };

  return (
    <main className="workspace main">
      <Breadcrumb title="Collapse" className="Breadcrumb">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Collapse</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="card p-5 card1">
          <h3>Collapse</h3>
          <div className="mt-5">
            <Button className="uppercase Button1" onClick={toggleFirstCollapse}>
              <p>{ButtonText}</p>
            </Button>
            <Collapse open={firstCollapse}>
              <div className="border border-divider rounded-xl mt-5 p-5">
                <p>{AccordionBodyText}</p>
              </div>
            </Collapse>
            <Button
              className="uppercase mt-5 Button1"
              onClick={toggleSecondCollapse}
            >
              <p>{ButtonText}</p>
            </Button>
            <Collapse open={secondCollapse}>
              <div className="border border-divider rounded-xl mt-5 p-5">
                <p>{AccordionBodyText}</p>
              </div>
            </Collapse>
            <Button
              className="uppercase mt-5 Button2"
              onClick={toggleBothCollapses}
            >
              Toggle Collapse All
            </Button>
          </div>
        </div>

        <div className="card p-5 card2">
          <h3>Accordion</h3>
          <Accordion>
            <AccordionItem
              className="AccordionItem"
              activeIndex={activeIndex}
              index={1}
              title={`${AccordionTitle} #1`}
              onToggle={setActiveIndex}
            >
              <p>{AccordionBodyText}</p>
            </AccordionItem>
            <hr />
            <AccordionItem
              className="AccordionItem"
              activeIndex={activeIndex}
              index={2}
              title={`${AccordionTitle} #2`}
              onToggle={setActiveIndex}
            >
              <p>{AccordionBodyText}</p>
            </AccordionItem>
            <hr />
            <AccordionItem
              className="AccordionItem"
              activeIndex={activeIndex}
              index={3}
              title={`${AccordionTitle} #3`}
              onToggle={setActiveIndex}
            >
              <p>{AccordionBodyText}</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ComponentsCollapse;