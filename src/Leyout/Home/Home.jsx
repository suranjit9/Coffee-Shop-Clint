import { useLoaderData } from "react-router-dom";
import Card from "../../Card/Card";


const Home = () => {
  const coffees = useLoaderData();
  return (
    <div className="w-9/12  mx-auto text-center">
      <h1>Hot Coffee :{coffees.length}</h1>
      <div className="grid grid-cols-2 gap-5 ">
        {
          coffees.map(coffee => <Card
            key={coffee._id}
            coffee={coffee}
          ></Card>)
        } 
      </div>
    </div>
  );
};

export default Home;