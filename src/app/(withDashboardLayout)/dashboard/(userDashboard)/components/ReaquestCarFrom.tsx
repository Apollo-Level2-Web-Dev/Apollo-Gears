"use client";
// import ActionSubmitButton from "@/components/button/ActionSubmitButton";
import { Input } from "@nextui-org/react";
import { createRef, useEffect } from "react";

import ActionSubmitButton from "@/app/(withComonLayout)/components/button/ActionSubmitButton";
import { useAuth } from "@/lib/AuthProviders";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { RequestACar } from "../userAction/userAction";

export default function RequestCarForm({ onClose, carId }: any) {
  const { user } = useAuth();
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(
    RequestACar.bind(null, { user: user.id, car: carId }),
    null
  );

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
      <form className="space-y-3" ref={ref} action={formAction}>
        <Input
          required
          name="startingPoint"
          type="text"
          label="starting Point"
          variant="bordered"
        />
        <Input
          required
          name="destination"
          type="text"
          label="destination"
          variant="bordered"
        />

        <div className="flex justify-end ">
          <ActionSubmitButton>Request A car</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
}
