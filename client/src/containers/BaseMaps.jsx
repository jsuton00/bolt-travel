import { MapContainer, TileLayer } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import {
  boltTravelLocation,
  mapAttribution,
  mapTileUrl,
} from '../utils/leafletConfig';
import MapMarker from '../components/maps/MapMarker';
import '../styles/components/maps.css';

export const HomeLocation = () => {
  const [homeAddress, setHomeAddress] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (boltTravelLocation) {
        setHomeAddress(boltTravelLocation.address);
      }
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {boltTravelLocation && (
        <MapContainer
          center={[boltTravelLocation.latitude, boltTravelLocation.longitude]}
          zoom={boltTravelLocation.zoom}
        >
          <TileLayer url={mapTileUrl} attribution={mapAttribution} />
          <MapMarker
            position={[
              boltTravelLocation.latitude,
              boltTravelLocation.longitude,
            ]}
            address={homeAddress}
          />
        </MapContainer>
      )}
    </>
  );
};

export const ProductLocation = (props) => {
  const { productLocation, address, name } = props;

  return (
    <>
      {productLocation && (
        <MapContainer
          center={[productLocation.lat, productLocation.lng]}
          zoom={productLocation.zoomLevel}
        >
          <TileLayer url={mapTileUrl} attribution={mapAttribution} />
          <MapMarker
            position={[productLocation.lat, productLocation.lng]}
            address={address}
            name={name}
          />
        </MapContainer>
      )}
    </>
  );
};
