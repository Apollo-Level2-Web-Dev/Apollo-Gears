import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Cog } from "lucide-react";
import SignUpForm from "./signUpForm";

const RegisterPage = () => {
  return (
    <div className=" mt-24 flex justify-center items-center">
      <Card className="w-96 ">
        <CardHeader className="flex justify-center">
          <div className="flex">
            <Cog />
            <p className="font-bold text-inherit px-4">Sign up</p>
          </div>
        </CardHeader>
        <CardBody>
          <SignUpForm></SignUpForm>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;
