"use client";
import ActionSubmitButton from "@/app/(withComonLayout)/components/button/ActionSubmitButton";
import {
  Button,
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
import { Edit, Eye, Trash } from "lucide-react";
import React, { useState } from "react";
import CustomModal from "../../../../components/modal/CustomModal";
import { deleteCar } from "../../adminAction/action";
import UpdateCarForm from "./UpdateCarForm";
const columns = [
  { name: "NAME", uid: "name" },
  { name: "Brand", uid: "brand" },
  { name: "Model", uid: "model" },
  { name: "ACTIONS", uid: "actions" },
];

export default function CarsTable({ data }: any) {
  const [selected, setSelected] = useState<any>(null);
  const [action, setAction] = useState("");

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleUpdate = (data: any) => {
    setAction("update");
    onOpen();
    setSelected(data);
  };
  const handleDelete = (id: string) => {
    setAction("delete");
    onOpen();
    setSelected(id);
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
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Eye />
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Edit onClick={() => handleUpdate(data)} />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <Trash onClick={() => handleDelete(data._id)} />
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
      <CustomModal
        size={`${action === "update" ? "3xl" : "xs"}`}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {action === "update" && (
          <div>
            <ModalHeader className="flex flex-col gap-1">Edit car</ModalHeader>
            <UpdateCarForm onClose={onClose} data={selected}></UpdateCarForm>
          </div>
        )}
        {action === "delete" && (
          <div>
            <ModalHeader className="flex flex-col gap-1">
              Delete car
              <div className="flex space-x-4 justify-center items-center mt-4">
                <Button onClick={() => onClose()} color="primary">
                  Cancel
                </Button>
                <form
                  action={async () => {
                    await deleteCar(selected), onClose();
                  }}
                >
                  <ActionSubmitButton>delete</ActionSubmitButton>
                </form>
              </div>
            </ModalHeader>
          </div>
        )}
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
