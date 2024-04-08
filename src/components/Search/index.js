import HeadlessTippy from "@tippyjs/react/headless"
import AccountItem from "../../components/AccountItem"
import { Wrapper as PopperWrapper } from "../../components/Popper"
import classNames from "classnames/bind"
import { useEffect, useState, useRef } from "react"

import request from "../../utils/request"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./Search.module.scss"
import { useDebounce } from "../../hooks"
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(style)

function Search() {
  const [searchValue, setSearchValue] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)

  // Tạo một biến nhận 2 tham số value và delay từ hàm useDebounce(value,delay)
  const debounced = useDebounce(searchValue, 500)

  const handleHideResult = () => {
    setShowResult(false)
  }

  const handleChange = (e) => {
    const searchValue = e.target.value
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue)
    }
  }

  const handleSubmit = (e) => {}

  const inputRef = useRef()

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([])
      return
    }
    request
      .get(`users/search`, {
        params: {
          q: debounced,
          type: "less",
        },
      })

      .then((res) => {
        setSearchResult(res.data.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [debounced])

  const handleClear = () => {
    setSearchValue("")
    setSearchResult([])
    inputRef.current.focus()
  }

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Tài Khoản</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          type='text'
          placeholder='Tìm Kiếm'
          spellCheck={false}
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        ></input>

        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}

        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        <button
          className={cx("search-btn")}
          onClick={handleSubmit}
          onMouseDown={(e) => e.preventDefault()}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  )
}

export default Search
