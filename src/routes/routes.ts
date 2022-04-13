import Home from 'pages/Home/Home'
import Profile from 'pages/Profile/Profile'

export enum ROUTES {
  HOME = '/',
  PROFILE = '/PROFILE',
  PRODUCTS = '/PRODUCTS',
}

export const linksArray = [
  {
    key: 'home',
    path: '/',
    name: 'Home',
    element: Home,
  },
  {
    key: 'profile',
    path: '/profile',
    name: 'Profile',
    element: Profile,
  },
]
