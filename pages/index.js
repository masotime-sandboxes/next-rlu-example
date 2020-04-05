import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal';
import React, { useState } from 'react';
import Head from 'next/head';

export default function Index() {
    const [zoom, setZoom] = useState(13);
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);

    const position = [lat, lng];

    return (
        <>
        <Head>
            <link href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" rel="stylesheet" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossOrigin=""/>
        </Head>
        <Map center={position} zoom={zoom} id="leaflet-map">
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
      </>
    );
}