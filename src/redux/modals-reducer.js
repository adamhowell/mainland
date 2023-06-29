const OPEN_MODAL_MEDIA_LIBRARY = "modals-reducer/OPEN_MODAL_MEDIA_LIBRARY";
const CLOSE_MODAL_MEDIA_LIBRARY = "modals-reducer/CLOSE_MODAL_MEDIA_LIBRARY";
const CLOSE_ALL_MODALS = "modals-reducer/CLOSE_ALL_MODALS";
const OPEN_MODAL_EXPORT = "modals-reducer/OPEN_MODAL_EXPORT";
const CLOSE_MODAL_EXPORT = "modals-reducer/CLOSE_MODAL_EXPORT";
const CLOSE_MODAL_AI = "modals-reducer/CLOSE_MODAL_AI";
const OPEN_MODAL_AI = "modals-reducer/OPEN_MODAL_AI";
const OPEN_MODAL_IMAGE_SOURCE = "modals-reducer/OPEN_MODAL_IMAGE_SOURCE";
const CLOSE_MODAL_IMAGE_SOURCE = "modals-reducer/CLOSE_MODAL_IMAGE_SOURCE";
const OPEN_MODAL_IMPORT = "modals-reducer/OPEN_MODAL_IMPORT";
const CLOSE_MODAL_IMPORT = "modals-reducer/CLOSE_MODAL_IMPORT";

const initialState = {
  data: {},
  isMediaLibrary: false,
  isExport: false,
  isAI: false,
  isImageSource: false,
  isImport: false,
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
      return { ...state, isAI: true, data: action.data };
    }
    case CLOSE_MODAL_AI: {
      return { ...state, isAI: false, data: {} };
    }
    case OPEN_MODAL_IMAGE_SOURCE: {
      return { ...state, isImageSource: true };
    }
    case CLOSE_MODAL_IMAGE_SOURCE: {
      return { ...state, isImageSource: false };
    }
    case OPEN_MODAL_IMPORT: {
      return { ...state, isImport: true };
    }
    case CLOSE_MODAL_IMPORT: {
      return { ...state, isImport: false };
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
      case "imageSource":
        return {
          type: OPEN_MODAL_IMAGE_SOURCE,
          data: data,
        };
      case "import":
        return {
          type: OPEN_MODAL_IMPORT,
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
      case "imageSource":
        return {
          type: CLOSE_MODAL_IMAGE_SOURCE,
        };
      case "import":
        return {
          type: CLOSE_MODAL_IMPORT,
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
