import { Button} from "@nextui-org/react";
import NavBar from "../components/ui/Navbar";
import Banner from "@/components/ui/Banner";
import TopRatedCars from "@/components/ui/TopRatedCars";

export default function Home() {
  
  return (
    <main >
      <Banner/>
      <TopRatedCars/>
    </main>
  );
}
