import express from 'express';
import { AcademicSemesterController } from './academicSemester.comtroller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.post('/', AcademicSemesterController.insertIntoDB);
router.patch('/:id', AcademicSemesterController.updateOneIntoDB);

export const academicSemesterRouters = router;
