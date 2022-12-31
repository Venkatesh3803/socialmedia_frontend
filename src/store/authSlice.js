import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from "react-toastify"

const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "",
  loading: false,
  error: false,
  token: "",
  message: ""
}

export const registerUser = createAsyncThunk("registeruser", async (body) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
})
export const loginUser = createAsyncThunk("loginuser", async (body) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
})

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = localStorage.getItem("user")
    },
    addToken: (state, action) => {
      state.token = localStorage.getItem("token")
    },
    logOut: (state, action) => {
      localStorage.clear()
      state.user = null
      state.token = ""
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.loading = true
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user
      state.message = action.payload.message
      if (action.payload.message === "Registed Sucessfully") {
        toast.success("Registered Sucessfully")
      } else {
        toast.error(action.payload.message)
      }

      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", action.payload.token)
    },
    [registerUser.rejected]: (state, action) => {
      state.error = true
    },


    [loginUser.pending]: (state, action) => {
      state.loading = true
    },
    [loginUser.fulfilled]: (state, action) => {
      
      state.loading = false;
      state.user = action.payload.others
      state.token = action.payload.others.token
      if (action.payload.message === "Login Sucessfully") {
        toast.success("login Sucess",{
          position:"bottom-center"
        })
      } else {
        toast.error(action.payload.message)
      }

      localStorage.setItem("user", JSON.stringify(action.payload.others))
      localStorage.setItem("token", action.payload.others.token)

    },
    [loginUser.rejected]: (state, action) => {
      state.error = true
    }
  }
})


export const { adduser, logOut, addToken } = authSlice.actions

export default authSlice.reducer