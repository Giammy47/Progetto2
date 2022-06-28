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

const Students = () => {
  const [validated, setValidated] = useState(false)
  const [students, setStudents] = useState([])
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  useEffect(() => {
    axios.get('https://62aae044371180affbdc214a.mockapi.io/Employees').then((res) => {
      setStudents(res.data)
    })
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>{'Students'}</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Surname</CTableHeaderCell>
                    <CTableHeaderCell>Fiscal Code</CTableHeaderCell>
                    <CTableHeaderCell>Email</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {students.map((item, index) => (
                    <CTableRow v-for="item in students" key={index}>
                      <CTableDataCell className="text-center">{item.id}</CTableDataCell>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>{item.surname}</CTableDataCell>
                      <CTableDataCell>{item.fiscalcode}</CTableDataCell>
                      <CTableDataCell>{item.email}</CTableDataCell>
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
            <CCardHeader>{'Create student'}</CCardHeader>
            <CCardBody>
              <CForm
                className="row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <CCol md={6}>
                  <CFormLabel htmlFor="validationCustom01">Name</CFormLabel>
                  <CFormInput type="text" id="validationCustom01" required />
                  <CFormFeedback valid>Student name</CFormFeedback>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="validationCustom02">Surname</CFormLabel>
                  <CFormInput type="text" id="validationCustom02" required />
                  <CFormFeedback valid>Student surname</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationCustom03">Fiscal Code</CFormLabel>
                  <CFormInput type="text" id="validationCustom03" required />
                  <CFormFeedback valid>Student fiscal code</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationCustom04">Email</CFormLabel>
                  <CFormInput type="email" id="validationCustom04" required />
                  <CFormFeedback valid>Student email</CFormFeedback>
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

export default Students
