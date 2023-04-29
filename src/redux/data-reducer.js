const SET_CONFIG = 'data-reducer/SET_CONFIG'
const SET_DOM = 'data-reducer/SET_DOM'
const SET_ERROR = 'data-reducer/SET_ERROR'

const initialState = {
  config: null,
  dom: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIG: {
      return { ...state, config: action.data }
    }
    case SET_DOM: {
      return { ...state, dom: action.data }
    }
    case SET_ERROR: {
      return { ...state, error: action.data }
    }
    default:
      return state
  }
};

const actions = {
  setConfig: (data) => ({
    type: SET_CONFIG,
    data: data
  }),
  setDom: (data) => ({
    type: SET_DOM,
    data: data
  }),
  setError: (data) => ({
    type: SET_ERROR,
    data: data
  }),
};

export const setError = (err) => (dispatch) => {
  dispatch(actions.setError(err))
};

export const setDom = (data) => (dispatch) => {
  dispatch(actions.setDom(data))
};

export const setConfig = (data) => (dispatch) => {
  dispatch(actions.setConfig(data))
};

export default dataReducer;