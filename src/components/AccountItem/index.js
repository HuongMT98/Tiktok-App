import classNames from "classnames/bind"
import style from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const cx = classNames.bind(style)

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <img className={cx("avatar")} src={data.avatar} alt={data.full_name} />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </p>
        <p className={cx("username")}>{data.nickname}</p>
      </div>
    </Link>
  )
}

export default AccountItem
