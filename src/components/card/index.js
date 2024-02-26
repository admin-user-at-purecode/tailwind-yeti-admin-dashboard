import { useState } from "react";

import classNames from "classnames";
import PropTypes from "prop-types";
import moment from "moment";

import Badge from "components/badge";
import Checkbox from "components/checkbox";
import Dropdown from "components/dropdown";

const CardColumn = (props) => {
  const {
    id,
    title,
    overview,
    thumbnail,
    views,
    status,
    dateTime,
    selected,
    onToggleSelection,
  } = props;

  const [isSelected, setIsSelected] = useState(selected ? selected : false);

  const toggleSelection = (event) => {
    setIsSelected(!isSelected);

    if (onToggleSelection) {
      onToggleSelection(id);
    }
  };

  const getBadge = (status) => {
    switch (status) {
      case "Draft":
        return (
          <Badge
            color="secondary"
            outlined
            className="uppercase absolute top-0 ltr:right-0 rtl:left-0 mt-2 ltr:mr-2 rtl:ml-2"
          >
            Draft
          </Badge>
        );

      case "Published":
        return (
          <Badge
            color="success"
            outlined
            className="uppercase absolute top-0 ltr:right-0 rtl:left-0 mt-2 ltr:mr-2 rtl:ml-2"
          >
            Published
          </Badge>
        );

      default:
    }
  };

  return (
    <div
      className={classNames("card", "card_column", "card_hoverable", {
        card_selected: isSelected,
      })}
    >
      <div className="image">
        <div className="aspect-w-4 aspect-h-3">
          <img src={thumbnail} alt="" />
        </div>
        <Checkbox
          checked={isSelected}
          className="absolute top-0 ltr:left-0 rtl:right-0 mt-2 ltr:ml-2 rtl:mr-2"
          onChange={toggleSelection}
        />
        {getBadge(status)}
      </div>
      <div className="header">
        <h5>{title}</h5>
        <p>{overview}</p>
      </div>
      <div className="body">
        <h6 className="uppercase">Views</h6>
        <p>{views}</p>
        <h6 className="uppercase mt-4">Date Created</h6>
        <p>{moment.unix(dateTime).format("LL")}</p>
      </div>
      <div className="actions">
        <a href="#no-link" className="btn btn-icon btn_outlined btn_secondary">
          <span className="la la-pen-fancy"></span>
        </a>
        <a
          href="#no-link"
          className="btn btn-icon btn_outlined btn_danger ltr:ml-2 rtl:mr-2"
        >
          <span className="la la-trash-alt"></span>
        </a>
        <div className="ltr:ml-auto rtl:mr-auto ltr:-mr-3 rtl:-ml-3">
          <Dropdown
            content={
              <div className="dropdown-menu">
                <a href="#no-link">Dropdown Action</a>
                <a href="#no-link">Link</a>
                <hr />
                <a href="#no-link">Something Else</a>
              </div>
            }
          >
            <button>
              <span className="la la-ellipsis-v text-4xl leading-none"></span>
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

CardColumn.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  thumbnail: PropTypes.string,
  views: PropTypes.number,
  status: PropTypes.string,
  dateTime: PropTypes.string,
  selected: PropTypes.bool,
  onToggleSelection: PropTypes.func,
};

export { CardColumn };
