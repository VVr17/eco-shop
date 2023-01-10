import Box from "components/Box";
import Modal from "./Modal";
import { useState } from "react";
import Backdrop from "../Backdrop";

const ModalExamples = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <Box p="30px" backgroundColor="#EDEAE7">
      <button
        type="button"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open Modal
      </button>

      <button
        // id="tooltipTestID"
        type="button"
        onClick={() => {
          setIsTooltipOpen(true);
        }}
      >
        Open Modal tooltip
      </button>

      {isModalOpen && (
        <Modal
          type="classic"
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          Modal Body
        </Modal>
      )}

      {isTooltipOpen && (
        <Modal
          type="tooltip"
          onClose={() => {
            setIsTooltipOpen(false);
          }}
        >
          Modal Tooltip body
        </Modal>
      )}
    </Box>
  );
};

export default ModalExamples;
