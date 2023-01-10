import Box from "components/Box";
import Modal from "./Modal";
import ModalTooltip from "./ModalTooltip";
import { useState } from "react";

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
        // id="tooltipID"
        type="button"
        onClick={() => {
          setIsTooltipOpen(true);
        }}
      >
        Open Modal tooltip
      </button>

      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          Modal Body
        </Modal>
      )}

      {isTooltipOpen && (
        <ModalTooltip
          onClose={() => {
            setIsTooltipOpen(false);
          }}
        >
          Modal Tooltip body
        </ModalTooltip>
      )}
    </Box>
  );
};

export default ModalExamples;
