"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { signUpUser } from "../action/authAction";
import ActionSubmitButton from "../components/submitButton/ActionSubmitButton";

const SignUpFrom = () => {
  const ref = createRef<HTMLFormElement>();
  const [state, fromAction] = useFormState(signUpUser, null);

  useEffect(() => {
    if (state && state.success) {
      toast.success("successfully sign up");
      ref.current?.reset();
    }
  }, [state, ref]);
  return (
    <div>
      <form ref={ref} action={fromAction}>
        <Input name="name" type="text" label="Name" variant="bordered" />
        <Input
          name="email"
          className="mt-3"
          type="email"
          label="Email"
          variant="bordered"
        />
        <Input
          className="mt-3"
          type="password"
          label="Password"
          name="password"
          variant="bordered"
        />
        <div className="flex justify-end text-primary">
          <Link href="/login">already have account ?</Link>
        </div>
        <div className="flex justify-end "></div>
        <ActionSubmitButton>sign up</ActionSubmitButton>
      </form>
    </div>
  );
};

export default SignUpFrom;
