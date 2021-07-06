import React, { useState } from 'react'
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


const About = () => {
  const [active, setActive] = useState(0)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
         <h1>À PROPOS</h1>
         <p>Ce travail s’inscrit dans le cadre du projet Kay Nou Tek financé 
           par l’Ambassade de Suisse en Haïti. L’Unité de Recherche en 
           Géoscience (URGéo) a réalisé application web permettant la mise en 
           ligne gratuite de certaines informations relatives à la géotechnique en Haïti. </p>

           <p>À noter que c'est un outil d'aide à la décision qui ne ramplace pas les consultations 
             auprès des entreprises géotechniques.</p>
      </CCol>
    </CRow>
  )
}

export default About
