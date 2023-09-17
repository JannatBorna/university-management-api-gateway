import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseService } from './offeredCourse.service';

//create
const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//all data fetch
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//single data fetch
const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//update
const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//delete
const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB
};
