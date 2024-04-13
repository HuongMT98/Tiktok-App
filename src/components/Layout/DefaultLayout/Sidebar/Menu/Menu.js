import classNames from "classnames/bind"
import style from "./Menu.module.scss"

const cx = classNames.bind(style)

function Menu({ child }) {
  return <div className={cx("menu")}>{child}</div>
}

export default Menu
