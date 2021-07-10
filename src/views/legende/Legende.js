import React, { useState,useContext } from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable';
import Icon from 'react';
import { EssaiContext } from "../../EssaisContext";

const Legende = () => {
  const [globalData, setGlonbalData] = useContext(EssaiContext);
  const [active, setActive] = useState(0)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
         <ul>
         {globalData.essais.map((typeEssai, key) => (
            <li>
           <img height={20}
           alt={`icone du type d\'essai`}
           src={`https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${typeEssai.codeCouleur}&chf=a,s,ee00FFFF`}/>
           _________: {typeEssai.nom} ({typeEssai.description})
           </li>
         ))}
          
         </ul>
      </CCol>
    </CRow>
  )
}

export default Legende
