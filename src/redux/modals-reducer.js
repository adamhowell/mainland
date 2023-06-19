const OPEN_MODAL_MEDIA_LIBRARY = "modals-reducer/OPEN_MODAL_MEDIA_LIBRARY";
const CLOSE_MODAL_MEDIA_LIBRARY = "modals-reducer/CLOSE_MODAL_MEDIA_LIBRARY";
const CLOSE_ALL_MODALS = "modals-reducer/CLOSE_ALL_MODALS";
const OPEN_MODAL_EXPORT = "modals-reducer/OPEN_MODAL_EXPORT";
const CLOSE_MODAL_EXPORT = "modals-reducer/CLOSE_MODAL_EXPORT";
const CLOSE_MODAL_AI = "modals-reducer/CLOSE_MODAL_AI";
const OPEN_MODAL_AI = "modals-reducer/OPEN_MODAL_AI";

const initialState = {
  data: {},
  isMediaLibrary: false,
  isExport: false,
  isAI: false,
  mediaRequestFrom: "",
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_MEDIA_LIBRARY: {
      return { ...state, isMediaLibrary: true, mediaRequestFrom: action.data };
    }
    case CLOSE_MODAL_MEDIA_LIBRARY: {
      return { ...state, isMediaLibrary: false, mediaRequestFrom: "" };
    }
    case OPEN_MODAL_EXPORT: {
      return { ...state, isExport: true };
    }
    case CLOSE_MODAL_EXPORT: {
      return { ...state, isExport: false };
    }
    case OPEN_MODAL_AI: {
      return { ...state, isAI: true };
    }
    case CLOSE_MODAL_AI: {
      return { ...state, isAI: false };
    }
    case CLOSE_ALL_MODALS: {
      return { ...state, ...initialState };
    }
    default:
      return state;
  }
};

const actions = {
  openModal: (modalName, data) => {
    switch (modalName) {
      case "mediaLibrary":
        return {
          type: OPEN_MODAL_MEDIA_LIBRARY,
          data: data,
        };
      case "export":
        return {
          type: OPEN_MODAL_EXPORT,
          data: data,
        };
      case "AI":
        return {
          type: OPEN_MODAL_AI,
          data: data,
        };
    }
  },
  closeModal: (modalName) => {
    switch (modalName) {
      case "mediaLibrary":
        return {
          type: CLOSE_MODAL_MEDIA_LIBRARY,
        };
      case "export":
        return {
          type: CLOSE_MODAL_EXPORT,
        };
      case "AI":
        return {
          type: CLOSE_MODAL_AI,
        };
    }
  },
  closeAllModals: () => ({
    type: CLOSE_ALL_MODALS,
  }),
};

export const openModal = (modalName, data) => (dispatch) => {
  dispatch(actions.openModal(modalName, data));
};

export const closeModal = (modalName) => (dispatch) => {
  dispatch(actions.closeModal(modalName));
};

export const closeAllModals = () => (dispatch) => {
  dispatch(actions.closeAllModals());
};

export default modalsReducer;
