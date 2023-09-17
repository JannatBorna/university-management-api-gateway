import express from 'express';
import { academicSemesterRouters } from '../modules/academicSemester/academicSemester.routes';
import { academicFacultyRouters } from '../modules/academicFaculty/academicFaculty.router';
import { academicDepartmentRouters } from '../modules/academicDepartment/academicDepartment.router';
import { buildingRoutes } from '../modules/building/building.router';
import { roomRoutes } from '../modules/room/room.router';
import { courseRoutes } from '../modules/course/course.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-faculties',
    routes: academicFacultyRouters
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRouters
  },
  {
    path: '/academic-semesters',
    routes: academicSemesterRouters
  },
  {
    path: '/buildings',
    routes: buildingRoutes
  },
  {
    path: '/rooms',
    routes: roomRoutes
  },
  {
    path: '/courses',
    routes: courseRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
