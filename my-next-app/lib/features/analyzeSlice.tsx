import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

// Define a type for the slice state
interface PatentInfo {
  title: string;
  tags: Array<string>;
  status: string;
  patentId: string;
  url: string;
}

export interface AnalyzeState {
  url: string,
  examples: Array<PatentInfo>
}

// Define the initial state using that type
const initialState: AnalyzeState = {
  url: "",
  examples: [
    {
      title: "Microfluidic device for deformable beads enrichment and self-regulated ordering and encapsulation in droplets",
      tags: ["Microfluidics", "Droplets"],
      status: "Pending",
      patentId: "US20210331174A1",
      url: "/examples/US20210331174A1.pdf",
    },
    {
      title: "Method and Apparatus for Image-Based Navigation",
      tags: ["MapNav", "Surgical"],
      status: "Pending",
      patentId: "US20240024042A1",
      url: "/examples/US20240024042A1.pdf",
    },
    {
      title: "Single sided light-actuated microfluidic device with integrated mesh ground",
      tags: ["Microfluidics", "Optowetting"],
      status: "Active",
      patentId: "US9815056B2",
      url: "/examples/US9815056.pdf",
    },
  ]
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
export const examples = (state: RootState) => state.analyze.examples
export default analyzeSlice.reducer