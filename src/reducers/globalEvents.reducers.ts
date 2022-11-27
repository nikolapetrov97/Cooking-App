export enum SpinnerNames {
  SPINNER_START = "SPINNER_START",
  SPINNER_END = "SPINNER_END",
}

export interface GlobalEventsState {
  pendingTasks: number;
}

const initialState: GlobalEventsState = {
  pendingTasks: 0,
};

export const globalEvents = (state = initialState, action: any) => {
  const newState = { ...state };

  switch (action.type) {
    case SpinnerNames.SPINNER_START:
      newState.pendingTasks += 1;
      return newState;

    case SpinnerNames.SPINNER_END:
      newState.pendingTasks -= 1;
      return newState;
    default:
      return state;
  }
};
