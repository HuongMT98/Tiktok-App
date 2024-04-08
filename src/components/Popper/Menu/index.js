import Tippy from "@tippyjs/react"
import classNames from "classnames/bind"
import MenuItem from "./MenuItems"
import { Wrapper as PopperWrapper } from "../../../components/Popper"
import style from "./Menu.module.scss"
import Header from "../../Layout/DefaultLayout/Header/Header"
import { useState } from "react"

const cx = classNames.bind(style)

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }])
  const current = history[history.length - 1]

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children])
            }
          }}
        />
      )
    })
  }

  return (
    <Tippy
      interactive
      hideOnClick={false}
      animation={false}
      delay={[0, 500]}
      placement='top-end'
      render={(attrs) => (
        <div className={cx("content")} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title={"Language"}
                onBack={() =>
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  )
}

export default Menu
