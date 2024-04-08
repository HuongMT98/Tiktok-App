import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Search from "../../../Search"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import style from "./Header.module.scss"
import { Link } from "react-router-dom"
import images from "../../../../assets/images"
import Button from "../../../Button"
import Menu from "../../../Popper/Menu"
import routesConfig from "../../../../config/routes"

import {
  faA,
  faBookmark,
  faCircleQuestion,
  faCoins,
  faEllipsisVertical,
  faEnvelopeOpen,
  faGear,
  faKeyboard,
  faLightbulb,
  faMoon,
  faPaperPlane,
  faPlus,
  faSignOut,
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
    to: "/profile",
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
  const currentUser = true

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routesConfig.home} className={cx("logo")}>
          <img src={images.logo} alt='tiktok'></img>
        </Link>

        {/* Kết quả tìm kiếm */}
        <Search />
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
                  {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                  <svg
                    class='css-y48l9g-StyledIcon e1nx07zo1'
                    width='1em'
                    data-e2e=''
                    height='1em'
                    viewBox='0 0 48 48'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z'
                    ></path>
                  </svg>
                </button>
              </Tippy>
              <Tippy content='Hộp thư'>
                <button className={cx("mail-btn")}>
                  {/* <FontAwesomeIcon icon={faEnvelopeOpen} /> */}
                  <svg
                    class='css-1g0p6jv-StyledInboxIcon e18kkhh41'
                    width='32'
                    data-e2e=''
                    height='32'
                    viewBox='0 0 32 32'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z'
                    ></path>
                  </svg>
                </button>
              </Tippy>
              <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                <button className={cx("more-btn")}>
                  <img
                    className={cx("avatar")}
                    src='https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/e7adfca76a7967382d9487ddf513ad22.jpeg?lk3s=a5d48078&x-expires=1712725200&x-signature=bTl5v07vTygusl4LuRt9mehiVCY%3D'
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
