import UI from '../component/UI'
import User from '../pages/User'
const routeConfig = [
  {
    path: '/',
    element: <UI />,
    children: [{ path: '/user', element: <User /> }],
  },
]

export default routeConfig
