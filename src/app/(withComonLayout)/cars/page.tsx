import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

const AllCardPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/cars", {
    next: {
      tags: ["cars"],
    },
  });
  const { data } = await res.json();

  return (
    <div>
      <p className="text-center mt-6 mb-14">All Cars</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((item: any) => (
          <Card key={item._id} className="w-full h-[300px] ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {" "}
                rating: {item.rating}
              </p>
              <h4 className="text-black font-medium text-2xl">{item.name}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={item.image}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">{item.brand}.</p>
                <p className="text-black text-tiny">{item.color}</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                rent
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllCardPage;
