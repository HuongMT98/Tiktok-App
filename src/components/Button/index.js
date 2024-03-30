import classNames from "classnames/bind"
import style from "./Button.module.scss"
import { Link } from "react-router-dom"

const cx = classNames.bind(style)

function Button({
  to,
  href,
  children,
  onClick,
  primary,
  white,
  small,
  large,
  dd,
}) {
  let Component = "button"
  const props = {
    onClick,
  }
  if (to) {
    props.to = to
    Component = Link
  } else if (href) {
    props.href = href
    Component = "a"
  }
  const classes = cx("wrapper", { primary, white, small, large, dd, to })

  return (
    <Component className={classes} {...props}>
      <span>{children}</span>
    </Component>
  )
}

export default Button
