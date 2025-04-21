import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export type WidgetState = {
  cspm: { name: string; isActive: boolean }[];
  cwpp: { name: string; isActive: boolean }[];
  images: { name: string; isActive: boolean }[];
};

let initialState: WidgetState = {
  cspm: [
    { name: "Cloud Accounts", isActive: true },
    { name: "Cloud Account Risk Assessment", isActive: true },
  ],
  cwpp: [
    { name: "Top 5 Namespace Specific alerts", isActive: true },
    { name: "Work Alerts", isActive: true },
  ],
  images: [
    { name: "Image Risk Assessment", isActive: true },
    { name: "Image Security Issues", isActive: true },
  ],
};
const loadState = (): WidgetState => {
  try {
    const serializedState = localStorage.getItem("widgetData");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch {
    return initialState;
  }
};

initialState = loadState();

export const widgetDataSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    updateName: (state, actions) => {
      const { type, oldName, newName } = actions.payload as {
        type: keyof WidgetState;
        oldName: string;
        newName: string;
      };

      const index = state[type].findIndex(
        (item: { name: string; isActive: boolean }) => item.name === oldName
      );
      if (index !== -1) {
        state[type][index].name = newName;
      }
    },
    updateVisibilty: (state, actions) => {
      const { type, name, value } = actions.payload as {
        type: keyof WidgetState;
        name: string;
        value: boolean;
      };
      const index = state[type].findIndex((el) => el.name == name);

      if (index != -1) {
        state[type][index].isActive = value;
      }
    },

    addNewWidget: (state, actions) => {
      const { type } = actions.payload as {
        type: keyof WidgetState;
      };
      state[type].push({ name: "", isActive: false });
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateName, updateVisibilty, addNewWidget } =
  widgetDataSlice.actions;

export default widgetDataSlice.reducer;
