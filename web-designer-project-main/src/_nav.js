import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilSpeedometer } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav_tutor = [
  {
    component: CNavItem,
    name: 'Students',
    to: '/students',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Courses',
    to: '/courses',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]
const _nav_student = [
  {
    component: CNavItem,
    name: 'Courses',
    to: '/courses',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]
const _nav_admin = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  ..._nav_tutor,
  {
    component: CNavItem,
    name: 'Companies',
    to: '/companies',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tutors',
    to: '/tutors',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]

export { _nav_tutor, _nav_student, _nav_admin }
