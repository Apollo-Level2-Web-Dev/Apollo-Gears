import { Modal, ModalContent } from "@nextui-org/react";

export default function CarsModal({ isOpen, onOpenChange, children }: any) {
  return (
    <>
      <Modal
      size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>{children}</ModalContent>
      </Modal>
    </>
  );
}
