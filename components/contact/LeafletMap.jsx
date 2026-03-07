"use client";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixing the missing marker icon issue in Leaflet + Next.js
const customIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #a3e635; width: 16px; height: 16px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 0 15px rgba(163, 230, 53, 0.6);"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

const LeafletMap = () => {
  const position = [26.2389, 73.0243]; // Coordinates for Jodhpur

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      attributionControl={false} 
      scrollWheelZoom={false} 
      style={{ height: '100%', width: '100%', filter: 'grayscale(100%) invert(90%) contrast(110%)' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div className="font-mono text-[10px] font-bold uppercase tracking-tight text-slate-900">
            Jodhpur HQ Node: <span className="text-lime-600">Active</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;