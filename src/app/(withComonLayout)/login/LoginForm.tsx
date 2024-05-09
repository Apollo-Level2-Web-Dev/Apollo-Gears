"use client";
import { Button, Input } from "@nextui-org/react";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { loginUser } from "../actions/auth";

export default function LoginForm() {
  const [state, formAction] = useFormState(loginUser, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success("success fully login", { id: 1, duration: 2000 });
      
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  }, [state]);

  return (
    <div>
      <form action={formAction}>
        <Input name="email" type="email" label="Email" variant="bordered" />
        <Input
          className="mt-3"
          name="password"
          type="password"
          label="Password"
          variant="bordered"
        />
        <div className="flex justify-end ">
          <Button type="submit" color="primary" variant="flat" className="mt-3">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
