"use client";
// import ActionSubmitButton from "@/components/button/ActionSubmitButton";
import { Input } from "@nextui-org/react";
import { createRef, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { loginUser } from "../actions/auth";
import ActionSubmitButton from "../components/button/ActionSubmitButton";

export default function LoginForm() {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(loginUser, null);
  useEffect(() => {
    if (state && state?.success) {
      toast.success(state?.message, { id: 1, duration: 2000 });
      ref.current!.reset();
      window.location.href = "/";
      // router.push("/")
    }
    if (state && !state?.success) {
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  }, [state, ref]);

  return (
    <div>
      <form ref={ref} action={formAction}>
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
        <div className="flex justify-end ">
          <ActionSubmitButton />
        </div>
      </form>
    </div>
  );
}
