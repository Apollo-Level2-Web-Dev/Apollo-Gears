import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { Cog } from "lucide-react";

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
          <form>
            <Input type="email" label="Email" variant="bordered" />
            <Input
              className="mt-3"
              type="password"
              label="Password"
              variant="bordered"
            />
            <div className="flex justify-end ">
              <Button color="primary" variant="flat" className="mt-3">
                Submit
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
