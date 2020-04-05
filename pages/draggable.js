import React, { useState, useRef } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal';
import Head from 'next/head';

export default function DraggableExample() {
    const [center, setCenter] = React.useState({ lat: 51.505, lng: -0.09 });
    const [marker, setMarker] = React.useState({ lat: 51.505, lng: -0.09 });
    const [zoom, setZoom] = React.useState(13);
    const [draggable, setDraggable] = React.useState(true);

    const refMarker = useRef(null);

    const toggleDraggable = () => setDraggable(!draggable);
    const updatePosition = () => {
        const marker = refMarker.current;
        if (marker) {
            setMarker(marker.leafletElement.getLatLng());
        }
    };

    const position = [center.lat, center.lng];
    const markerPosition = [marker.lat, marker.lng];

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
        <Marker
          draggable={draggable}
          onDragend={updatePosition}
          position={markerPosition}
          ref={refMarker}>
          <Popup minWidth={90}>
            <span onClick={toggleDraggable}>
              {`${draggable ? 'DRAG MARKER' : 'MARKER FIXED'} [${marker.lat}, ${marker.lng}]`}
            </span>
          </Popup>
        </Marker>
      </Map>
    </>
    );
}