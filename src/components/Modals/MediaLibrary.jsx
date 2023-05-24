import React from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modals-reducer";

const MediaLibrary = () => {
  const { isMediaLibrary } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  return (
    <Modal
      onClose={() => dispatch(closeModal("mediaLibrary"))}
      active={isMediaLibrary}
    >
      Select Image
    </Modal>
  );
};

export default MediaLibrary;
