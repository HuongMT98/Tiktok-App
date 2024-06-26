import Button from "../../../components/Button"
import classNames from "classnames/bind"
import style from "./Menu.module.scss"

const cx = classNames.bind(style)

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  })
  return (
    <Button
      dd={true}
      classNames={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.icon}
      {data.title}
      {data.separate}
    </Button>
  )
}

export default MenuItem
