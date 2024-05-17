"use client";
import { Button, Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function ActionSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? <Spinner></Spinner> : "submit"}
    </Button>
  );
}
