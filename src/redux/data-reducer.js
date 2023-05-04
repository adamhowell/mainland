import update from "immutability-helper";
import shortid from "shortid";
import parse from "html-react-parser";
import { htmlToJson } from "../utils";

const SET_CONFIG = "data-reducer/SET_CONFIG";
const SET_DOM = "data-reducer/SET_DOM";
const SET_ERROR = "data-reducer/SET_ERROR";
const SET_SELECTED_SECTION = "data-reducer/SET_SELECTED_SECTION";
const SET_HOVERED_SECTION = "data-reducer/SET_HOVERED_SECTION";
const MOVE_DOM = "data-reducer/MOVE_DOM";
const ADD_TO_DOM = "modals-reducer/ADD_TO_DOM";

const initialState = {
  config: null,
  dom: [
    {
      id: "C2BOHNi-z",
      tagName: "div",
      children: [
        {
          id: "sEBbIsYtmc",
          tagName: "span",
          content: "div",
        },
      ],
      className: "ml-div",
      position: 1,
    },
    {
      id: "i0g1N0-f3",
      tagName: "section",
      children: [],
      className: "ml-section",
      position: 0,
    },
    {
      id: "WA0tV0TP4",
      tagName: "div",
      children: [
        {
          id: "lCWQLK7tX0",
          tagName: "div",
          children: [
            {
              id: "AFxhldq2O2",
              tagName: "span",
              content: "1",
            },
          ],
        },
        {
          id: "UNQNaXsjPl",
          tagName: "div",
          children: [
            {
              id: "IMzpPdaPh8",
              tagName: "span",
              content: "2",
            },
          ],
        },
        {
          id: "FnDTXhKNLM",
          tagName: "div",
          children: [
            {
              id: "LX2vTs_Q7R",
              tagName: "span",
              content: "3",
            },
          ],
        },
      ],
      className: "grid gap-x-4 gap-y-4 grid-cols-3",
      position: 2,
    },
  ],
  selectedSection: null,
  hoveredSection: null,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIG: {
      return { ...state, config: action.data };
    }
    case SET_DOM: {
      return { ...state, dom: action.data };
    }
    case MOVE_DOM: {
      return {
        ...state,
        dom: update([...state.dom], {
          $splice: [
            [action.data.dragIndex, 1],
            [action.data.hoverIndex, 0, state.dom[action.data.dragIndex]],
          ],
        }),
      };
    }
    case ADD_TO_DOM: {
      return {
        ...state,
        dom: [...state.dom, { ...action.data, position: state.dom.length }],
      };
    }
    case SET_SELECTED_SECTION: {
      return { ...state, selectedSection: action.data };
    }
    case SET_ERROR: {
      return { ...state, error: action.data };
    }
    case SET_HOVERED_SECTION: {
      return { ...state, hoveredSection: action.data };
    }
    default:
      return state;
  }
};

const actions = {
  setConfig: (data) => ({
    type: SET_CONFIG,
    data: data,
  }),
  setDom: (data) => ({
    type: SET_DOM,
    data: data,
  }),
  setSelectedSection: (data) => ({
    type: SET_SELECTED_SECTION,
    data: data,
  }),
  moveDom: (dragIndex, hoverIndex) => ({
    type: MOVE_DOM,
    data: { dragIndex: dragIndex, hoverIndex: hoverIndex },
  }),
  addToDom: (data) => ({
    type: ADD_TO_DOM,
    data: data,
  }),
  setHoveredSection: (data) => ({
    type: SET_HOVERED_SECTION,
    data: data,
  }),
  setError: (data) => ({
    type: SET_ERROR,
    data: data,
  }),
};

export const setError = (err) => (dispatch) => {
  dispatch(actions.setError(err));
};

export const moveDom = (dragIndex, hoverIndex) => (dispatch) => {
  dispatch(actions.moveDom(dragIndex, hoverIndex));
};

export const setDom = (data) => (dispatch) => {
  dispatch(actions.setDom(data));
};

export const setHoveredSection = (data) => (dispatch) => {
  dispatch(actions.setHoveredSection(data));
};

export const addToDom = (data) => (dispatch) => {
  const doc = new DOMParser().parseFromString(data.content, "text/xml");

  dispatch(actions.addToDom(htmlToJson(doc.firstChild, data.attributes)));
};

export const setConfig = (data) => (dispatch) => {
  dispatch(actions.setConfig(data));
};

export const setSelectedSection = (data) => (dispatch) => {
  dispatch(actions.setSelectedSection(data));
};

export default dataReducer;
