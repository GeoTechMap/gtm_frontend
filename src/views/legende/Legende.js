import React, {useContext } from 'react'
import {
  CCol,
  CRow,
} from '@coreui/react'
import { EssaiContext } from "../../EssaisContext";
import zoom from '../../assets/images/zoom.png';
import fullscreen from '../../assets/images/fullscreen.png';
import layercontrol from '../../assets/images/layercontrol.png';
import layers from '../../assets/images/layers.png';
import unessai from '../../assets/images/unessai.png';
import link from '../../assets/images/link.png';
import search from '../../assets/images/search.png';
import maplist from '../../assets/images/maplist.png';

const Legende = () => {
  const [globalData] = useContext(EssaiContext);

  return (
    <CRow style={{ overflowY: 'scroll',height:'500px',}}>
      <CCol xs="12" md="12" className="mb-4">
         <ul>
         {globalData.essais.map((typeEssai, key) => (
           <div key={key}>
              <details>
                  <summary> <img height={20}
                alt={`icone du type d'essai`}
                src={`https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${typeEssai.codeCouleur}&chf=a,s,ee00FFFF`}/>
                . . . <strong> {typeEssai.nom}</strong></summary>
                  {typeEssai.description}
            </details>
            <br />
           </div>
            
         ))}
         </ul>
         <hr />
         <p><strong>Outils de navigation</strong></p>
         <ul>
           <li>
             <strong>Zoom</strong><br />
             <img src={zoom} width={"20px"} height={"30px"} alt=' zoom'/>
             Utilisez les boutons + ou - pour zoomer ou dézoomer sur la carte. 
             Vous pouvez également utiliser la molette de votre souris pour faire défiler.
           </li>
           <li>
             <strong>Plein écran</strong><br />
             <img src={fullscreen} width={"20px"} height={"20px"}  alt=' fullscreen'/>
             Le mode plein écran vous permet de visualiser la carte qui occupe tout votre écran.
           </li>
         </ul>
         <hr />
         <p><strong>Contrôle des couches</strong></p>
         <ul>
           <li>
             <strong>Galerie de fond de carte & filtrage en fonction des types d'éssais</strong><br />
             <img src={layercontrol} width={"30px"} height={"30px"}  alt='zoom'/>
             Cliquez sur le bouton Liste des couches pour ouvrir le menu Liste des couches 
             et la liste des fonds de carte.
             <img src={layers} width={"200px"} height={"300px"}  alt=' couches'/>
           </li>
         </ul>
         <p><strong>Outils informatifs</strong></p>
         <ul>
           <li>
             <strong>Afficher les informations d'un essai</strong><br />
             <img src={unessai} width={"230px"} height={"200px"}  alt=' essai'/><br />
             Cliquez sur un marqueur dans la carte avec la souris. 
             Un menu contextuel s'affichera avec les informations sur l'essai.
           </li>
           <li>
             <strong>Lien pour accéder à un résultat d'un essai géotechnique</strong><br />
             <img src={link} width={"200px"} height={"40px"}  alt=' lien essai'/><br />
           </li>
           <li>
             <strong>Moteur de recherche</strong><br />
             <img src={search} width={"250px"} height={"70px"}  alt=' moteur de recheche'/><br />
             Entrez un mot clé, puis cliquez sur le bouton contenant la loupe. Pour Réinitialiser
             les résultats, cliquez sur le dernier boutton à droite.
           </li>
           <li>
             <strong>Map VS liste</strong><br />
             <img src={maplist} width={"220px"} height={"50px"}  alt=' liste'/><br />
             Balancer entre le mode de visualisation de la carte ou de la liste.
           </li>
         </ul>
      </CCol>
    </CRow>
  )
}

export default Legende
