import express from 'express';
import { academicSemesterRouters } from '../modules/academicSemester/academicSemester.routes';
import { academicFacultyRouters } from '../modules/academicFaculty/academicFaculty.router';
import { academicDepartmentRouters } from '../modules/academicDepartment/academicDepartment.router';
import { buildingRoutes } from '../modules/building/building.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-faculties',
    route: academicFacultyRouters
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRouters
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRouters
  },
  {
    path: '/buildings',
    route: buildingRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
