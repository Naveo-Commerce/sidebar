import { Route, Routes, Navigate } from 'react-router-dom'
import { ROUTES } from './routes'

const RouteLinks = () => (
  <Routes>
    <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
  </Routes>
)

export default RouteLinks
