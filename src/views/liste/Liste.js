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

import GtmTab from "../../containers/GtmNav";

const Liste = () => {
  const [active, setActive] = useState(0)

  return (
    <>
      <GtmTab />
      <Essais />
    </>
  )
}

export default Liste
