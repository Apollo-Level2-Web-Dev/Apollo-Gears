"use client";
import { Button, ModalHeader, useDisclosure } from "@nextui-org/react";
import CustomModal from "../../../../components/modal/CustomModal";
import AddCarForm from "./AddCarFrom";

export default function AddCar() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <div className="my-3">
      <CustomModal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalHeader className="flex flex-col gap-1">Add a car</ModalHeader>
        <AddCarForm onClose={onClose}></AddCarForm>
      </CustomModal>
      <Button variant="faded" onClick={onOpen}>
        add car
      </Button>
    </div>
  );
}
