import React, { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {useParams, useNavigate} from "react-router-dom"
import {getPostById} from "../slice/postSlices"
const ViewPost = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {posts} = useSelector(state => state.post)
  const goBack = () => {
   navigate("/")
  }
  useEffect(() => {
   dispatch(getPostById(id))
  },[id, dispatch])
  return (
   <div className="container">
     <h1 className="text-center text-primary">View post</h1>
     <div className="card">
       <h3 className="text-center">{posts?.title}</h3>
       <p className="text-center">{posts?.body}</p>
     </div>
     <button className="btn btn-primary mt-1" onClick={goBack}>Back</button>
   </div>
  )
}

export default ViewPost