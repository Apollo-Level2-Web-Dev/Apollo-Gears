import { Modal, ModalContent } from "@nextui-org/react";

const CustomModal = ({ children, isOpen, onOpenChange, ...props }: any) => {
  return (
    <div>
      <Modal
        {...props}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>{children}</ModalContent>
      </Modal>
    </div>
  );
};

export default CustomModal;
