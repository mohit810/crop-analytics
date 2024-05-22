import React, { useState } from "react";
import "./App.css";
import cropsData from "./utils/dataset.json";
import MaxMinCropTable from "./components/tables/MaxMinCropTable";
import CropAveragesTable from "./components/tables/CropAveragesTable";
import { MantineProvider } from "@mantine/core";
import { CropData } from "./utils/dataStructs/crop";
import Navbar from "./components/Navbar";

function App() {
  const cropDataList: CropData[] = cropsData;
  const [displayMaxMinTable, setDisplayMaxMinTable] = useState(false);
  const [displayAvgTable, setDisplayAvgTable] = useState(false);
  const setFlags = (tableNumber: number) => {
    switch (tableNumber) {
      case 1:
        setDisplayMaxMinTable(!displayMaxMinTable);
        break;
      case 2:
        setDisplayAvgTable(!displayAvgTable);
        break;
    }
  };
  return (
    <div className="App">
      <Navbar
        states={{ displayAvgTable, displayMaxMinTable }}
        setFlags={setFlags}
      />
      <MantineProvider>
        {displayMaxMinTable ? <MaxMinCropTable data={cropDataList} /> : <></>}
        {displayAvgTable ? <CropAveragesTable data={cropDataList} /> : <></>}
      </MantineProvider>
    </div>
  );
}

export default App;
