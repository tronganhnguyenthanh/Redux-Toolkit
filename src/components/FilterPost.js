import React, {useRef} from "react"
import {useDispatch} from "react-redux"
import {filterPosts} from "../slice/postSlices"
const FilterPosts = () => {
  const inputRef = useRef("")
  const dispatch = useDispatch()
  const onFilterPost = () => {
   dispatch(filterPosts(inputRef.current.value))
  }
  return (
    <div className="container">
      <input 
        type="text"
        className="form-control"
        placeholder="Search post by title"
        ref={inputRef}
        onKeyUp={onFilterPost}
      />
    </div>
  )
}

export default FilterPosts