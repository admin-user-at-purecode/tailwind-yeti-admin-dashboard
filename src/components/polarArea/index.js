import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  PolarAreaController,
} from "chart.js";

import PropTypes from "prop-types";

import ConfigChartJS from "config/chartjs";
import DataChartJS from "components/charts";


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

require("components/LineWithShadowElement");

class PolarWithShadow extends PolarAreaController {}

PolarWithShadow.id = "polarAreaWithShadow";
PolarWithShadow.defaults = {
  datasetElementType: "lineWithShadowElement",
};

ChartJS.register(PolarWithShadow);

const PolarArea = (props) => {
  const { data, withShadow } = props;

  const polarAreaOptions = ConfigChartJS().polarArea;
  const polarAreaData = DataChartJS().polarArea;

  return (
    <Chart
      type={withShadow ? "polarAreaWithShadow" : "polarArea"}
      options={polarAreaOptions}
      data={data ? data : polarAreaData}
    />
  );
};

PolarArea.propTypes = {
  withShadow: PropTypes.bool,
  options: PropTypes.object,
  data: PropTypes.object,
};

export default PolarArea;
