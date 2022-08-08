import "./../src/styles/App.css";
import { useEffect } from "react";
import { Table } from "./components/Table";
import { Search } from "./components/Search";
import { observer } from "mobx-react-lite";
import table from "./store/table";
import { Upload } from "./components/Uploading/Upload";

const App = observer(() => {


  useEffect(() => {
    table.getData();
  }, []);

  return (
    <div className="App">
      <Search />
      <Table  />

      <Upload/>
    </div>
  );
});

export default App;
