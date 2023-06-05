const SET_PREVIOUS_CLASSNAMES = "classes-reducer/SET_PREVIOUS_CLASSNAMES";

const initialState = {
  previousClassNames: [],
};

const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREVIOUS_CLASSNAMES: {
      return { ...state, previousClassNames: action.data };
    }
    default:
      return state;
  }
};

const actions = {
  setPreviousClassNames: (data) => ({
    type: SET_PREVIOUS_CLASSNAMES,
    data: data,
  }),
};

export const setPreviousClassNames = (data) => (dispatch) => {
  dispatch(actions.setPreviousClassNames(data));
};

export default classesReducer;
