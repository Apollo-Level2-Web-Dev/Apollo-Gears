import { useParams, useRouter } from "next/navigation";
import React from "react";

type TProps = {
  params: { id: string };
  searchParams: Record<string, string>;
};

const CarDetailsPage = ({ params, searchParams }: TProps) => {
  return (
    <div>
      Car Number {params.id} & Search Param is {searchParams?.brand}
    </div>
  );
};

export default CarDetailsPage;
