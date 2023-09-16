import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';
import { Request } from 'express';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  console.log(req);
  const response: IGenericResponse = await HttpService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  console.log(req.query);
  const response: IGenericResponse = await HttpService.get('/academic-semesters', {
    params: req.query
    // headers: {
    //   Authorization: req.headers.authorization
    // }
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDB,
  getAllFromDB
};
