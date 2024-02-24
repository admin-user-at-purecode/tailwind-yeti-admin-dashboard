import Footer from "components/footer";

import Badge from "components/badge";
import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";
import { badges } from "mock_data";

const ComponentsBadges = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Badges">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Badges</BreadcrumbItem>
      </Breadcrumb>

      {/* Default */}
      <div className="card p-5">
        <h3>Default</h3>
        <div className="flex flex-wrap gap-5 mt-5">
        {badges.map((badge, index) => (
          <Badge key={index} color={badge.color} className="uppercase">
            {badge.text}
          </Badge>
        ))}
        </div>
      </div>

      {/* Outlined */}
      <div className="card mt-5 p-5">
        <h3>Outlined</h3>
        <div className="flex flex-wrap gap-5 mt-5">
        {badges.map((badge, index) => (
          <Badge outlined key={index} color={badge.color} className="uppercase">
            {badge.text}
          </Badge>
        ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsBadges;
