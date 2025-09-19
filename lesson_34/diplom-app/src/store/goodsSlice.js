import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:3000";
const initialState = {
  goodsData: [],
  status: null,
  error: null,
};

const errorHandler = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
  console.error("rejected: ", action.payload);
};

const loadingHandler = (state, action) => {
  state.goodsData = action.payload;
  state.status = "loading";
  state.error = null;
};

const successHandler = (state, action) => {
  state.goodsData = action.payload;
  state.status = "success";
  state.error = null;
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.fulfilled, successHandler)
      .addCase(fetchGoods.pending, loadingHandler)
      .addCase(fetchGoods.rejected, errorHandler)
      .addCase(addGoods.fulfilled, successHandler)
      .addCase(addGoods.pending, loadingHandler)
      .addCase(addGoods.rejected, errorHandler)
      .addCase(editGoods.fulfilled, successHandler)
      .addCase(editGoods.pending, loadingHandler)
      .addCase(editGoods.rejected, errorHandler)
      .addCase(deleteGoods.fulfilled, successHandler)
      .addCase(deleteGoods.pending, loadingHandler)
      .addCase(deleteGoods.rejected, errorHandler);
  },
  selectors: {
    selectGoods: (state) => state.goodsData,
    requestStatus: (state) => state.status,
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

export const addGoods = createAsyncThunk(
  "goods/addGoods",
  async (
    { category, request },
    { signal, rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await fetch(`${URL}/${category}`, {
        method: "POST",
        body: request,
        headers: {
          "Content-type": "application/json",
        },
        signal,
      });

      if (!response.ok) {
        return rejectWithValue(response.status);
      }

      return fulfillWithValue();
    } catch (error) {
      return rejectWithValue(error);
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

export const editGoods = createAsyncThunk(
  "goods/editGoods",
  async (
    { category, request, goodId },
    { signal, rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await fetch(`${URL}/${category}/${goodId}`, {
        method: "PUT",
        body: request,
        headers: {
          "Content-type": "application/json",
        },
        signal,
      });
      if (!response.ok) {
        return rejectWithValue(response.status);
      }
      return fulfillWithValue();
    } catch (error) {
      return rejectWithValue(error);
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

export const deleteGoods = createAsyncThunk(
  "goods/deleteGoods",
  async (
    { category, goodId },
    { signal, rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await fetch(`${URL}${category}/${goodId}`, {
        method: "DELETE",
        signal,
      });

      if (!response.ok) {
        return rejectWithValue(response.status);
      }
      return fulfillWithValue();
    } catch (error) {
      return rejectWithValue(error);
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

export const { selectGoods, requestStatus } = goodsSlice.selectors;

export default goodsSlice.reducer;
