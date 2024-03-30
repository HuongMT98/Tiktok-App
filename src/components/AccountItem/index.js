import classNames from "classnames/bind"
import style from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(style)

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/6353513bbb6484a638d6e287f433a4fe~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1711890000&x-signature=4c8cGDUu29KemrqmJJGZd8b9xxQ%3D'
        alt=''
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Hoaaaaaaaaa</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("username")}>aaa</p>
      </div>
    </div>
  )
}

export default AccountItem
