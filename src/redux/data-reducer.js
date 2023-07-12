import { htmlToJson, replceSpecialCharacters } from "../utils";

const SET_CONFIG = "data-reducer/SET_CONFIG";
const SET_DOM = "data-reducer/SET_DOM";
const SET_ERROR = "data-reducer/SET_ERROR";
const SET_SELECTED_SECTION = "data-reducer/SET_SELECTED_SECTION";
const SET_HOVERED_SECTION = "data-reducer/SET_HOVERED_SECTION";
const MOVE_NODE = "data-reducer/MOVE_NODE";
const ADD_TO_DOM = "data-reducer/ADD_TO_DOM";
const REPLACE_DOM = "data-reducer/REPLACE_DOM";
const REMOVE_NODE = "data-reducer/REMOVE_NODE";
const UPDATE_TEXT = "data-reducer/UPDATE_TEXT";
const SET_HIGHLIGHT = "data-reducer/SET_HIGHLIGHT";
const SET_ATTRIBUTE = "data-reducer/SET_ATTRIBUTE";
const SET_BACKWARD = "data-reducer/SET_BACKWARD";
const SET_FORWARD = "data-reducer/SET_FORWARD";
const SET_HIGHLIGHT_LAYER = "data-reducer/SET_HIGHLIGHT_LAYER";
const SET_HOVERED_LAYER = "data-reducer/SET_HOVERED_LAYER";
const SET_SELECTED_PARENT = "data-reducer/SET_SELECTED_PARENT";
const SET_SELECTED_CHILD = "data-reducer/SET_SELECTED_CHILD";
const ADD_IMAGE = "data-reducer/ADD_IMAGE";
const SET_ENABLE_REMOVE = "data-reducer/SET_ENABLE_REMOVE";
const SET_IS_SAVING = "data-reducer/SET_IS_SAVING";

const initialState = {
  config: null,
  dom: [
    {
      id: "C2BsOHNi-z",
      tagName: "body",
      label: "Body",
      className: "h-full",
      children: [
        {
          id: "i0gs1N0-f3",
          tagName: "div",
          className: "container mx-auto",
          label: "Container",
          children: [
            {
              id: "C2BOHNi-z",
              tagName: "div",
            },
            {
              id: "i0g1N0-f3",
              tagName: "section",
              children: [],
            },
            {
              id: "WA0tV0TP4",
              tagName: "div",
              className: "grid gap-x-4 gap-y-4 grid-cols-1 md:grid-cols-2",
              label: "Columns 3",
              children: [
                {
                  id: "lCWQLK7tX0",
                  tagName: "div",
                  className: "p-3 lg:mt-0 md:mt-10",
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
            },
          ],
        },
      ],
    },
  ],
  selectedSection: null,
  hoveredSection: null,
  dropHighlight: null,
  error: null,
  past: [],
  future: [],
  dropHighlightLayer: null,
  hoveredLayer: null,
  mediaLibrary: [],
  enableRemove: true,
  isSaving: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIG: {
      return { ...state, config: action.data };
    }
    case SET_DOM: {
      return {
        ...state,
        dom: action.data,
        past: [...state.past, state.dom],
      };
    }
    case MOVE_NODE: {
      return {
        ...state,
        dom: action.data,
        past: [...state.past, state.dom],
      };
    }
    case ADD_TO_DOM: {
      return {
        ...state,
        dom: [
          {
            ...state.dom[0],
            children: [...state.dom[0].children, action.data],
          },
        ],
        past: [...state.past, state.dom],
      };
    }
    case REPLACE_DOM: {
      return {
        ...state,
        dom: [
          {
            ...action.data,
          },
        ],
        past: [...state.past, state.dom],
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
      return {
        ...state,
        dom: action.data,
        past: [...state.past, state.dom],
      };
    }
    case UPDATE_TEXT: {
      return {
        ...state,
        dom: action.data,
        past: [...state.past, state.dom],
      };
    }
    case SET_HIGHLIGHT: {
      return { ...state, dropHighlight: action.data };
    }
    case SET_ATTRIBUTE: {
      return {
        ...state,
        dom: action.data,
        past: [...state.past, state.dom],
      };
    }
    case SET_BACKWARD: {
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, state.past.length - 1);
      return {
        ...state,
        ...(previous
          ? {
              past: newPast,
              dom: previous,
              future: [state.dom, ...state.future],
            }
          : {}),
      };
    }
    case SET_FORWARD: {
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      return {
        ...state,
        ...(next
          ? {
              past: [...state.past, state.dom],
              dom: next,
              future: newFuture,
            }
          : {}),
      };
    }
    case SET_HIGHLIGHT_LAYER: {
      return { ...state, dropHighlightLayer: action.data };
    }
    case SET_HOVERED_LAYER: {
      return { ...state, hoveredLayer: action.data };
    }
    case SET_SELECTED_PARENT: {
      return { ...state, selectedSection: action.data };
    }
    case SET_SELECTED_CHILD: {
      return { ...state, selectedSection: action.data };
    }
    case ADD_IMAGE: {
      return { ...state, mediaLibrary: [...state.mediaLibrary, action.data] };
    }
    case SET_ENABLE_REMOVE: {
      return { ...state, enableRemove: action.data };
    }
    case SET_IS_SAVING: {
      return { ...state, isSaving: action.data };
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
  replaceDom: (data) => ({
    type: REPLACE_DOM,
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
  setAttribute: (data) => ({
    type: SET_ATTRIBUTE,
    data: data,
  }),
  setError: (data) => ({
    type: SET_ERROR,
    data: data,
  }),
  setBackward: (data) => ({
    type: SET_BACKWARD,
    data: data,
  }),
  setForward: (data) => ({
    type: SET_FORWARD,
    data: data,
  }),
  setHighlightLayer: (data) => ({
    type: SET_HIGHLIGHT_LAYER,
    data: data,
  }),
  setHoveredLayer: (data) => ({
    type: SET_HOVERED_LAYER,
    data: data,
  }),
  setSelectedParent: (data) => ({
    type: SET_SELECTED_PARENT,
    data: data,
  }),
  setSelectedChild: (data) => ({
    type: SET_SELECTED_CHILD,
    data: data,
  }),
  addImage: (data) => ({
    type: ADD_IMAGE,
    data: data,
  }),
  setEnableRemove: (data) => ({
    type: SET_ENABLE_REMOVE,
    data: data,
  }),
  setIsSaving: (data) => ({
    type: SET_IS_SAVING,
    data: data,
  }),
};

export const setError = (err) => (dispatch) => {
  dispatch(actions.setError(err));
};

export const setHighlight = (err) => (dispatch) => {
  dispatch(actions.setHighlight(err));
};

export const setHighlightLayer = (err) => (dispatch) => {
  dispatch(actions.setHighlightLayer(err));
};

export const setHoveredLayer = (err) => (dispatch) => {
  dispatch(actions.setHoveredLayer(err));
};

export const moveNode = (dragId, hoverId, type) => (dispatch, getState) => {
  const {
    data: {
      dom,
      hoveredSection,
      hoveredLayer,
      dropHighlight,
      dropHighlightLayer,
    },
  } = getState();

  const section = type === "layer" ? hoveredLayer : hoveredSection;
  const highlight = type === "layer" ? dropHighlightLayer : dropHighlight;
  let newDom = [...removeNodeInternal(dom, section.id)];
  let added = false;

  const checkEndReturnNode = (nx) => {
    let newNode = { ...nx };

    if (nx.children) {
      nx.children.forEach((n, i) => {
        if (n.id === hoverId) {
          if (n.id === highlight?.id) {
            if (highlight.position === "all")
              newNode.children[i].children.push(section);
            if (highlight.position === "top" || highlight.position === "left") {
              const index = newNode.children.findIndex(
                (c) => c.id === highlight.id
              );
              if (!added) newNode.children.splice(index, 0, section).join();
              added = true;
            }

            if (
              highlight.position === "bottom" ||
              highlight.position === "right"
            ) {
              const index = newNode.children.findIndex(
                (c) => c.id === highlight.id
              );
              if (!added) newNode.children.splice(index + 1, 0, section).join();
              added = true;
            }
          }
        } else {
          checkEndReturnNode(n);
        }
      });
    }

    return newNode;
  };

  if (!checkIfChild(section.children, hoverId)) {
    newDom.forEach((ny, i) => {
      if (ny.id === hoverId) {
        if (ny.id === highlight.id) {
          if (highlight.position === "all") {
            newDom[i].children.push(section);
          }
          if (highlight.position === "top" || highlight.position === "left") {
            const index = newDom.findIndex((c) => c.id === highlight.id);
            if (!added) newDom.splice(index, 0, section).join();
            added = true;
          }

          if (
            highlight.position === "bottom" ||
            highlight.position === "right"
          ) {
            const index = newDom.findIndex((c) => c.id === highlight.id);
            if (!added) newDom.splice(index + 1, 0, section).join();
            added = true;
          }
        }
      } else {
        if (!added) newDom[i] = checkEndReturnNode(ny);
      }
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
  const doc = new DOMParser().parseFromString(
    replceSpecialCharacters(data.content),
    "text/xml"
  );

  dispatch(
    actions.addToDom(htmlToJson(doc.firstChild, data.attributes, data.label))
  );
};

export const replaceDom = (data) => (dispatch) => {
  const doc = new DOMParser().parseFromString(
    replceSpecialCharacters(data.content),
    "text/xml"
  );

  dispatch(
    actions.replaceDom(htmlToJson(doc.firstChild, data.attributes, data.label))
  );
};

export const addToNode = (data, id) => (dispatch, getState) => {
  let added = false;

  const {
    data: { dom, dropHighlight },
  } = getState();

  let newDom = [...dom];

  const checkEndReturnNode = (nx) => {
    let newNode = { ...nx };

    if (nx.children) {
      nx.children.forEach((n, i) => {
        if (n.id === id) {
          if (n.id === dropHighlight.id) {
            if (dropHighlight.position === "all")
              newNode.children[i].children
                ? newNode.children[i].children.push(data)
                : (newNode.children[i].children = [data]);
            if (
              dropHighlight.position === "top" ||
              dropHighlight.position === "left"
            ) {
              const index = newNode.children.findIndex(
                (c) => c.id === dropHighlight.id
              );
              if (!added) newNode.children.splice(index, 0, data).join();
              added = true;
            }

            if (
              dropHighlight.position === "bottom" ||
              dropHighlight.position === "right"
            ) {
              const index = newNode.children.findIndex(
                (c) => c.id === dropHighlight.id
              );
              if (!added) newNode.children.splice(index + 1, 0, data).join();
              added = true;
            }
          }
        } else {
          checkEndReturnNode(n);
        }
      });
    }

    return newNode;
  };

  dom.forEach((ny, i) => {
    if (ny.id === id) {
      if (ny.id === dropHighlight.id) {
        if (dropHighlight.position === "all") {
          newDom[i].children
            ? newDom[i].children.push(data)
            : (newDom[i].children = [data]);
        }
        if (
          dropHighlight.position === "top" ||
          dropHighlight.position === "left"
        ) {
          const index = newDom.findIndex((c) => c.id === dropHighlight.id);
          if (!added) newDom.splice(index, 0, data).join();
          added = true;
        }

        if (
          dropHighlight.position === "bottom" ||
          dropHighlight.position === "right"
        ) {
          const index = newDom.findIndex((c) => c.id === dropHighlight.id);
          if (!added) newDom.splice(index + 1, 0, data).join();
          added = true;
        }
      }
    } else {
      if (!added) newDom[i] = checkEndReturnNode(ny);
    }
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
    data: { dom, selectedSection, enableRemove },
  } = getState();

  if (enableRemove)
    dispatch(
      actions.removeNode(removeNodeInternal(dom, id ? id : selectedSection.id))
    );
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

export const setAttribute = (attributeName, value) => (dispatch, getState) => {
  let newDom = [];
  const {
    data: { dom, selectedSection },
  } = getState();
  const id = selectedSection.id;

  const checkEndReturnNode = (node) => {
    let newNode = { ...node };

    if (node.children) {
      newNode.children = [];

      node.children.forEach((n) => {
        n.id === id
          ? newNode.children.push({ ...n, [attributeName]: value })
          : newNode.children.push(checkEndReturnNode(n));
      });
    }

    return newNode;
  };

  dom.forEach((node) => {
    node.id === id
      ? newDom.push({ ...node, [attributeName]: value })
      : newDom.push(checkEndReturnNode(node));
  });

  dispatch(actions.setAttribute(newDom));
};

export const setIsHiden = (id, value) => (dispatch, getState) => {
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
          ? newNode.children.push({ ...n, isHidden: value })
          : newNode.children.push(checkEndReturnNode(n));
      });
    }

    return newNode;
  };

  dom.forEach((node) => {
    node.id === id
      ? newDom.push({ ...node, isHidden: value })
      : newDom.push(checkEndReturnNode(node));
  });

  dispatch(actions.setAttribute(newDom));
};

export const setSelectedParent = (id) => (dispatch, getState) => {
  const {
    data: { dom },
  } = getState();

  const checkNode = (node) => {
    if (node.children) {
      node.children.forEach((n) => {
        if (n.id === id) console.log(node);
        n.id === id ? dispatch(actions.setSelectedParent(node)) : checkNode(n);
      });
    }
  };

  dom.forEach((node) => checkNode(node));
};

export const setSelectedChild = (id) => (dispatch, getState) => {
  const {
    data: { dom },
  } = getState();

  const checkNode = (node) => {
    if (node.children) {
      node.children.forEach((n) => {
        n.id === id
          ? dispatch(
              actions.setSelectedParent(
                n.children?.length > 0 ? n.children[0] : n
              )
            )
          : checkNode(n);
      });
    }
  };

  dom.forEach((node) => checkNode(node));
};

export const save = (data) => (dispatch, getState) => {
  const {
    data: { dom, config },
  } = getState();

  if (config?.apiURL) {
    dispatch(actions.setIsSaving(true));

    fetch(`${config.apiURL}/save`, {
      method: "POST",
      body: JSON.stringify({ dom: dom }),
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch(actions.setIsSaving(false));
      })
      .catch((error) => {
        console.log(error);
      });
  }
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

export const setBackward = (data) => (dispatch) => {
  dispatch(actions.setBackward(data));
};

export const setForward = (data) => (dispatch) => {
  dispatch(actions.setForward(data));
};

export const addImage = (data) => (dispatch) => {
  dispatch(actions.addImage(data));
};

export const setEnableRemove = (data) => (dispatch) => {
  dispatch(actions.setEnableRemove(data));
};

export const setIsSaving = (data) => (dispatch) => {
  dispatch(actions.setIsSaving(data));
};

export default dataReducer;
