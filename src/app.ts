import express from 'express';
import methodOverride from 'method-override'; // Make sure to import this
import connectDB from './database';
import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    editStudent,
} from './controllers/studentController';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Use method-override here
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Connect to database
connectDB();

// Routes
app.get('/students', getStudents);
app.get('/students/:id', getStudentById);
app.get('/add-student', (req, res) => {
  res.render('addStudent'); 
});
app.get('/students/:id/edit', editStudent);
app.post('/students', createStudent);
app.put('/students/:id', updateStudent);
app.delete('/students/:id', deleteStudent);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
