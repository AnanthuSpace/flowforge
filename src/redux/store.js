import { configureStore, createSlice } from '@reduxjs/toolkit';

const workflowSlice = createSlice({
  name: 'workflow',
  initialState: {
    nodes: [],
    edges: [],
  },
  reducers: {
    setNodes: (state, action) => {
      state.nodes = action.payload;
    },
    setEdges: (state, action) => {
      state.edges = action.payload;
    },
  },
});

export const { setNodes, setEdges } = workflowSlice.actions;

const store = configureStore({
  reducer: {
    workflow: workflowSlice.reducer,
  },
});

export default store;
