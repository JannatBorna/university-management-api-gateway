import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { BuildingService } from './building.service';

//create
const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//all data fetch
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//single data fetch
const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//update
const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//delete
const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB
};
