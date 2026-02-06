import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.8041, 90.4152];
  const areas = useLoaderData();
  const locationRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = areas.find(area => area.district.toLowerCase().includes(location.toLowerCase()));
    if (district) {
      const coord = [district.latitude, district.longitude];
      e.target.reset()
      return locationRef.current.flyTo(coord, 12);
    }
  }

  return (
    <div className="w-11/12 mx-auto my-15 p-10 bg-white rounded-2xl">
      <h2 className="text-4xl font-bold mb-4">
        We are available in 64 districts
      </h2>
      <div className="join mb-4">
        <form onSubmit={handleSearch}>
         <input className="input join-item" placeholder="Search Area" name="location" />
        </form>
      </div>
      <p className="text-xl font-bold">We deliver almost all over Bangladesh</p>
      {/* map */}
      <div className="h-120 w-full mt-10">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-full w-full"
          ref={locationRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {areas.map((area) => (
            <Marker
              key={area.district}
              position={[area.latitude, area.longitude]}>
              <Popup>
                <strong>{area?.district}</strong> 
                <br />
                Areas: {area?.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
