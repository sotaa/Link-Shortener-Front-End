export const ToChartData = (data: any) => {
  const convertedData = [];
  for(var key in data) {
    convertedData.push({name: key , y: data[key]});
  }
  return convertedData
}
