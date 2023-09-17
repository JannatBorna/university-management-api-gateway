import express from 'express';
import { academicSemesterRouters } from '../modules/academicSemester/academicSemester.routes';
import { academicFacultyRouters } from '../modules/academicFaculty/academicFaculty.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-faculties',
    routes: academicFacultyRouters
  },
  {
    path: '/academic-departments',
    routes: academicSemesterRouters
  },
  {
    path: '/academic-semesters',
    routes: academicSemesterRouters
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
