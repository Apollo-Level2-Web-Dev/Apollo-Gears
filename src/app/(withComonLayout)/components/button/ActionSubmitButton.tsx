"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function ActionSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" color="primary" variant="flat" className="mt-3">
      {pending ? "loading..." : "Submit"}
    </Button>
  );
}