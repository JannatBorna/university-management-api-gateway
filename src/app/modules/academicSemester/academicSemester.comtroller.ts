import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

//create
const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

// Data fetch
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

//update
const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB
};
