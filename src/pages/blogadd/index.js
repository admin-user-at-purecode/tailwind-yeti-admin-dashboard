import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import Button from "components/button";
import Checkbox from "components/checkbox";
import CustomSelect from "components/customselect";
import Input from "components/input";
import Label from "components/label";
import Textarea from "components/textarea";
import Switch from "components/switch";
import Tabs, {
  TabsContent,
  TabsContentItem,
  TabsNavigation,
  TabsNavigationItem,
} from "components/tabs";
import { blogData, blogData2 } from "mock_data";

const BlogAdd = () => {
  return (
    <main className="workspace">
      <Breadcrumb title="Blog">
        <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Blog</BreadcrumbItem>
        <BreadcrumbItem>Add Post</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-4 gap-5">
        <div className="lg:col-span-2 xl:col-span-3">
          <div className="card p-5">
            {blogData.map((value) => (
              <div className="mb-5 xl:w-1/2">
                <Label className="block mb-2" htmlFor={value.forVal}>
                  {value.title}
                </Label>
                <Input id={value.forVal} />
              </div>
            ))}

            {blogData2.map((value) => (
              <div className="mb-5 xl:w-1/2">
                <Label className="block mb-2" htmlFor={value.forVal}>
                  {value.title}
                </Label>
                <Textarea id={value.forVal} rows={value.rows} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-5 lg:col-span-2 xl:col-span-1">
          <div className="card p-5 flex flex-col gap-y-5">
            <h3>Publish</h3>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center">
                <div className="w-1/4">
                  <Label>Status</Label>
                </div>
                <div className="w-3/4 ml-2">
                  <CustomSelect>
                    <option>Draft</option>
                    <option>Option</option>
                  </CustomSelect>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/4">
                  <Label>Visibility</Label>
                </div>
                <div className="w-3/4 ml-2">
                  <CustomSelect>
                    <option>Public</option>
                    <option>Option</option>
                  </CustomSelect>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/4">
                  <Label>Publish</Label>
                </div>
                <div className="w-3/4 ml-2">
                  <Switch label="Immediately" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              <Button className="uppercase">Publish</Button>
              <Button color="secondary" outlined className="uppercase">
                Save Draft
              </Button>
            </div>
          </div>

          <div className="card p-5">
            <h3>Categories</h3>
            <Tabs activeIndex={1} className="mt-5">
              <TabsNavigation>
                <TabsNavigationItem index={1} className="uppercase">
                  Most Used
                </TabsNavigationItem>
                <TabsNavigationItem index={2} className="uppercase">
                  All Categories
                </TabsNavigationItem>
              </TabsNavigation>
              <TabsContent>
                {[1,2].map(val => (
                  <TabsContentItem index={val} className="flex flex-col gap-y-2">
                  <Checkbox label="Uncategorized" defaultChecked />
                  <Checkbox label="Recent" />
                  <Checkbox label="Featured" />
                  <Checkbox label="Trending" />
                  <Checkbox label="International" />
                </TabsContentItem>
                ))}
                
                
              </TabsContent>
            </Tabs>
          </div>

          <div className="card p-5">
            <h3>Tags</h3>
            <div className="mt-5">
              <label className="form-control-addon-within flex-row-reverse">
                <input
                  className="form-control ltr:pl-2 rtl:pr-2 border-none w-full"
                  placeholder="Enter a tag"
                />
                <span className="flex items-center ltr:pl-4 rtl:pr-4">
                  <span className="badge badge_primary">
                    tag
                    <button
                      type="button"
                      className="ltr:ml-1 rtl:mr-1 la la-times"
                    ></button>
                  </span>
                </span>
              </label>
              <small className="block mt-2">Seperate tags with commas</small>
            </div>
          </div>

          <div className="card p-5">
            <h3>Featured Image</h3>
            <Button color="secondary" outlined className="mt-5 uppercase">
              Browse
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default BlogAdd;
