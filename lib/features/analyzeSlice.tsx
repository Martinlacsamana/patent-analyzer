import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import PatentInfo from "@/components/PatentInfo";


export interface Folder {
  name: string;
  date: string,
}

export interface AnalyzeState {
  selectedPatent: PatentInfo,
  patents: Array<PatentInfo>,
  folders: Array<Folder>,
}

// Define the initial state using that type
const initialState: AnalyzeState = {
  selectedPatent: {
    title: "",
    folder: "",
    date: "",
    tags: [""],
    status: "",
    patentId: "",
    url: "",
    problem: "",
    problemKeywords: [],
    solution: "",
    solutionKeywords: [],
    summary: "",
    fulltext: "",
  },
  patents: [
    {
      title: "Microfluidic device for deformable beads enrichment and self-regulated ordering and encapsulation in droplets",
      folder: "Microfluidics",
      date: "",
      tags: ["Microfluidics", "Droplets"],
      status: "Pending",
      patentId: "US20210331174A1",
      url: "/examples/US20210331174A1.pdf",
      problem: "The patent addresses the challenges of achieving robust ordered delivery of deformable beads in microfluidic devices, as well as the difficulty in achieving high percentage singlet encapsulation with a constant pressure source system.",
      problemKeywords: ["microfluidics", "beads", "singlet encapsulation"],
      solution: "The inventors developed a microfluidic device that can reliably achieve high percentage singlet encapsulation with a constant pressure source system. This was achieved through the development of a pinch and reservoir sequence system for beads concentrating and delivery frequency stabilizing, as well as the design of a long funnel to guide and align deformable beads into a single row, and a core design to achieve self-regulated beads in droplets encapsulation within a constant pressure system.",
      solutionKeywords: ["pinch and reservoir", "funnel"],
      summary: "This invention introduces a novel microfluidic device designed to improve the handling and processing of deformable beads in a controlled environment. The device features a series of inlets and microfluidic channels that facilitate the encapsulation of these beads into droplets, a method that is crucial for advancing laboratory assays such as single-cell analyses and other microreactor applications.",
      fulltext: ""
    },
    {
      title: "Method and Apparatus for Image-Based Navigation",
      folder: "Skeletal Navigation",
      date: "",
      tags: ["MapNav", "Surgical"],
      status: "Pending",
      patentId: "US20240024042A1",
      url: "/examples/US20240024042A1.pdf",
      problem: "",
      problemKeywords: [],
      solution: "",
      solutionKeywords: [],
      summary: "",
      fulltext: ""
    },
    {
      title: "Single sided light-actuated microfluidic device with integrated mesh ground",
      folder: "Microfluidics",
      date: "",
      tags: ["Microfluidics", "Optowetting"],
      status: "Active",
      patentId: "US9815056B2",
      url: "/examples/US9815056.pdf",
      problem: "",
      problemKeywords: [],
      solution: "",
      solutionKeywords: [],
      summary: "",
      fulltext: ""
    },
  ],
  folders: [
    {name: "Microfluidics", date: "April 29, 2024"}, 
    {name: "Skeletal Navigation", date: "15:33 PM today"}
  ]
}

export const analyzeSlice = createSlice({
  name: 'analyze',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeFile: (state, action: PayloadAction<PatentInfo>) => {
      state.selectedPatent = action.payload;
    },
    addFolder: (state, action: PayloadAction<Folder>) => {
      state.folders.push(action.payload);
    },
    addPatent: (state) => {
      state.patents.push(state.selectedPatent);
    },
    fillInAnalysis: (state, action: PayloadAction<string>) => {
      const response = action.payload.split(/\r?\n/);
      state.selectedPatent.problem = response[0];
      state.selectedPatent.solution = response[1];
      state.selectedPatent.summary = response[2];
    },
    
  }
})

export const { storeFile, addFolder, addPatent, fillInAnalysis } = analyzeSlice.actions
export const selectedPatent = (state: RootState) => state.analyze.selectedPatent
export const patents = (state: RootState) => state.analyze.patents
export const folders = (state: RootState) => state.analyze.folders
export default analyzeSlice.reducer