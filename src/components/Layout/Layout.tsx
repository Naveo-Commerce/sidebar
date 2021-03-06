import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <Box sx={{ display: 'flex' }}>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
      }}>
      <Outlet />
    </Box>
  </Box>
)

export default Layout
