import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  console.log('Request data', req.body);
  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }
  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;
  // console.log('Faculty id:', academicFaculty);

  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }

  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters?syncId=${academicSemester}`
  );

  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  // console.log('Department:', academicDepartmentResponse);
  // console.log('Faculty:', academicFacultyResponse);
  // console.log('Semester:', academicSemesterResponse);

  console.log('Body:', req.body);

  // const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
  // headers: {
  // Authorization: req.headers.authorization
  // }
  // });

  // return response;
};

export const UserService = {
  createStudent
};
