import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Companies = React.lazy(() => import('./views/companies/Companies'))
const Students = React.lazy(() => import('./views/students/Students'))
const Courses = React.lazy(() => import('./views/courses/Courses'))
const Tutors = React.lazy(() => import('./views/tutors/Tutors'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/companies', name: 'Companies', element: Companies },
  { path: '/students', name: 'Students', element: Students },
  { path: '/courses', name: 'Courses', element: Courses },
  { path: '/tutors', name: 'Tutors', element: Tutors },
]

export default routes
