import Box from '@mui/material/Box'
import SideBar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <Box sx={{ display: 'flex' }}>
    <SideBar />
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
