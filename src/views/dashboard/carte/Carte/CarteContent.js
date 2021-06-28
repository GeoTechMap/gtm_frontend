import React, { useContext, useEffect } from "react";
import { Tooltip, Marker, Popup, TileLayer, MapContainer, LayersControl, LayerGroup, useMap, Circle} from 'react-leaflet';
 //import {Icon } from 'leaflet';

import { EssaiContext } from "../../../../EssaisContext";
import * as L from "leaflet";
import { useState } from "react";
import { Link } from 'react-router-dom';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import "./styles.scss";

    const CarteContent = (props) => {
    const [globalData, setGlonbalData] = useContext(EssaiContext);
    const handleOnClick = (essai) => {
      setGlonbalData({...globalData, 
        selectedEssai: essai})
    }

    const LeafIcon = L.Icon.extend({
      options: {}
    });
    const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    }),
    greenIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
    });
    const [icon, setIcon] = useState(blueIcon);
    const changeIconColor = (id) => {
      if (id == 3) {
        setIcon((current) => (current = blueIcon));
        
      } else {
        setIcon((current) => (current = greenIcon));
      }
      return icon
    };


    // const [typeEssais, setTypeEssais] = useContext(CounterContext);
    //const [ activeCrime, setActiveCrime] = React.useState(null);
  //   const fetcher = (...args) => fetch(...args).then(response => response.json());
  //   const url = 
  //   "http://localhost:8080/api/essais"
  //   // "https://data.police.uk/api/crimes-street/all-crime?lat=52.6297296&lng=-1.1315927&date=2019-10"
  //  const { data, error } = useSwr(url, {fetcher });

  //  const essais = data && !error ? data.slice(0,100): [];

    const position = [51.505, -0.09]
  return (
  <div>
    {/* <Search /> */}
       <MapContainer 
         className="markercluster-map"
       style={{height:'70vh', width:'100%'}} 
       center={[19.0558, -73.0513]} 
       zoom={8}
      //  minZoom={7}
       scrollWheelZoom={true}>
    
    {/* <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> */}
    
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer  name="OpenTopoMap">
          <TileLayer
            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer  name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <LayersControl.BaseLayer checked name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
              url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            />
        </LayersControl.BaseLayer>
        </LayersControl.BaseLayer>

{globalData.essais.map((typeEssai, key) => (
  typeEssai.essais !== [] ? (
    < div key={key} >
    {/* Pour chaque type d'essai on crée un group et on ajoute tous les essais y relatif */}
    <LayersControl.Overlay checked name={typeEssai.nom}> 
    <LayerGroup>
    <MarkerClusterGroup
            spiderfyDistanceMultiplier={1}
            showCoverageOnHover={false}
            maxClusterRadius={20}
          >
    {typeEssai.essais.map((essai, key) => (
      <div key={key}>
  
            <Marker
                position={[essai.position.latitude, 
                essai.position.longitude]}
             
                icon={typeEssai.id == 4 ? blueIcon : greenIcon}
                >
              <Popup 
                  position={[essai.position.latitude, essai.position.longitude]}
                  >
              <div>
                      <h5><strong>Résultat de l'essai: {essai.id}</strong></h5>
                      <ul>
                          <li><strong>Nom du projet:</strong> ...</li>
                          <li><strong>Institution:</strong>{essai.institution.nom} ({essai.institution.sigle})</li>
                          <li><strong>Type d'essai:</strong> {typeEssai.nom}</li>
                          <li><strong>Latitude:</strong> {essai.position.latitude}</li>
                          <li><strong>Longitude:</strong> {essai.position.longitude}</li>
                          <li><strong>Altitude:</strong> {essai.position.altitude}</li>
                          <li><strong>Méthode:</strong> ...</li>
                          <li><strong>Résultat: </strong><a href={essai.fichier.lien}>Voir document</a></li>
                          <li><strong>Date de réalisation:</strong> {essai.createdDate}</li>
                          <li onClick={() => handleOnClick(props.essai)}><Link 
                          to={`/pdf/${essai.fichier.id}`} 
                          >Voir PDF
                          </Link></li>
                      </ul>
              </div>
            </Popup>
            <Tooltip>{typeEssai.nom}</Tooltip>
          </Marker>  
     
         
          
      </div>
       ))} 
       </MarkerClusterGroup>
    </LayerGroup>
    
      </LayersControl.Overlay>
  
      </div>
  ): null
       
        
    )
    )} 
     
    </LayersControl>
    {/* <MarkerClusterGroup>
        <Marker position={[49.8397, 24.0297]} >

        <Popup 
                  position={[49.8397, 24.0297]}
                  > <div><h1>hciusdhdpiuhiudhiew</h1></div></Popup>   <Tooltip>lkkkllkkl</Tooltip>
        </Marker>
        <Marker position={[52.2297, 21.0122]} >\ <Popup 
                  position={[49.8397, 24.0297]}
                  ><div><h1>hciusdhdpiuhiudhiew</h1></div></Popup>  <Tooltip>lkkkllkkl</Tooltip>
                  </Marker>
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup> */}
  </MapContainer>
  </div>
   
  )
}

export default CarteContent;
