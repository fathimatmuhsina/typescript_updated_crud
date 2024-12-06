import { Request, Response } from 'express';
import studentService from '../services/studentService';

export const getStudents = async (req: Request, res: Response) => {
  try {
      const students = await studentService.getAllStudents(); // Fetch all students
      console.log('Fetched Students:', students); // Debug log to see what is fetched
      res.render('students', { students }); // Pass students to the view
  } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).send('Error fetching students');
  }
};


export const getStudentById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const student = await studentService.getStudentById(id);
        if (!student) {
            res.status(404).send('Student not found');
            return;
        }
        res.render('student', { student });
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).send('Error fetching student');
    }
};

export const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
      await studentService.addStudent(req.body);
      res.redirect('/students'); // Redirect to the student list after adding
  } catch (error) {
      console.error('Error creating student:', error);
      res.status(500).send('Error creating student');
  }
};
export const editStudent = async (req: Request, res: Response): Promise<void> => {
  try {
      const student = await studentService.getStudentById(req.params.id);
      res.render('edit-student', { student });
  } catch (error) {
      res.status(500).send('Error fetching student');
  }
};

export const updateStudent = async (req: Request, res: Response): Promise<void> => {
  try {
      await studentService.updateStudent(req.params.id, req.body);
      res.redirect('/students');
  } catch (error) {
      res.status(500).send('Error updating student');
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
      await studentService.deleteStudent(req.params.id);
      res.redirect('/students'); // Redirect after deletion
  } catch (error) {
      res.status(500).send('Error deleting student');
  }
};
