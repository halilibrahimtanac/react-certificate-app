export const parseCSV = (csvData) => {
  const lines = csvData.split("\n");
  const parsedData = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].split(",");
    const person = {};
    for (let j = 0; j < line.length; j++) {
      person[j] = line[j];
    }
    parsedData.push(person);
  }

  return parsedData;
};
