import { Box } from '@mui/material'
import React, { useState } from 'react'
import List from '@mui/material/List'
import { linksArray } from 'routes/routes'
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
      onClick={toggleSidebar}>
      <DrawerHeader>
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} />
      </DrawerHeader>
      {isSidebarOpen && (
        <Box sx={{ width: '100%' }} role="presentation">
          <List sx={{ paddingTop: '10px' }}>
            {/* <SidebarListItem>
              <ListItemText

                isSelected={pathname === ROUTES.HOME}
                to={ROUTES.HOME}>
                Home
              </ListItemText>
            </SidebarListItem> */}
            {isSidebarOpen &&
              linksArray.map((item) => {
                const isSelected = pathname === item.path

                return (
                  <SidebarListItem key={item.key}>
                    <ListItemText
                      as="div"
                      isSelected={isSelected}
                      to={item.path}>
                      {item.name}
                    </ListItemText>
                  </SidebarListItem>
                )
              })}
          </List>
        </Box>
      )}
    </Drawer>
  )
}

export default SideBar
