"use client";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { signUpUser } from "../actions/auth";

export default function SignUpForm() {
  const router = useRouter();
  const [state, formAction] = useFormState(signUpUser, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success("successfully signUp", { id: 1, duration: 2000 });
      router.push("/login");
    }
    if (state && !state?.success) {
      console.log(state);
      toast.error(state?.message, { id: 1, duration: 2000 });
    }
  }, [router, state]);

  return (
    <div>
      <form action={formAction}>
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
        <div className="flex justify-end ">
          <Button type="submit" color="primary" variant="flat" className="mt-3">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
