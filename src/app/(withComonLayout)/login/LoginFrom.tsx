"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { loginUser } from "../action/authAction";
import ActionSubmitButton from "../components/submitButton/ActionSubmitButton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginFrom() {
  const router = useRouter()
  const ref = createRef<HTMLFormElement>();
  const [state, fromAction] = useFormState(loginUser, null);
  useEffect(() => {
    if(state&& state?.success){
      toast.success(state?.message)
      ref.current?.reset();
      router.push("/")

    }
    if(state&& !state?.success){
      toast.error(state?.message)
    }
  }, [state,ref]);
  return (
    <div>
      <form ref={ref} action={fromAction}>
        <Input name="email" type="email" label="Email" variant="bordered" />
        <Input
          className="mt-3"
          name="password"
          type="password"
          label="Password"
          variant="bordered"
        />
        <div className="flex justify-end text-primary">
          <Link href="/register">if you dont have account sign Up</Link>
        </div>
        <div className="flex justify-end "><ActionSubmitButton>login</ActionSubmitButton></div>
      </form>
    </div>
  );
}
