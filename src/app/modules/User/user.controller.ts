import { NextFunction, Request, Response } from 'express';
import { FileUplaodHelper } from '../../../helpers/FileUploadHelper';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  FileUplaodHelper.uploadToCloudinary();
};

export const UserController = {
  createStudent
  //   createFaculty,
  //   createAdmin
};
