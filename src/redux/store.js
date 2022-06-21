import {configureStore} from "@reduxjs/toolkit"
import postReducer from "../slice/postSlices"
const store = configureStore({
  reducer:{
   post:postReducer
  }
})
export default store