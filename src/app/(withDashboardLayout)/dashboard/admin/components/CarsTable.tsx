"use client";
import CustomModal from "@/app/(withDashboardLayout)/components/modal/CustomModal";
import {
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
import { DeleteIcon, EditIcon, EyeIcon } from "lucide-react";
import React, { useState } from "react";
import UpdateCarForm from "./UpdateFrom";
// import {EditIcon} from "./EditIcon";
// import {DeleteIcon} from "./DeleteIcon";
// import {EyeIcon} from "./EyeIcon";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "Brand", uid: "brand" },
  { name: "Model", uid: "model" },
  { name: "ACTIONS", uid: "actions" },
];

export default function CarsTable({ data }: any) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [action, setAction] = useState("");
  const [selectedData, setSelectedData] = useState(null);
  const handleUpdate = (data: any) => {
    setSelectedData(data);
    setAction("update");
    onOpen();
  };
  const handleDelete = (id: any) => {
    setSelectedData(id);
    setAction("delete");
    onOpen();
  };

  const renderCell = React.useCallback((data: any, columnKey: React.Key) => {
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
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon onClick={() => handleUpdate(data)} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => handleDelete(data._id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      <CustomModal
        size={`${action === "update" ? "3xl" : "xs"}`}
        onOpenChange={onOpenChange}
        isOpen={isOpen}
      >
        {action === "update" && (
          <div>
            <ModalHeader className="flex flex-col gap-1">Edit car</ModalHeader>
            <UpdateCarForm
              onClose={onClose}
              data={selectedData}
            ></UpdateCarForm>
          </div>
        )}
        {action === "delete" && (
          <div>
            <ModalHeader className="flex flex-col gap-1">
              delete car
            </ModalHeader>
          </div>
        )}
      </CustomModal>
      <Table className="px-6 mt-3" aria-label="Example table with custom cells">
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
