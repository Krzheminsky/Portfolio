import React, { Component } from "react";
import "./Map.css"
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import L from 'leaflet';
import map from 'leaflet';
import myMarker from './marker.svg';
import tomato from './tomato.svg';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

export default class Map extends Component {

    state = {
        lat: 49.863,
        lng: 24.025,
        zoom: 9,
        position: null,
    }

    render() {
        const pos = [this.state.lat, this.state.lng]

        const myIcon = L.icon({
            iconUrl: myMarker,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });
        const youIcon = L.icon({
            iconUrl: tomato,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });

        let LocationMarker = () => {
            const map = useMapEvents({
                click(e) {
                    map.locate()
                },
                locationfound: (e) => {
                    this.setState({ position: e.latlng })
                    map.flyTo(e.latlng, this.state.zoom)
                },
            })
            return this.state.position === null ? null : (
                <Marker position={this.state.position} icon={youIcon}>
                    <Popup>You are here</Popup>
                </Marker>
            )
        }

        return (
            <MapContainer center={pos} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={pos} icon={myIcon}>
                    <Popup>
                        I'm here
                    </Popup>
                </Marker>

                <LocationMarker />
            </MapContainer>

        );
    }
}

