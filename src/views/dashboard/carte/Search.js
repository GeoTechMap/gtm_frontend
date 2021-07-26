import React ,{useContext} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {
  CButton,
  CCol,
  CInputGroup,
  CInputGroupAppend,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { SearchTextField } from './SearchTextField';
import { EssaiContext } from "../../../EssaisContext";
import { FaSync } from "react-icons/fa";

const Search = () => {
  const [globalData, setGlobalData] = useContext(EssaiContext);

  const initVal ={
    searchContent: ''
  }
  const validate = Yup.object({
    searchContent: Yup.string()
    .max(45,"Maximum 45 caractères")
          
  })

  const reset = () => {
    window.location.reload();
    // fetch('${process.env.REACT_APP_API_URL}/api/type_essais')
    // .then((response) => response.json())
    // .then((json) => setGlobalData({...globalData,
    //   essais:json}
    //   )); 
  }
  return (
    <Formik
    initialValues = {
      initVal
    }
    enableReinitialize
    validationSchema= {validate}
    onSubmit={values => {
    //  console.log(values)
      if(values.searchContent.length > 0){
        fetch(`${process.env.REACT_APP_API_URL}/api/essais/search?mot_cle=${values.searchContent.toLowerCase()}`)
          .then((response) => response.json())
          .then((json) => setGlobalData({...globalData,
            essais:json}
            )); 
      }else {
        fetch(`${process.env.REACT_APP_API_URL}/api/type_essais`)
        .then((response) => response.json())
        .then((json) => setGlobalData({...globalData,
          essais:json}
          )); 
      }



    }}
  >
       { formik => (

       <Form>

          <CCol md="12">     
            <CInputGroup className="input-prepend">

              <CInputGroupAppend >
                <SearchTextField  name="searchContent" type="text" placeholder="Ex: Ouest" />
                <div style={{marginTop:20, marginLeft:5}}>
                  <CButton color="dark" variant="outline" type="submit" style={{ height:'35px', width:'35px'}}>
                    <CIcon name="cil-magnifying-glass" />
                  </CButton>
                  <CButton color="dark" variant="outline" 
                  style={{ height:'35px', width:'35px', marginLeft:5}}
                  onClick={()=>{reset()}}
                  >
                    <FaSync />
                  </CButton>
                </div>
              
              </CInputGroupAppend>
              
            </CInputGroup>
          </CCol>

    
      </Form>  
   
      )
      }
      </Formik> 
     
  )
}

export default Search;
