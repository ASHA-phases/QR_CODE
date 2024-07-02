import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null;
}

const initialState: FormState = {
  formData: null
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitForm: (state, action: PayloadAction<FormState['formData']>) => {
      state.formData = action.payload;
    }
  }
});

export const { submitForm } = formSlice.actions;
export default formSlice.reducer;