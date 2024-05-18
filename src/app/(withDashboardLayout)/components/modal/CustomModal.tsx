import { Modal, ModalContent } from "@nextui-org/react";

export default function CustomModal({
  isOpen,
  onOpenChange,
  children,
  ...props
}: any) {
  return (
    <>
      <Modal
        {...props}
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
