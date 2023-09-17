import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

//create
const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(`/offered-courses`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

//all data fetch
const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  console.log(req);
  const response: IGenericResponse = await CoreService.get('/offered-courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

//single data fetch
const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/offered-courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

//update
const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(`/offered-courses/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

//delete
const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(`/offered-courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const OfferedCourseService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB
};
