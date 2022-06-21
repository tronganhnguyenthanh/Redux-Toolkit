import React from "react"
import ListPosts from "../components/ListPosts"
import {Routes, Route} from "react-router-dom"
import ViewPost from "../components/ViewPost"
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListPosts/>}/>
        <Route path="/post/:id" element={<ViewPost/>}/>
      </Routes>
    </div>
  )
}

export default App
