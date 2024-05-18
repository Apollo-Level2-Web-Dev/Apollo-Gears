"use client";
import CustomModal from "@/app/(withDashboardLayout)/components/modal/CustomModal";
import {
  Chip,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
  useDisclosure,
} from "@nextui-org/react";
import { CarTaxiFront, Eye } from "lucide-react";
import React, { useState } from "react";
import RequestCarForm from "./ReaquestCarFrom";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "Brand", uid: "brand" },
  { name: "Model", uid: "model" },
  { name: "ACTIONS", uid: "actions" },
];

export default function CarsTable({ data }: any) {
  // console.log(data)
  const [carId, setCarId] = useState("");
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const handleCarRequest = (id: any) => {
    onOpen();
    setCarId(id);
  };
  const renderCell = React.useCallback(
    (data: any, columnKey: React.Key) => {
      const cellValue = data[columnKey as any];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: data.image }}
              description={data.brand}
              name={cellValue}
            >
              {data.name}
            </User>
          );
        case "brand":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-400">
                {data.brand}
              </p>
            </div>
          );
        case "color":
          return (
            <Chip
              className="capitalize"
              // color={statusColorMap[user.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Car Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Eye />
                </span>
              </Tooltip>
              <Tooltip content="Request a car">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <CarTaxiFront onClick={() => handleCarRequest(data._id)} />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [onOpen]
  );

  return (
    <div>
      <CustomModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalHeader className="flex flex-col gap-1">Request a car</ModalHeader>
        <RequestCarForm onClose={onClose} carId={carId}></RequestCarForm>
      </CustomModal>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item: any) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
