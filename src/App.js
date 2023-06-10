import CitySelector from "./components/citySelector/citySelector";
import Table from "./components/table/getData";

const App = () => {
  return (
    <div className="py-3">
      <CitySelector />
      <Table />
    </div>
  );
};

export default App;
