import React from 'react';
import { Marker } from 'react-leaflet';
import { MapMarkerIcon } from '../../utils/leafletConfig';
import PopupMessage from './PopupMessage';

const MapMarker = (props) => {
  const { position, address, name } = props;

  return (
    <Marker position={position} icon={MapMarkerIcon}>
      <PopupMessage message={address} name={name} />
    </Marker>
  );
};

export default MapMarker;
