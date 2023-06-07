const SET_ACTIVE_TAB = "layout-reducer/SET_ACTIVE_TAB";
const SET_RESPONSIVE_VIEW = "layout-reducer/SET_RESPONSIVE_VIEW";
const SET_IS_PREVIEW = "layout-reducer/SET_IS_PREVIEW";

const initialState = {
  activeTab: "style-manager",
  responsiveView: "sm",
  isPreview: false,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return { ...state, activeTab: action.data };
    }
    case SET_RESPONSIVE_VIEW: {
      return { ...state, responsiveView: action.data };
    }
    case SET_IS_PREVIEW: {
      return { ...state, isPreview: action.data };
    }
    default:
      return state;
  }
};

const actions = {
  setActiveTab: (data) => ({
    type: SET_ACTIVE_TAB,
    data: data,
  }),
  setResponsiveView: (data) => ({
    type: SET_RESPONSIVE_VIEW,
    data: data,
  }),
  setIsPreview: (data) => ({
    type: SET_IS_PREVIEW,
    data: data,
  }),
};

export const setActiveTab = (data) => (dispatch) => {
  dispatch(actions.setActiveTab(data));
};

export const setResponsiveView = (data) => (dispatch) => {
  dispatch(actions.setResponsiveView(data));
};

export const setIsPreview = (data) => (dispatch) => {
  dispatch(actions.setIsPreview(data));
};

export default layoutReducer;
