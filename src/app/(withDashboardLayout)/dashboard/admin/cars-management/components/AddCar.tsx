"use client";
import { Button, ModalHeader, useDisclosure } from "@nextui-org/react";
import AddCarForm from "./AddCarFrom";
import CarsModal from "./CarsModal";

export default function AddCar() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <div className="my-3">
      <CarsModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalHeader className="flex flex-col gap-1">Add a car</ModalHeader>
        <AddCarForm onClose={onClose}></AddCarForm>
      </CarsModal>
      <Button variant="faded" onClick={onOpen}>
        add car
      </Button>
    </div>
  );
}
