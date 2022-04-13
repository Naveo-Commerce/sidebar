import { styled } from '@mui/material/styles'
import { Theme } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import MuiDrawer from '@mui/material/Drawer'
import { CSSObject } from '@emotion/react'

const drawerWidth = '264px'

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(2)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(2)} + 1px)`,
  },
})

export const DrawerHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isSidebarOpen',
})<{ isSidebarOpen?: boolean }>(({ isSidebarOpen, theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: isSidebarOpen ? '100%' : '10px',
  paddingBottom: theme.spacing(4),
  flexShrink: 0,
  img: { width: isSidebarOpen ? '30px' : '20px' },
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

export const SidebarListItem = styled('li')`
  text-decoration: none;
`

export const ListItemText = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>(({ isSelected, theme }) => ({
  borderRadius: '5px',
  margin: '0',
  outline: 'none',
  padding: theme.spacing(1),
  textDecoration: 'none',
  width: '100%',
  display: 'block',
  color: theme.colors.white,
  backgroundColor: isSelected ? theme.colors.blue : 'transparent',
}))

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  backgroundColor: theme.colors.black,
  padding: theme.spacing(2),
  [theme.breakpoints.between('xs', 'sm')]: {
    width: open ? '100%' : theme.spacing(4),
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': { ...openedMixin(theme) },
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': { ...closedMixin(theme) },
  }),
  '.MuiDrawer-paper': {
    backgroundColor: theme.colors.black,
    padding: theme.spacing(2),
    width: open ? theme.spacing(33) : theme.spacing(5),
    alignItems: open ? 'flex-start' : 'center',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': { width: '5px' },
    '&::-webkit-scrollbar-thumb': {
      width: '5px',
      backgroundColor: theme.colors.lightGray,
      borderRadius: '5px',
      flex: ' 0 0 auto',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: open ? '100%' : theme.spacing(4),
    },
  },
}))
