import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  addStudent(): void {
    const newStudent: Student = { id: 0, name: 'New Student', email: 'new@student.com' };
    this.studentService.addStudent(newStudent).subscribe((student) => {
      this.students.push(student);
    });
  }

  updateStudent(student: Student): void {
    student.name = 'Updated Name';
    this.studentService.updateStudent(student).subscribe();
  }

  deleteStudent(student: Student): void {
    this.studentService.deleteStudent(student.id).subscribe(() => {
      this.students = this.students.filter((s) => s.id !== student.id);
    });
  }
}
