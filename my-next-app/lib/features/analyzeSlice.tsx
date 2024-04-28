import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

// Define a type for the slice state
export interface AnalyzeState {
  url: string
}

// Define the initial state using that type
const initialState: AnalyzeState = {
  url: ""
}

export const analyzeSlice = createSlice({
  name: 'analyze',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeFileURL: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    }
  }
})

export const { storeFileURL } = analyzeSlice.actions
export const url = (state: RootState) => state.analyze.url
export default analyzeSlice.reducer