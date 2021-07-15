import React from 'react'
import {
  CCol,
  CRow,
} from '@coreui/react'

const About = () => {
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
           <p><strong>Contact</strong></p>
           <p>Vous êtes une institution détennant des données géotechniques et 
             désirant les partager avec le public, contactez-nous (et envoyez-nous
            <a href="/files/formulaire.pdf" target='_blank' > ce formulaire </a> rempli) via:  
             <a href="mailto:kevindubuche@gmail.com"> urgeo@mail.com </a> 
             ou par téléphone au +509 36323548 / +509 45793567.
           </p>
           

      </CCol>
    </CRow>
  )
}

export default About
