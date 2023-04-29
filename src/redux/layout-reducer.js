const SET_ACTIVE_TAB = 'layout-reducer/SET_ACTIVE_TAB'

const initialState = {
  activeTab: "styles"
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return { ...state, activeTab: action.data }
    }
    default:
      return state
  }
};

const actions = {
  setActiveTab: (data) => ({
    type: SET_ACTIVE_TAB,
    data: data
  }),
};

export const setActiveTab = (data) => (dispatch) => {
  dispatch(actions.setActiveTab(data))
};

export default layoutReducer;