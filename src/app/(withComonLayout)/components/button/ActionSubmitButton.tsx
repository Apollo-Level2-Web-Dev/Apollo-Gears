"use client";

import { Button, Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function ActionSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      color="primary"
      variant="flat"
      className="mt-3"
    >
      {pending ? <Spinner /> : "Submit"}
    </Button>
  );
}
