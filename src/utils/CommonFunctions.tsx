import { CropData } from "./dataStructs/crop";

/* this function basically is replacing
 * empty values with appropriate base value
 */
const cleanData = (data: CropData): CropData => {
  return {
    country: data.country || "Unknown",
    year: data.year || "0",
    cropName: data.cropName || "Unknown",
    production: data.production || 0,
    yield: data.yield || 0,
    cultivationArea: data.cultivationArea || 0,
  };
};

/* this function basically processes the
 * data and returns a new list containing
 * year, crop name of max production, crop name of min production
 */
export const processMinMax = (
  data: CropData[]
): { year: string; maxCrop: string; minCrop: string }[] => {
  const yearlyData: {
    [key: string]: {
      maxCrop: string;
      minCrop: string;
      maxProduction: number;
      minProduction: number;
    };
  } = {};

  data.forEach((d) => {
    const obj = cleanData(d);
    const { year, cropName, production } = obj;

    if (!yearlyData[year]) {
      yearlyData[year] = {
        maxCrop: cropName,
        minCrop: cropName,
        maxProduction: production,
        minProduction: production,
      };
    } else {
      if (production > yearlyData[year].maxProduction) {
        yearlyData[year].maxProduction = production;
        yearlyData[year].maxCrop = cropName;
      }
      if (production < yearlyData[year].minProduction) {
        yearlyData[year].minProduction = production;
        yearlyData[year].minCrop = cropName;
      }
    }
  });

  return Object.keys(yearlyData).map((year) => ({
    year,
    maxCrop: yearlyData[year].maxCrop,
    minCrop: yearlyData[year].minCrop,
  }));
};

/* this function basically processes the
 * data and returns a new list containing
 * Crop Name, Average Yield, Average Cultivation
 */
export const processAvg = (
  data: CropData[]
): { cropName: string; averageYield: number; averageCultivation: number }[] => {
  const filteredData = data.filter((d) => {
    const year = parseInt(d.year, 10);
    return year >= 1950 && year <= 2020;
  });

  const cropDataMap: {
    [key: string]: {
      totalYield: number;
      totalCultivation: number;
      count: number;
    };
  } = {};

  filteredData.forEach((d) => {
    const obj = cleanData(d);
    const { cropName, yield: cropYield, cultivationArea } = obj;

    if (!cropDataMap[cropName]) {
      cropDataMap[cropName] = {
        totalYield: cropYield,
        totalCultivation: cultivationArea,
        count: 1,
      };
    } else {
      cropDataMap[cropName].totalYield += cropYield;
      cropDataMap[cropName].totalCultivation += cultivationArea;
      cropDataMap[cropName].count += 1;
    }
  });

  return Object.keys(cropDataMap).map((cropName) => ({
    cropName,
    averageYield:
      cropDataMap[cropName].totalYield / cropDataMap[cropName].count,
    averageCultivation:
      cropDataMap[cropName].totalCultivation / cropDataMap[cropName].count,
  }));
};
