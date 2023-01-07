import Box from "components/Box";
import Modal from "./Modal";
import { useState } from "react";

const ModalExamples = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          Modal Body
        </Modal>
      )}
    </Box>
  );
};

export default ModalExamples;
