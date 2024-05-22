import "./table.css";
import React from "react";
import { Table } from "@mantine/core";
import { CropData } from "../../utils/dataStructs/crop";
import { processAvg } from "../../utils/CommonFunctions";

const CropAveragesTable: React.FC<{ data: CropData[] }> = ({ data }) => {
  // Calculate average yield and cultivation area for each crop
  const processedData = processAvg(data);
  // Create a table with columns: Crop, Avg Yield, Avg Cultivation Area
  return (
    <Table>
      <thead>
        <tr>
          <th className="table-heading">Crop</th>
          <th className="table-heading">
            Average Yield of the Crop between 1950-2020
          </th>
          <th className="table-heading">
            Average Cultivation Area of the Crop between 1950-2020
          </th>
        </tr>
      </thead>
      <tbody>
        {processedData.map((row, index) => (
          <tr key={index}>
            <td className="table-row">{row.cropName}</td>
            <td className="table-row">{row.averageYield.toFixed(3)}</td>
            <td className="table-row">{row.averageCultivation.toFixed(3)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CropAveragesTable;
