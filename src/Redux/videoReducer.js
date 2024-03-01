import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  topic: ''
}

export const videoReducer = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setTopic: (state, action) => {
      state.topic = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {setData, setTopic} = videoReducer.actions

export default videoReducer.reducer