import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/semester-registration', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/semester-registration/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(`/semester-registration`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(
    `/semester-registration/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(`/semester-registration/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getMyRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    `/semester-registration/get-my-registration`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const startRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/start-registration`,
    {},
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const mySemesterRegistrationCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    `/semester-registration/get-my-semsester-courses`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const enrollIntoCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/enroll-into-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const withDrawFromCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/withdraw-from-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const confirmRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/confirm-my-registration`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const startNewSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/${id}/start-new-semester`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const SemesterRegistrationService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
  getMyRegistration,
  startRegistration,
  mySemesterRegistrationCourses,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmRegistration,
  startNewSemester
};
