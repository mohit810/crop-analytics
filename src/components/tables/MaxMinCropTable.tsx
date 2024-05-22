import "./table.css";
import React from "react";
import { Table } from "@mantine/core";
import { processMinMax } from "../../utils/CommonFunctions";
import { CropData } from "../../utils/dataStructs/crop";

const MaxMinCropTable: React.FC<{ data: CropData[] }> = ({ data }) => {
  // processMinMax func processes data to find max and min production per year
  const processedData = processMinMax(data);
  // Create a table with columns: Year, Max Crop, Min Crop
  return (
    <Table>
      <thead>
        <tr>
          <th className="table-heading">Year</th>
          <th className="table-heading">
            Crop with Maximum Production in that Year
          </th>
          <th className="table-heading">
            Crop with Minimum Production in that Year
          </th>
        </tr>
      </thead>
      <tbody>
        {processedData.map((row, index) => (
          <tr key={index}>
            <td className="table-row">{row.year}</td>
            <td className="table-row">{row.maxCrop}</td>
            <td className="table-row">{row.minCrop}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MaxMinCropTable;
