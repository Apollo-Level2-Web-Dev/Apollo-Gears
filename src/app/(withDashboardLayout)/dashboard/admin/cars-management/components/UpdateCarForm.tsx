"use client";
// import ActionSubmitButton from "@/components/button/ActionSubmitButton";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect } from "react";

import ActionSubmitButton from "@/app/(withComonLayout)/components/button/ActionSubmitButton";

import { useFormState } from "react-dom";
import { toast } from "sonner";
import { updateCar } from "../../adminAction/action";

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
  { label: "Hybrid", value: "Hybrid" },
  { label: "Electric", value: "Electric" },
  { label: "Diesel", value: "Diesel" },
  { label: "Petrol", value: "Petrol" },
];
const conditions = [
  { label: "New", value: "New" },
  { label: "Used", value: "Used" },
];

export default function UpdateCarForm({ onClose, data }: any) {
  const [state, formAction] = useFormState(
    updateCar.bind(null, data._id),
    null
  );

  useEffect(() => {
    if (state && state?.success) {
      console.log(state);
      toast.success(state.message, { id: 1, duration: 2000 });
      onClose();
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  }, [state, onClose]);

  return (
    <div className="m-3 ">
      <form className="space-y-3" action={formAction}>
        <Input
          defaultValue={data.name}
          name="name"
          type="text"
          label="Name"
          variant="bordered"
        />
        <Select
          defaultSelectedKeys={[data.brand]}
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
          defaultSelectedKeys={[data.fuelType]}
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
        <Select
          defaultSelectedKeys={[data.condition]}
          name="condition"
          variant="bordered"
          label="condition"
        >
          {conditions.map((condition) => (
            <SelectItem key={condition.value} value={condition.value}>
              {condition.label}
            </SelectItem>
          ))}
        </Select>

        <Input
          defaultValue={data.name}
          name="model"
          type="text"
          label="Model"
          variant="bordered"
        />
        <Input
          defaultValue={data.image}
          name="image"
          type="link"
          label="image"
          variant="bordered"
        />
        <Input
          defaultValue={data.rating}
          name="rating"
          type="number"
          label="rating"
          variant="bordered"
        />
        <Input
          defaultValue={data.passengerCapacity}
          name="passengerCapacity"
          type="number"
          label="passenger Capacity"
          variant="bordered"
        />
        <Input
          defaultValue={data.color}
          name="color"
          type="text"
          label="color"
          variant="bordered"
        />

        <div className="flex justify-end ">
          <ActionSubmitButton>update</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
}
