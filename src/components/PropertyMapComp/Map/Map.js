import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div className="min-h-[90vh] w-full">
            Map Goog
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyBE2oynq1Ib2EoMoXeMMpaQ_gZU_coQnSA'}} // Replace YOUR_API_KEY with your actual Google Maps API key
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default Map;



