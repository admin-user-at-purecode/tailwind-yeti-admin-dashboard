import { Chart } from "react-chartjs-2";


import PropTypes from "prop-types";

import ConfigChartJS from "config/chartjs";


import { Chart as ChartJS, CategoryScale, Filler, Legend, LineElement, LinearScale, PointElement, Title, Tooltip, LineController } from "chart.js";
import DataChartJS from "components/charts";

// Chart register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Line with shadow element
require("components/LineWithShadowElement");

// Line with shadow
class LineWithShadow extends LineController {}

LineWithShadow.id = "lineWithShadow";
LineWithShadow.defaults = {
  datasetElementType: "lineWithShadowElement",
};

ChartJS.register(LineWithShadow);

const Area = (props) => {
  const { data, withShadow } = props;

  const areaOptions = ConfigChartJS().area;
  const areaData = DataChartJS().area;

  return (
    <Chart
      type={withShadow ? "lineWithShadow" : "line"}
      options={areaOptions}
      data={data ? data : areaData}
    />
  );
};

Area.propTypes = {
  withShadow: PropTypes.bool,
  options: PropTypes.object,
  data: PropTypes.object,
};

export default Area;
