import React, { useEffect, useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const Companies = () => {
  const { t } = useTranslation()
  const [validated, setValidated] = useState(false)
  const [companies, setCompanies] = useState([])
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  useEffect(() => {
    axios.get('https://62aae044371180affbdc214a.mockapi.io/organizations').then((res) => {
      setCompanies(res.data)
    })
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>{t('companies')}</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>{t('name')}</CTableHeaderCell>
                    <CTableHeaderCell>{t('addresses')}</CTableHeaderCell>
                    <CTableHeaderCell>{t('contacts')}</CTableHeaderCell>
                    <CTableHeaderCell># {t('students')}</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {companies.map((item, index) => (
                    <CTableRow v-for="item in companies" key={index}>
                      <CTableDataCell className="text-center">{item.id}</CTableDataCell>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>{item.addresses}</CTableDataCell>
                      <CTableDataCell>{item.contacts}</CTableDataCell>
                      <CTableDataCell>{item.ndipendenti}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>{t('createCompany')}</CCardHeader>
            <CCardBody>
              <CForm
                className="row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <CCol md={6}>
                  <CFormLabel htmlFor="validationCustom01">{t('name')}</CFormLabel>
                  <CFormInput type="text" id="validationCustom01" required />
                  <CFormFeedback valid>Company name</CFormFeedback>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="validationCustom02">{t('addresses')}</CFormLabel>
                  <CFormInput type="text" id="validationCustom02" required />
                  <CFormFeedback valid>Company addresses</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationCustom03">{t('contacts')}</CFormLabel>
                  <CFormInput type="text" id="validationCustom03" required />
                  <CFormFeedback valid>Company contacts</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationCustom04"># {t('students')}</CFormLabel>
                  <CFormInput type="number" id="validationCustom04" required />
                  <CFormFeedback valid>Company students</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CFormCheck
                    type="checkbox"
                    id="invalidCheck"
                    label="Agree to terms and conditions"
                    required
                  />
                  <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Submit form
                  </CButton>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Companies
