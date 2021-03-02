import React from 'react';
import { Popup } from 'react-leaflet';

const PopupMessage = (props) => {
  const { message, name } = props;
  return (
    <Popup className="map-popup-box">
      <div className="map-popup-text card-body">
        <h5 className="map-popup-text-title card-title">
          {name ? name : `Bolt Travel`}
        </h5>
        <p className="map-popup-text-address card-text">{message}</p>
      </div>
    </Popup>
  );
};

export default PopupMessage;
