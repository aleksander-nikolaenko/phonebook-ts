import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterValue(_, { payload }: PayloadAction<string>) {
      return payload;
    },
  },
});

export default filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
