import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

//create
const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  console.log(req);
  const response: IGenericResponse = await HttpService.post('/academic-departments', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicDepartmentService = {
  insertIntoDB
  //   getAllFromDB,
  //   updateOneIntoDB
};
