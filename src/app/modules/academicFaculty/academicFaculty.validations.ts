import { z } from 'zod';
import { academicFacultyTitles } from './academicFaculty.constants';

const create = z.object({
  body: z.object({
    title: z.enum([...academicFacultyTitles] as [string, ...string[]], {
      required_error: 'Title is required'
    })
  })
});

const update = z.object({
  body: z.object({
    title: z.enum([...academicFacultyTitles] as [string, ...string[]], {
      required_error: 'Title is required'
    })
  })
});

export const AcademicFacultyValidation = {
  create,
  update
};
