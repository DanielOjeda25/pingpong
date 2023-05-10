import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapContainer = ({position}) => {
	return (
		<div>
			<MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapContainer;
