import React, { useContext , useEffect} from "react";
import { Tooltip, Marker, Popup, TileLayer, MapContainer, LayersControl, LayerGroup, useMap} from 'react-leaflet';
 //import {Icon } from 'leaflet';

import { EssaiContext } from "../../../../EssaisContext";
import * as L from "leaflet";
import { Link } from 'react-router-dom';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import "./styles.scss";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import GtmTab from "../../../../containers/GtmNav";
import { v4 as uuidv4 } from 'uuid';
// import zipUrl from "./limitesCommunes.zip";
// import Shapefile from "./ShapeFile";
// import shp from "shpjs";

    const CarteContent = (props) => {
    const [globalData, setGlonbalData] = useContext(EssaiContext);
    const handleOnClick = (essai) => {
      setGlonbalData({...globalData, 
        selectedEssai: essai})
    }

    const LeafIcon = L.Icon.extend({
      options: {}
    });



     
    //__DÉFINITION DES MARQUEURS POUR LES PRINCIPAUX TYPES D'ESSAIS
    // const blueIcon = new LeafIcon({
    //     iconUrl:
    //         "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    //     }),
    //     greenIcon = new LeafIcon({
    //       iconUrl:
    //         "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
    //     });
    //__DÉFINITION DES MARQUEURS POUR LES PRINCIPAUX TYPES D'ESSAIS
    // const [icon, setIcon] = useState(blueIcon);
    const selectIconBaseOnColorCode = (colorCode) => {
     const icon = new LeafIcon({
        iconUrl:
          `https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${colorCode}&chf=a,s,ee00FFFF`
      });
      return icon
    };

     const position = [18.843913,-71.730198]
  return (
  <div>
    <GtmTab />
    
       <MapContainer 
         className="markercluster-map"
         fullscreenControl={true}
       style={{height:'70vh', width:'100%'}} 
       center={position} 
       zoom={8}
      //  minZoom={7}
       scrollWheelZoom={true}>


      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="CyclOSM - Open Bicycle render">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Esri.DeLorme">
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Esri_WorldImagery ">
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
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
            key={uuidv4()} 
            spiderfyDistanceMultiplier={1}
            showCoverageOnHover={false}
            maxClusterRadius={20}
          >
    {typeEssai.essais.map((essai, key) => (
      <div key={key}>
  
            <Marker
                position={[essai.position.latitude, 
                essai.position.longitude]}
             
                // icon={typeEssai.id == 4 ? blueIcon : greenIcon}
                icon={selectIconBaseOnColorCode(typeEssai.codeCouleur)}
                >
              <Popup 
                  position={[essai.position.latitude, essai.position.longitude]}
                  >
              <div>
                      <h5><strong>Résultat de l'essai: {essai.id}</strong></h5>
                      <ul>
                          <li><strong>Type d'essai:</strong> {typeEssai.nom}</li>
                          <li>
                          <details>
                            <summary><strong>Institution:</strong>{essai.institution.nom} ({essai.institution.sigle})</summary>
                            <ul>
                              <li>Email : {essai.institution.email}</li>
                              <li>Téléphone : {essai.institution.telephone1}</li>
                              <li>Adresse : {essai.institution.adresse}</li>
                              <li>À propos : {essai.institution.description}</li>
                            </ul>
                          </details>
                          </li>
                          <li><strong>Latitude:</strong> {essai.position.latitude}</li>
                          <li><strong>Longitude:</strong> {essai.position.longitude}</li>
                          <li><strong>Altitude:</strong> {essai.position.altitude}</li>
                          {/* <li><strong>Méthode:</strong> ...</li> */}
                          {/* <li><strong>Résultat: </strong><a href={essai.fichier.lien}>Voir document</a></li> */}
                          <li><strong>Date de réalisation:</strong> {essai.dateRealisation}</li>
                          <li onClick={() => handleOnClick(props.essai)}><Link 
                          to={`/pdf/${essai.fichier.id}`} 
                          >Résultats
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


  </MapContainer>
  </div>
   
  )
}

export default CarteContent;
