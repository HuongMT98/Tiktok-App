//Layout
import { HeaderOnly } from "../components/Layout"
import routesConfig from "../config/routes"

import Home from "../pages/Home"
import Following from "../pages/Following"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"
import Search from "../pages/Search"
import Friend from "../pages/Friend"
import Findout from "../pages/Findout"
import Live from "../pages/Live"

//! publicRoutes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.friend, component: Friend },
  { path: routesConfig.findout, component: Findout },
  { path: routesConfig.live, component: Live },
]
const PrivateRoutes = []

export { publicRoutes, PrivateRoutes }
