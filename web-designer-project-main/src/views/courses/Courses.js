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

const Courses = () => {
  const [validated, setValidated] = useState(false)
  const [courses, setCourses] = useState([])
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  useEffect(() => {
    axios.get('https://62aae044371180affbdc214a.mockapi.io/corsi').then((res) => {
      setCourses(res.data)
    })
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>{'Courses'}</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Start Date</CTableHeaderCell>
                    <CTableHeaderCell>End Date</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {courses.map((item, index) => (
                    <CTableRow v-for="item in courses" key={index}>
                      <CTableDataCell className="text-center">{item.id}</CTableDataCell>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>{item.startdate}</CTableDataCell>
                      <CTableDataCell>{item.enddate}</CTableDataCell>
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
            <CCardHeader>{'Create course'}</CCardHeader>
            <CCardBody>
              <CForm
                className="row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <CCol md={4}>
                  <CFormLabel htmlFor="validationCustom01">Name</CFormLabel>
                  <CFormInput type="text" id="validationCustom01" required />
                  <CFormFeedback valid>Course name</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationCustom02">Start Date</CFormLabel>
                  <CFormInput type="date" id="validationCustom02" required />
                  <CFormFeedback valid>Course start date</CFormFeedback>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationCustom03">End Date</CFormLabel>
                  <CFormInput type="date" id="validationCustom03" required />
                  <CFormFeedback valid>Course end date</CFormFeedback>
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

export default Courses
