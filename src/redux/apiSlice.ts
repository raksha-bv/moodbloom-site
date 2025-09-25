// redux/apiSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define proper interfaces
interface PredictionRequest {
  text: string;
  structured: number[];
}

interface PredictionResponse {
  probability: number;
  prediction: string;
}

interface ApiState {
  loading: boolean;
  result: PredictionResponse | null;
  error: string | null;
}

const initialState: ApiState = {
  loading: false,
  result: null,
  error: null,
};

// Properly typed async thunk
export const submitSurveyData = createAsyncThunk<
  PredictionResponse,
  PredictionRequest,
  {
    rejectValue: string;
  }
>("api/submitSurveyData", async ({ text, structured }, { rejectWithValue }) => {
  try {
    const response = await fetch("https://mello-api.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        structured,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as PredictionResponse;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to submit survey data"
    );
  }
});

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    clearResult: (state) => {
      state.result = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitSurveyData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        submitSurveyData.fulfilled,
        (state, action: PayloadAction<PredictionResponse>) => {
          state.loading = false;
          state.result = action.payload;
          state.error = null;
        }
      )
      .addCase(submitSurveyData.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "An error occurred";
        state.result = null;
      });
  },
});

export const { clearResult, clearError } = apiSlice.actions;
export default apiSlice.reducer;
