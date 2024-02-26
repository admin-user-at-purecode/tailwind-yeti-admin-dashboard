import { useState } from "react";

import classNames from "classnames";
import PropTypes from "prop-types";
import moment from "moment";

import Badge from "components/badge";
import Checkbox from "components/checkbox";
import Dropdown from "components/dropdown";

const CardList = (props) => {
  const { id, title, thumbnail, type, dateTime, selected, onToggleSelection } =
    props;

  const [isSelected, setIsSelected] = useState(selected ? selected : false);

  const toggleSelection = (event) => {
    setIsSelected(!isSelected);

    if (onToggleSelection) {
      onToggleSelection(id);
    }
  };

  const getThumbnail = (thumbnail, type) => {
    if (thumbnail) {
      return (
        <div className="image">
          <img src={thumbnail} alt="" />
        </div>
      );
    } else {
      switch (type) {
        case "audio/mp3":
          return (
            <div className="image image_icon">
              <span className="la la-music la-4x"></span>
            </div>
          );

        case "video/mp4":
          return (
            <div className="image image_icon">
              <span className="la la-video la-4x"></span>
            </div>
          );

        case "document/pdf":
          return (
            <div className="image image_icon">
              <span className="la la-file la-4x"></span>
            </div>
          );

        default:
          return (
            <div className="image image_icon">
              <span className="la la-folder la-4x"></span>
            </div>
          );
      }
    }
  };

  return (
    <div
      className={classNames("card", "card_list", "card_hoverable", {
        card_selected: isSelected,
      })}
    >
      {getThumbnail(thumbnail, type)}
      <div className="body"> 
        <h5>{title}</h5>
        <p>{moment.unix(dateTime).format("LL")}</p>
      </div>
      <div className="actions">
        <Checkbox checked={isSelected} onChange={toggleSelection} />
      </div>
    </div>
  );
};

CardList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  type: PropTypes.string,
  dateTime: PropTypes.string,
  selected: PropTypes.bool,
  onToggleSelection: PropTypes.func,
};

export {  CardList };
