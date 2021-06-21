import React ,{useState, useEffect,useContext} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {
  CButton,
  CCol,
  CContainer,
  CInputGroup,
  CInputGroupAppend,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { SearchTextField } from './SearchTextField';
import { CounterContext } from "../../../EssaisContext";


const Search = () => {

  const [searchContent, setSearchContent] = useState(null);
  const [essais, setEssais] = useContext(CounterContext);

  const initVal ={
    searchContent: ''
  }
  const validate = Yup.object({
    searchContent: Yup.string()
    .max(45,"Maximum 45 caractères")
    .required("Champs obligatire"),        
  })
  return (
    <Formik
    initialValues = {
      initVal
    }
    enableReinitialize
    validationSchema= {validate}
    onSubmit={values => {
    //  console.log(values)

      fetch(`http://localhost:8080/api/essais/search?mot_cle=${values.searchContent}`)
        .then((response) => response.json())
        .then((json) => setEssais(json)); 



    }}
  >
       { formik => (

       <Form>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="12">     
            <CInputGroup className="input-prepend">
              {/* <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-magnifying-glass" />
                </CInputGroupText>
              </CInputGroupPrepend> */} 
              <CInputGroupAppend>
              <SearchTextField  name="searchContent" type="text" placeholder="Ex: Ouest" />
                <CButton color="info" type="submit" style={{borderRadius:'30px', height:'35px', width:'35px'}}>
                  <CIcon name="cil-magnifying-glass" />
                </CButton>
              </CInputGroupAppend>
            </CInputGroup>
          </CCol>
        </CRow>
        {/* <hr /> */}
      </CContainer>
      </Form>  
   
      )
      }
      </Formik> 
     
  )
}

export default Search;
