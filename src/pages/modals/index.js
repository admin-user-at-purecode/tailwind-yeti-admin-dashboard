import { useState } from "react";

import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Button from "components/button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "components/modal";
import { modalData, modalDataScrollable } from "mock_data";

const ComponentsModal = () => {
  const [isBasicModalActive, setIsBasicModalActive] = useState(false);
  const [isCenteredModalActive, setIsCenteredModalActive] = useState(false);
  const [isScrollableModalActive, setIsScrollableModalActive] = useState(false);
  const [isStaticBackdropModalActive, setIsStaticBackdropModalActive] =
    useState(false);
  const [isSideModalActive, setIsSideModalActive] = useState(false);

  return (
    <main className="workspace">
      <Breadcrumb title="Modal">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Modal</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-y-5">
          <div className="card p-5">
            <h3>Basic</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsBasicModalActive(true)} >
                Open Modal
              </Button>
            </div>
          </div>
          <div className="card p-5">
            <h3>Centered</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsCenteredModalActive(true)}>
                Open Modal
              </Button>
            </div>
          </div>
          <div className="card p-5">
            <h3>Scrollable</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsScrollableModalActive(true)}>
                Open Modal
              </Button>
            </div>
          </div>
          <div className="card p-5">
            <h3>Static Backdrop</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsStaticBackdropModalActive(true)}>
                Open Modal
              </Button>
            </div>
          </div>
          <div className="card p-5">
            <h3>Side Modal</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsSideModalActive(true)}>
                Open Modal
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        active={isBasicModalActive}
        onClose={() => setIsBasicModalActive(false)}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          {modalData}
         </ModalBody>
        <ModalFooter>
          <div className="flex ltr:ml-auto rtl:mr-auto">
            <Button
              color="secondary"
              className="uppercase"
              onClick={() => setIsBasicModalActive(false)}>
              Close
            </Button>
            <Button className="ltr:ml-2 rtl:mr-2 uppercase">
              Save Changes
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      <Modal
        active={isCenteredModalActive}
        centered
        onClose={() => setIsCenteredModalActive(false)}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
 {modalData}
        </ModalBody>
        <ModalFooter>
          <div className="flex ltr:ml-auto rtl:mr-auto">
            <Button
              color="secondary"
              className="uppercase"
              onClick={() => setIsCenteredModalActive(false)}>
              Close
            </Button>
            <Button className="ltr:ml-2 rtl:mr-2 uppercase">
              Save Changes
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      <Modal
        active={isScrollableModalActive}
        scrollable
        onClose={() => setIsScrollableModalActive(false)}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
        {modalDataScrollable}
     </ModalBody>
        <ModalFooter>
          <div className="flex ltr:ml-auto rtl:mr-auto">
            <Button
              color="secondary"
              className="uppercase"
              onClick={() => setIsScrollableModalActive(false)}>
              Close
            </Button>
            <Button className="ltr:ml-2 rtl:mr-2 uppercase">
              Save Changes
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      <Modal
        active={isStaticBackdropModalActive}
        staticBackdrop
        onClose={() => setIsStaticBackdropModalActive(false)}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
         {modalData}
        </ModalBody>
        <ModalFooter>
          <div className="flex ltr:ml-auto rtl:mr-auto">
            <Button
              color="secondary"
              className="uppercase"
              onClick={() => setIsStaticBackdropModalActive(false)}>
              Close
            </Button>
            <Button className="ltr:ml-2 rtl:mr-2 uppercase">
              Save Changes
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      <Modal
        active={isSideModalActive}
        aside
        onClose={() => setIsSideModalActive(false)}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
       {modalData}
          </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            className="uppercase"
            onClick={() => setIsSideModalActive(false)}>
            Close
          </Button>
          <Button className="ltr:ml-2 rtl:mr-2 uppercase">Save Changes</Button>
        </ModalFooter>
      </Modal>

<Footer />
    </main>
  );
};
export default ComponentsModal;
