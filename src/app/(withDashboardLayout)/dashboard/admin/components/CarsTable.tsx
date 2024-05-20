"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon } from "lucide-react";
import React from "react";
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
  console.log(data);
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
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
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
  );
}
