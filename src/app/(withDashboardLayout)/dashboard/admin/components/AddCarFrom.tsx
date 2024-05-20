"use client";
import ActionSubmitButton from "@/app/(withComonLayout)/components/submitButton/ActionSubmitButton";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { addCarAction } from "../adminAction/action";
const brands = [
  { label: "Bmw", value: "Bmw" },
  { label: "Mercedes-Benz", value: "Mercedes-Benz" },
  { label: "Porsche", value: "Porsche" },
  { label: "Lamborghini", value: "Lamborghini" },
  { label: "Audi", value: "Audi" },
  { label: "Tesla", value: "Tesla" },
  { label: "Ford", value: "Ford" },
  { label: "Honda", value: "Honda" },
  { label: "Toyota", value: "Toyota" },
];
const fuelType = [
  { label: "Hybrid", value: "Hybrid" },
  { label: "Octane", value: "Octane" },
  { label: "Electric", value: "Electric" },
  { label: "Diesel", value: "Diesel" },
  { label: "Petrol", value: "Petrol" },
];
const conditions = [
  { label: "New", value: "New" },
  { label: "Used", value: "Used" },
];
export default function AddCarFrom({ onClose }: any) {
  const [state, fromAction] = useFormState(addCarAction, null);

  const ref = createRef<HTMLFormElement>();
  useEffect(() => {
    if (state && state?.success) {
      toast.success(state?.message, { id: 1, duration: 2000 });
      ref.current!.reset();
      onClose();
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  }, [state, ref, onClose]);

  return (
    <div className="m-3 ">
      <form className="space-y-3" ref={ref} action={fromAction}>
        <Input
          required
          name="name"
          type="text"
          label="Name"
          variant="bordered"
        />
        <Select
          required
          name="brand"
          variant="bordered"
          label="Select an Brand"
        >
          {brands.map((brand) => (
            <SelectItem key={brand.value} value={brand.value}>
              {brand.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          required
          name="fuelType"
          variant="bordered"
          label="Select fuel Type"
        >
          {fuelType.map((fuel) => (
            <SelectItem key={fuel.value} value={fuel.value}>
              {fuel.label}
            </SelectItem>
          ))}
        </Select>
        <Select required name="condition" variant="bordered" label="condition">
          {conditions.map((condition) => (
            <SelectItem key={condition.value} value={condition.value}>
              {condition.label}
            </SelectItem>
          ))}
        </Select>

        <Input
          required
          name="model"
          type="text"
          label="Model"
          variant="bordered"
        />
        <Input
          required
          name="image"
          type="link"
          label="image"
          variant="bordered"
        />
        <Input
          required
          name="rating"
          type="number"
          label="rating"
          variant="bordered"
        />
        <Input
          required
          name="passengerCapacity"
          type="number"
          label="passenger Capacity"
          variant="bordered"
        />
        <Input
          required
          name="color"
          type="text"
          label="color"
          variant="bordered"
        />

        <div className="flex justify-end ">
          <ActionSubmitButton>add</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
}
