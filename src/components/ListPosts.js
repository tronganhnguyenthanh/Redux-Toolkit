import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getPosts} from "../slice/postSlices"
import FilterPhoto from "./FilterPost"
import {useNavigate} from "react-router-dom"
const ListPosts = () => {
  const {posts} = useSelector(state => state.post)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
   dispatch(getPosts())
  },[dispatch])
  const viewPage = (id) => {
    navigate(`/post/${id}`)
  }
  return (
   <div className="container">
     <h1 className="text-center text-primary">List Posts</h1>
     <FilterPhoto/>
     <table className="table table-bordered mt-2">
         <thead>
           <tr>
             <th className="text-center">Title</th>
             <th className="text-center">Body</th>
             <th className="text-center">Action</th>
           </tr>
         </thead>
         <tbody>
           {posts.length > 0 && posts?.map((i, index) => {
             return(
              <tr key={index}>
                <td className="text-center text-nowrap align-middle">{i.title}</td>
                <td className="text-center">{i.body}</td>
                <td className="align-middle">
                  <button className="btn btn-primary" onClick={() => viewPage(i.id)}>Detail</button>
                </td>
              </tr>
             )
            })
           }
         </tbody>
      </table>
     </div>
  )
}

export default ListPosts