import GoogleMapReact from 'google-map-react';
import { FaMountain } from 'react-icons/fa';

const MapPin = () => <div className="park__pin"><FaMountain /></div>;
 
const Map = ({ lat, long}) => {
    let latitude = Number(lat);
    let longitude = Number(long);
    return (
        <div className="park__map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDaL1IAyZaOUBWwxZuFWcKo3rT6In29MTo' }}
                defaultCenter={{ lat: latitude, lng: longitude }}
                defaultZoom={5}>
                <MapPin lat={latitude} lng={longitude} />
            </GoogleMapReact>
        </div>
    )
}

export default Map;
