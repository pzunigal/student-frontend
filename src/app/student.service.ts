import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  email: string;
  }

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUri);
    }

  addStudent(student: Student): Observable<Student> {
      return this.http.post<Student>(this.apiUrl, student);
    }

    updateStudent(student: Student): Observable<Student> {
      return this.http.put<Student>(`${this.apiUrl}/${student.id}`, student);
    }

    deleteStudent(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

  constructor() { }
}
