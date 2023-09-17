import { NextFunction, Request, Response } from 'express';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';

//create
const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const AcademicDepartmentController = {
  insertIntoDB
  //   getAllFromDB,
  //   updateOneIntoDB
};
