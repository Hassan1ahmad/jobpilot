import Catagory from "@/components/Catagory";
import Home from "@/components/Home";
import Papular from "@/components/Papular";
import Vacancies from "@/components/Vacancies";

export default function Homepage() {
  return (
    <div className="">
    
     <Home/>
      <Vacancies/>
    <Papular/>
     <Catagory/>
    </div>
  );
}
