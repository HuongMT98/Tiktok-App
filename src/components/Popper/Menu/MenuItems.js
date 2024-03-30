import Button from "../../../components/Button"
import classNames from "classnames/bind"
import style from "./Menu.module.scss"

const cx = classNames.bind(style)

function MenuItem({ data }) {
  return (
    <Button
      dd={true}
      classNames={cx("menu-item")}
      leftIcon={data.icon}
      to={data.to}
    >
      {data.icon}
      {data.title}
    </Button>
  )
}

export default MenuItem
