import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Cog } from "lucide-react";
import LoginForm from "./LoginForm";
const LoginPage = () => {
  return (
    <div className=" mt-24 flex justify-center items-center">
      <Card className="w-96 ">
        <CardHeader className="flex justify-center">
          <div className="flex">
            <Cog />
            <p className="font-bold text-inherit px-4">Login</p>
          </div>
        </CardHeader>
        <CardBody>
          <LoginForm></LoginForm>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
