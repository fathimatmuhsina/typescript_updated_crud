import Student, { IStudent } from '../models/studentModel';

class StudentService {
    async getAllStudents(): Promise<IStudent[]> {
        return await Student.find({});
    }

    async getStudentById(id: string): Promise<IStudent | null> {
        return await Student.findById(id);
    }

    async addStudent(data: Partial<IStudent>): Promise<IStudent> {
        const newStudent = new Student(data);
        return await newStudent.save();
    }

    async updateStudent(id: string, data: Partial<IStudent>): Promise<IStudent | null> {
        return await Student.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteStudent(id: string): Promise<IStudent | null> {
        return await Student.findByIdAndDelete(id);
    }
}

export default new StudentService();
