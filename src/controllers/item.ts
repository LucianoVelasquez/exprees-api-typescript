import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
    res.json('hola')
  } catch (e) {
   handleHttp(res,'ERROR_GET_ITEM');
}
};

const getItems = (req: Request, res: Response) => {
    try {
      res.json('hola')
    } catch (e) {
     handleHttp(res,'ERROR_GET_ITEMS');
  }
};

const postItem = (req: Request, res: Response) => {
    try {
      res.send(req.body)
    } catch (e) {
     handleHttp(res,'ERROR_POST_ITEM');
  }
};

const updateItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
     handleHttp(res,'ERROR_UPDATE_ITEM');
  }
};

const deleteItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
     handleHttp(res,'ERROR_DELETE_ITEM');
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
