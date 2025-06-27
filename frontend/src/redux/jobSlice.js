import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    singleJob: null,
    searchJobByText: "",
    allAppliedJobs: [],
    searchedQuery: {       // ✅ FIXED HERE
      location: '',
      industry: '',
      salary: ''
    },
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    setsearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    }
  }
});

export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setsearchedQuery,
} = jobSlice.actions;

export default jobSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const jobSlice = createSlice({
//     name: "job",
//     initialState: {
//         allJobs: [],
//         allAdminJobs: [],
//         singleJob: null,
//         searchJobByText: "",
//         allAppliedJobs: [],
//         searchedQuery: "", // fixed here
//     },
//     reducers: {
//         // actions
//         setAllJobs: (state, action) => {
//             state.allJobs = action.payload;
//         },
//         setSingleJob: (state, action) => {
//             state.singleJob = action.payload;
//         },
//         setAllAdminJobs: (state, action) => {
//             state.allAdminJobs = action.payload;
//         },
//         setSearchJobByText: (state, action) => {
//             state.searchJobByText = action.payload;
//         },
//         setAllAppliedJobs: (state, action) => {
//             state.allAppliedJobs = action.payload;
//         },
//         setsearchedQuery: (state, action) => {
//             state.searchedQuery = action.payload;
//         }
//     }
// });

// export const {
//     setAllJobs,
//     setSingleJob,
//     setAllAdminJobs,
//     setSearchJobByText,
//     setAllAppliedJobs,
//     setsearchedQuery,
// } = jobSlice.actions;

// export default jobSlice.reducer;
