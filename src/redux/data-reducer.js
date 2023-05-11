import { htmlToJson } from "../utils";

const SET_CONFIG = "data-reducer/SET_CONFIG";
const SET_DOM = "data-reducer/SET_DOM";
const SET_ERROR = "data-reducer/SET_ERROR";
const SET_SELECTED_SECTION = "data-reducer/SET_SELECTED_SECTION";
const SET_HOVERED_SECTION = "data-reducer/SET_HOVERED_SECTION";
const MOVE_NODE = "data-reducer/MOVE_NODE";
const ADD_TO_DOM = "data-reducer/ADD_TO_DOM";
const REMOVE_NODE = "data-reducer/REMOVE_NODE";
const UPDATE_TEXT = "data-reducer/UPDATE_TEXT";
const SET_HIGHLIGHT = "data-reducer/SET_HIGHLIGHT"

const initialState = {
  config: null,
  dom: [
    {
      id: "C2BOHNi-z",
      tagName: "div",
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
          className: "p-3",
          children: [
            {
              id: "AFxhldq2O2",
              tagName: "span",
              isClosed: true,
              content: "1",
            },
          ],
        },
        {
          id: "UNQNaXsjPl",
          tagName: "div",
          className: "p-3",
          children: [
            {
              id: "IMzpPdaPh8",
              tagName: "span",
              isClosed: true,
              content: "2",
            },
          ],
        },
        {
          id: "FnDTXhKNLM",
          tagName: "div",
          className: "p-3",
          children: [
            {
              id: "LX2vTs_Q7R",
              tagName: "span",
              isClosed: true,
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
  dropHighlight: null,
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
    case MOVE_NODE: {
      return { ...state, dom: action.data };
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
    case REMOVE_NODE: {
      return { ...state, dom: action.data };
    }
    case UPDATE_TEXT: {
      return { ...state, dom: action.data };
    }
    case SET_HIGHLIGHT: {
      return { ...state, dropHighlight: action.data };
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
  moveNode: (data) => ({
    type: MOVE_NODE,
    data: data,
  }),
  addToDom: (data) => ({
    type: ADD_TO_DOM,
    data: data,
  }),
  setHoveredSection: (data) => ({
    type: SET_HOVERED_SECTION,
    data: data,
  }),
  removeNode: (data) => ({
    type: REMOVE_NODE,
    data: data,
  }),
  updateText: (data) => ({
    type: UPDATE_TEXT,
    data: data,
  }),
  setHighlight: (data) => ({
    type: SET_HIGHLIGHT,
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

export const setHighlight = (err) => (dispatch) => {
  dispatch(actions.setHighlight(err));
};

export const moveNode = (dragId, hoverId, node) => (dispatch, getState) => {
  const {
    data: { dom, hoveredSection },
  } = getState();

  let newDom = [];

  console.log(dragId, hoverId, hoveredSection);

  const checkEndReturnNode = (nx) => {
    let newNode = { ...nx };

    if (nx.children) {
      nx.children.forEach((n, i) => {
        n.id === hoverId
          ? newNode.children[i].children.push(hoveredSection)
          : checkEndReturnNode(n);
      });
    }

    return newNode;
  };

  if (
    !checkIfChild(hoveredSection.children, hoverId) &&
    !getNodeById(dom, hoverId)?.isClosed
  ) {
    removeNodeInternal(dom, hoveredSection.id).forEach((ny) => {
      ny.id === hoverId
        ? newDom.push({ ...ny, children: [...ny.children, hoveredSection] })
        : newDom.push(checkEndReturnNode(ny));
    });

    dispatch(actions.moveNode(newDom));
  }
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

export const addToNode = (data, id) => (dispatch, getState) => {
  console.log("ADD");

  let newDom = [];
  const {
    data: { dom },
  } = getState();

  const checkEndReturnNode = (nx) => {
    let newNode = { ...nx };

    if (nx.children) {
      nx.children.forEach((n, i) => {
        n.id === id
          ? newNode.children[i].children.push(data)
          : checkEndReturnNode(n);
      });
    }

    return newNode;
  };

  dom.forEach((ny) => {
    ny.id === id
      ? newDom.push({ ...ny, children: [...ny.children, data] })
      : newDom.push(checkEndReturnNode(ny));
  });

  dispatch(actions.setDom(newDom));
};

export const setConfig = (data) => (dispatch) => {
  dispatch(actions.setConfig(data));
};

export const setSelectedSection = (data) => (dispatch) => {
  dispatch(actions.setSelectedSection(data));
};

export const removeNode = (id) => (dispatch, getState) => {
  const {
    data: { dom },
  } = getState();

  dispatch(actions.removeNode(removeNodeInternal(dom, id)));
};

export const updateText = (id, text) => (dispatch, getState) => {
  let newDom = [];
  const {
    data: { dom },
  } = getState();

  const checkEndReturnNode = (node) => {
    let newNode = { ...node };

    if (node.children) {
      newNode.children = [];

      node.children.forEach((n) => {
        n.id === id
          ? newNode.children.push({ ...n, content: text })
          : newNode.children.push(checkEndReturnNode(n));
      });
    }

    return newNode;
  };

  dom.forEach((node) => {
    node.id === id
      ? newDom.push({ ...node, content: text })
      : newDom.push(checkEndReturnNode(node));
  });

  dispatch(actions.updateText(newDom));
};

const removeNodeInternal = (dom, id) => {
  let newDom = [];

  const checkEndReturnNode = (node) => {
    let newNode = { ...node };
    newNode.children = [];

    if (node.children)
      node.children.forEach((n) => {
        if (n.id !== id) newNode.children.push(checkEndReturnNode(n));
      });

    return newNode;
  };

  dom.forEach((node) => {
    if (node.id !== id) newDom.push(checkEndReturnNode(node));
  });

  return newDom;
};

const checkIfChild = (dom, id) => {
  let isContains = false;

  const checkEndReturnNode = (node) => {
    if (node.children)
      node.children.forEach((n) => {
        n.id !== id ? checkEndReturnNode(n) : (isContains = true);
      });
  };

  dom?.forEach((node) => {
    node.id !== id ? checkEndReturnNode(node) : (isContains = true);
  });

  return isContains;
};

const getNodeById = (dom, id) => {
  let resultNode = null;

  const checkEndReturnNode = (node) => {
    if (node.children)
      node.children.forEach((n) => {
        n.id !== id ? checkEndReturnNode(n) : (resultNode = n);
      });
  };

  dom?.forEach((node) => {
    node.id !== id ? checkEndReturnNode(node) : (resultNode = node);
  });

  return resultNode;
};

export default dataReducer;
