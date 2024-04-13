import { NavLink } from "react-router-dom"
import classNames from "classnames/bind"
import style from "./Menu.module.scss"

const cx = classNames.bind(style)

function MenuItem({ title, to, icon }) {
  return (
    <NavLink className={cx("menu-item")} to={to}>
      {icon}
      <span className={cx("title")}>{title}</span>
    </NavLink>
  )
}

export default MenuItem
