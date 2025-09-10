import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:3000";
const initialState = {
  goodsData: [
    {
      id: "1",
      title: "1",
      type: "1",
      price: "1",
      quantity: "1",
      description: "1",
    },
  ],
  status: null,
  error: null,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    // addGoods: (state, action) => {
    //   state.goodsData = action.payload;
    //   console.log("goodsData");
    //   // state.id = action.payload.id;
    // },
    // // clearUserInfo: (state) => {
    // //   state = initialState;
    // //   return state;
    // // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.goodsData = action.payload;
        state.status = "success";
        state.error = null;
      })
      .addCase(fetchGoods.pending, (state, action) => {
        state.goodsData = action.payload;
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
  selectors: {
    selectGoods: (state) => state.goodsData,
  },
});

export const fetchGoods = createAsyncThunk(
  "goods/fetctGoods",
  async (urn, { signal, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(URL + urn, { signal });
      if (!response.ok) {
        return rejectWithValue(response.status);
      }
      const data = await response.json();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    conditon: (_, getState) => {
      const { status } = getState().data;
      if (status === "success" || status === "loading") return false;
      return true;
    },
  }
);

export const dataGoods = goodsSlice.reducer;
export const { selectGoods } = goodsSlice.selectors;

// export const { addUserInfo, clearUserInfo } = userSlice.actions;
