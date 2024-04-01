import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import HeadlessTippy from "@tippyjs/react/headless"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import style from "./Header.module.scss"

import images from "../../../../assets/images"
import AccountItem from "../../../AccountItem"
import Button from "../../../Button"
import Menu from "../../../Popper/Menu"
import { Wrapper as PopperWrapper } from "../../../../components/Popper"
import {
  faA,
  faBookmark,
  faCircleQuestion,
  faCircleXmark,
  faCoins,
  faEllipsisVertical,
  faEnvelopeOpen,
  faGear,
  faKeyboard,
  faLightbulb,
  faMagnifyingGlass,
  faMoon,
  faPaperPlane,
  faPlus,
  faSignOut,
  faSpinner,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons"

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: "Trung tâm Nhà sáng tạo LIVE",
    to: "https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN",
  },
  {
    icon: <FontAwesomeIcon icon={faA} />,
    title: "Tiếng Việt",
    children: {
      title: "Tiếng Việt",
      data: [
        { code: "vi", title: "Tiếng Việt (Việt Nam)" },
        { code: "en", title: "English" },
        { code: "jp", title: "日本語（日本）" },
        { code: "fr", title: "Français" },
        { code: "es", title: "Español" },
        { code: "ru", title: "Русский (Россия)" },
        { code: "arab", title: "العربية" },
        { code: "de", title: "Deutsch" },
        { code: "kr", title: "한국어 (대한민국)" },
        { code: "cn", title: "简体中文" },
        { code: "it", title: "Italiano" },
        { code: "th", title: "ไทย" },
        { code: "id", title: "Bahasa Indonesia" },
        { code: "tr", title: "Türkçe" },
        { code: "pl", title: "Polski" },
        { code: "hu", title: "Magyar" },
        { code: "ro", title: "Română" },
        { code: "uk", title: "Українська" },
        { code: "hi", title: "हिन्दी" },
        { code: "cnn", title: "中文（香港）" },
        { code: "pt", title: "Português" },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Phím tắt trên bàn phím",
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: "Chế độ tối",
  },
]

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Xem hồ sơ",
  },
  {
    icon: <FontAwesomeIcon icon={faBookmark} />,
    title: "Yêu thích",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Nhận xu",
  },
  {
    icon: <FontAwesomeIcon icon={faVideo} />,
    title: "LIVE Studio",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Cài đặt",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Đăng xuất",
    separate: true,
  },
]

const cx = classNames.bind(style)

function Header() {
  const [searchResult, setSearchResult] = useState([])
  const currentUser = true

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
        <HeadlessTippy
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
        </HeadlessTippy>

        {/* User Login *********************************************************************/}
        <div className={cx("actions")}>
          {currentUser ? (
            // IF currentUser === true thì hiển thị
            <>
              <Button white>
                <FontAwesomeIcon icon={faPlus} />
                Tải lên
              </Button>
              <Tippy content='Tin nhắn' placement='bottom'>
                <button className={cx("mess-btn")}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
              <Tippy content='Hộp thư'>
                <button className={cx("mail-btn")}>
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </button>
              </Tippy>
              <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                <button className={cx("more-btn")}>
                  <img
                    className={cx("avatar")}
                    src='https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/e7adfca76a7967382d9487ddf513ad22.jpeg?lk3s=a5d48078&x-expires=1712131200&x-signature=0yYrmHPUlx%2F98ePeLdLbEZZpjn0%3D'
                    alt=''
                  ></img>
                </button>
              </Menu>
            </>
          ) : (
            // IF currentUser === false thì hiển thị
            <>
              <Button white>
                <FontAwesomeIcon icon={faPlus} />
                Tải lên
              </Button>
              <Button primary>Đăng nhập</Button>
              <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                <button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
