let carList = [
  {
    id: 1,
    modelName: "Audi",
    year: 2018,
    manufacturer: "Audi",
    vin: "1231231231231",
  },
  {
    id: 2,
    modelName: "Venz",
    year: 2017,
    manufacturer: "Venz",
    vin: "1231231231238",
  },
  {
    id: 3,
    modelName: "Venz",
    year: 201,
    manufacturer: "Venz",
    vin: "1231235231231",
  },
];

function fetchCarList(start = 0, size = 10) {
  return carList.slice(start, start + size);
}

function fetchCarDetail(carId) {
  carList.filter((car) => {
    return car.id === carId;
  });
  if (car) {
    return car[0];
  } else {
    return null;
  }
}
export { fetchCarList, fetchCarDetail };
