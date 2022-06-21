import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
// Get post list
const getPosts = createAsyncThunk("posts/getPosts/list", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return res?.data   
})
// Get post by id
const getPostById = createAsyncThunk("posts/getPosts/view", async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res?.data
})
const postSlice = createSlice({
  name:"posts",
  initialState:{
    posts:[]
  },
  reducers:{
    filterPosts:(state, action) => {
      state.posts = state.posts.filter(p => p.title.toLowerCase().includes(action.payload))
    }
  },
  extraReducers:{
   [getPosts.pending]:(state) => {
     state.loading = true
   },
   [getPosts.fulfilled]:(state, action) => {
     state.posts = action.payload
     state.loading = false
   },
   [getPosts.rejected]:(state) => {
     state.loading = false
   },
   [getPostById.pending]:(state) => {
     state.loading = true
   },
   [getPostById.fulfilled]:(state, action) => {
     state.posts = action.payload
     state.loading = false
   },
   [getPostById.rejected]:(state) => {
     state.loading = false
   }
  }
})
export{getPosts, getPostById}
export const {filterPosts} = postSlice.actions
export default postSlice.reducer
