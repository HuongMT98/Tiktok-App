import Tippy from "@tippyjs/react"
import classNames from "classnames/bind"
import MenuItem from "./MenuItems"
import { Wrapper as PopperWrapper } from "../../../components/Popper"
import style from "./Menu.module.scss"

const cx = classNames.bind(style)

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />)
  }

  return (
    <Tippy
      interactive
      animation={false}
      delay={[0, 500]}
      placement='top-end'
      render={(attrs) => (
        <div className={cx("content")} tabIndex={-1} {...attrs}>
          <PopperWrapper>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
