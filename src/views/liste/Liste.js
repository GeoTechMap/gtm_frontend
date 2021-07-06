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
import Essais from './Essais';


const Liste = () => {
  const [active, setActive] = useState(0)

  return (
    <Essais />
    // <CRow>
    //   <CCol xs="12" md="12" className="mb-4">
    //      <Essais />
    //   </CCol>
    // </CRow>
  )
}

export default Liste
