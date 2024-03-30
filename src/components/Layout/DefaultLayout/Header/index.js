import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Button from "../../../Button"
import { Wrapper as PopperWrapper } from "../../../../components/Popper"
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import Tippy from "@tippyjs/react/headless"
import "tippy.js/dist/tippy.css"
import style from "./Header.module.scss"
import images from "../../../../assets/images"
import AccountItem from "../../../AccountItem"

const cx = classNames.bind(style)

function Header() {
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt='tiktok'></img>
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              type='text'
              placeholder='Tìm kiếm'
              spellCheck={false}
            ></input>

            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button white>
            <FontAwesomeIcon icon={faPlus} />
            Upload
          </Button>
          <Button primary>Đăng nhập</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
