import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Tabs, {
  TabsContent,
  TabsContentItem,
  TabsNavigation,
  TabsNavigationItem,
} from "components/tabs";

const ComponentsTabs = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Tabs">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Tabs</BreadcrumbItem>
      </Breadcrumb>

      {/* Tabs */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="card p-5">
          <h3>Tabs</h3>
          <Tabs activeIndex={1} className="mt-5">
            <TabsNavigation>
              {['Tab One','Tab Two','Tab Three'].map((e,index)=><TabsNavigationItem index={index+1} className="uppercase">
                {e}
              </TabsNavigationItem>)}
            
            </TabsNavigation>
            <TabsContent>
              <TabsContentItem index={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                veritatis officiis, quidem placeat autem nihil voluptatem velit
                quaerat adipisci veniam iste. Quae odio sint dolorum aliquid eos
                numquam est ducimus! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Itaque enim alias odit facilis, necessitatibus
                quam nulla! Sapiente nostrum nulla ut, aspernatur nisi unde enim
                quas ipsam laudantium excepturi vel consequuntur.
              </TabsContentItem>
              <TabsContentItem index={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                veritatis officiis, quidem placeat autem nihil voluptatem velit
                quaerat adipisci veniam iste. Quae odio sint dolorum aliquid eos
                numquam est ducimus! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Itaque enim alias odit facilis, necessitatibus
                quam nulla! Sapiente nostrum nulla ut, aspernatur nisi unde enim
                quas ipsam laudantium excepturi vel consequuntur. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Commodi veritatis
                officiis, quidem placeat autem nihil voluptatem velit quaerat
                adipisci veniam iste. Quae odio sint dolorum aliquid eos numquam
                est ducimus! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Itaque enim alias odit facilis, necessitatibus quam nulla!
                Sapiente nostrum nulla ut, aspernatur nisi unde enim quas ipsam
                laudantium excepturi vel consequuntur.
              </TabsContentItem>
              <TabsContentItem index={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                veritatis officiis, quidem placeat autem nihil voluptatem velit
                quaerat adipisci veniam iste. Quae odio sint dolorum aliquid eos
                numquam est ducimus! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Itaque enim alias odit facilis, necessitatibus
                quam nulla! Sapiente nostrum nulla ut, aspernatur nisi unde enim
                quas ipsam laudantium excepturi vel consequuntur.
              </TabsContentItem>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsTabs;
