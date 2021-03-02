import L from 'leaflet';
import { mapIcon } from './fetchImages';

export const boltTravelLocation = {
  address: 'Put Vučipolja 29, 21312 Podstrana, Croatia',
  latitude: 43.4701269,
  longitude: 16.5769099,
  zoom: 17,
};

export const MapMarkerIcon = L.icon({
  iconUrl: mapIcon,
  iconRetinaUrl: mapIcon,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon',
});

export const mapTileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const mapAttribution =
  '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors,';

export const leafletConfig = (lat, lng, zoom) => ({
  center: [lat, lng],
  tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors,',
});
