import { Car } from "../interface/car.interface";
import { prisma } from "../libs/primsa";

const insertCar = async (item: Car) => {
  const response = await prisma.item.create({ data: item });
  return response;
};

const getCars = async () => {
  const response = await prisma.item.findMany();
  return response;
};

const getCar = async (id: number) => {
  const response = await prisma.item.findUnique({
    where: {
      id,
    },
  });
  return response;
};

const updateCar = async (item: Car, id: number) => {
  const response = await prisma.item.update({
    where: {
      id,
    },
    data: item,
  });

  return response;
};

const deleteCar = async (id: number) => {
  const response = await prisma.item.delete({
    where: {
      id,
    },
  });
  return response;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
