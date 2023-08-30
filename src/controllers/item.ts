import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(Number(id));

    if(!response) throw Error();

    res.send(response)
  } catch (e) {
   handleHttp(res,'ERROR_GET_ITEM');
}
};

const getItems = async (req: Request, res: Response) => {
    try {
      const response = await getCars();

      if(!response) throw Error();

      res.send(response);
    } catch (e) {
     handleHttp(res,'ERROR_GET_ITEMS');
  }
};

const postItem = async ({body}: Request, res: Response) => {
    try {

      const responseItem = await insertCar(body);
      res.send(responseItem);

    } catch (e) {
     handleHttp(res,'ERROR_POST_ITEM');
  }
};

const updateItem = async ({body,params}: Request, res: Response) => {
    try {
      const { id } = params
      const response = await updateCar(body,Number(id));

      res.send(response);
    } catch (e) {
     handleHttp(res,'ERROR_UPDATE_ITEM');
  }
};

const deleteItem = async ({params}: Request, res: Response) => {
    try { 
      const { id } = params;
      const response = await deleteCar(Number(id))

      if(!response) throw Error();

      res.send(response);

    } catch (e) {
     handleHttp(res,'ERROR_DELETE_ITEM');
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
