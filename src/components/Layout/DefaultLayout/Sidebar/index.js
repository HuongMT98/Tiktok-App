import classNames from "classnames/bind"
import style from "./Sidebar.module.scss"
import Menu from "./Menu/Menu"
import MenuItem from "./Menu/MenuItem"
import routesConfig from "../../../../config/routes"

const cx = classNames.bind(style)

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title='Dành cho bạn' to={routesConfig.home} icon={{}} />
        <MenuItem title='Đang Follow' to={routesConfig.following} icon={{}} />
        <MenuItem title='Bạn bè' to={routesConfig.friend} icon={{}} />
        <MenuItem title='Khám phá' to={routesConfig.findout} icon={{}} />
        <MenuItem title='LIVE' to={routesConfig.live} icon={{}} />
        <MenuItem title='Hồ sơ' to={routesConfig.profile} icon={{}} />
      </Menu>
    </aside>
  )
}

export default Sidebar
