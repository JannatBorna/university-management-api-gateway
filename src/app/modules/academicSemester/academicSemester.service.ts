import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';
import { Request } from 'express';

//create
const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  console.log(req);
  const response: IGenericResponse = await HttpService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

//data fetch
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

//single data
const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

//update
const updateOneIntoDB = async (req: Request): Promise<IGenericResponse> => {
  //   console.log(req.params.id);
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/academic-semesters/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

//delete
const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneIntoDB,
  deleteByIdFromDB
};
