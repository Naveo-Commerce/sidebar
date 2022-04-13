import Layout from 'components/Layout/Layout'
import Home from 'pages/Home/Home'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ROUTES } from './routes'

const RouteLinks = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Route>
  </Routes>
)

export default RouteLinks
