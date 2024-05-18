"use client";

import { Button, Spinner } from "@nextui-org/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export default function ActionSubmitButton({children}:{children:ReactNode}) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      color="primary"
      variant="flat"
     
    >
      {pending ? <Spinner /> : children}
    </Button>
  );
}
