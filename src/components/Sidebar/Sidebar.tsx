import { Box } from '@mui/material'
import React, { useState } from 'react'
import List from '@mui/material/List'
import { ROUTES } from 'routes/routes'
import { useLocation } from 'react-router-dom'
import { DrawerHeader, ListItemText, SidebarListItem, Drawer } from './elements'

const SideBar: React.FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const { pathname } = useLocation()

  return (
    <Drawer
      variant="permanent"
      open={isSidebarOpen}
      anchor="left"
      onClick={toggleSidebar}
    >
      <DrawerHeader>
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} />
      </DrawerHeader>
      {isSidebarOpen && (
        <Box sx={{ width: '100%' }} role="presentation">
          <nav>
            <List sx={{ paddingTop: '10px' }}>
              <SidebarListItem>
                <ListItemText
                  as="div"
                  isSelected={pathname === ROUTES.HOME}
                  to={ROUTES.HOME}
                >
                  Home
                </ListItemText>
              </SidebarListItem>
              {/*  {isSidebarOpen &&
                linksArray.map((item) => {
                  const isSelected = pathname === SIDEBARROUTES[item]

                  return (
                    <SidebarListItem key={SIDEBARROUTES[item]}>
                      <ListItemText
                        isSelected={isSelected}
                        to={SIDEBARROUTES[item]}
                      >
                        {t(item.toLowerCase())}
                      </ListItemText>
                    </SidebarListItem>
                  )
                })} */}
            </List>
          </nav>
        </Box>
      )}
    </Drawer>
  )
}

export default SideBar
