import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

//create
const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(`/academic-faculties`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
export const AcademicFacultyService = {
  insertIntoDB
  //   getAllFromDB,
  //   updateOneIntoDB
};
