import express from 'express';
import { userRoutes } from '../modules/user/user.routes';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { academicFacultyRouters } from '../modules/academicFaculty/academicFaculty.router';
import { buildingRoutes } from '../modules/building/building.router';
import { roomRoutes } from '../modules/room/room.router';
import { courseRoutes } from '../modules/course/course.routes';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { studentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.routes';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { studentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.routes';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.router';
import { authRoutes } from '../modules/auth/auth.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';
import { managementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.routes';
import { adminRoutes } from '../modules/admin/admin.routes';
import { studentRoutes } from '../modules/student/student.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: authRoutes
  },
  {
    path: '/users',
    routes: userRoutes
  },
  {
    path: '/faculties',
    routes: facultyRoutes
  },
  {
    path: '/students',
    routes: studentRoutes
  },
  {
    path: '/academic-faculties',
    routes: academicFacultyRouters
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes
  },
  {
    path: '/academic-semesters',
    routes: academicSemesterRoutes
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
  },
  {
    path: '/semester-registration',
    routes: semesterRegistrationRoutes
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes
  },
  {
    path: '/offered-course-sections',
    routes: offeredCourseSectionRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: offeredCourseClassScheduleRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: studentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: studentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    routes: studentSemesterPaymentRoutes
  },
  {
    path: '/management-departments',
    routes: managementDepartmentRoutes
  },
  {
    path: '/admins',
    routes: adminRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
