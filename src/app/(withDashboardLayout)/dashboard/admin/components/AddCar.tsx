"use client";
import CustomModal from "@/app/(withDashboardLayout)/components/modal/CustomModal";
import { Button, ModalHeader, useDisclosure } from "@nextui-org/react";
import AddCarFrom from "./AddCarFrom";

const AddCar = () => {
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();
  return (
    <div>
      <CustomModal
        size="3xl"
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        onOpen={onOpen}
      >
        <ModalHeader>add a car</ModalHeader>
        <AddCarFrom onClose={onClose} ></AddCarFrom>
      </CustomModal>
      <Button variant="faded" onClick={onOpen}>
        add car
      </Button>
    </div>
  );
};

export default AddCar;
