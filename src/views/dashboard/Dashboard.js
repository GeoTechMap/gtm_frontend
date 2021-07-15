import React from 'react'
import {
  CCol,
  CRow,

} from '@coreui/react'
import Carte from './carte/Carte';

const Dashboard = () => {
  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
         <Carte/>
      </CCol>
    </CRow>
  )
}

export default Dashboard
