import { Component } from '@angular/core';

@Component({
  selector: 'app-program5-students',
  templateUrl: './program5-students.component.html',
  styleUrls: ['./program5-students.component.css']
})
export class Program5StudentsComponent {
  componentTitle: string = "Program #5 - Students Details";
  numberOfStudents: number = 0;
  students: Student[] = [];
  generateStudentDetails() {
    if(this.numberOfStudents>=0) {
      this.students = this.loadStudents().slice(0,this.numberOfStudents);
    }
  }
  loadStudents(): Student[] {
    return [
      {usn:"4SU21CS1E001",name:"Ram",contactNum:9512456718,cgpa:3},
      {usn:"4SU21CSE002",name:"Vinay",contactNum:9512456721,cgpa:4},
      {usn:"4SU21CSE003",name:"Krishna",contactNum:9512456722,cgpa:5},
      {usn:"4SU21CSE004",name:"Prasad",contactNum:9512456723,cgpa:2},
      {usn:"4SU21CSE005",name:"Geetha",contactNum:9512456724,cgpa:3},
      {usn:"4SU21CSE006",name:"Seetha",contactNum:9512456725,cgpa:4},
      {usn:"4SU21CSE007",name:"Amar",contactNum:9512456726,cgpa:5},
      {usn:"4SU21CSE008",name:"Keerthi",contactNum:9512456727,cgpa:2},
      {usn:"4SU21CSE009",name:"Prasad",contactNum:9512456728,cgpa:3},
      {usn:"4SU21CSE010",name:"Vishnu",contactNum:9512456729,cgpa:2},
      {usn:"4SU21CSE011",name:"Bahadhur",contactNum:9512456731,cgpa:5},
      {usn:"4SU21CSE012",name:"Vani",contactNum:9512456732,cgpa:5},
      {usn:"4SU21CSE013",name:"Krunal",contactNum:9512456733,cgpa:4},
      {usn:"4SU21CSE014",name:"Sachin",contactNum:9512456734,cgpa:4},
      {usn:"4SU21CSE015",name:"Vamshi",contactNum:9512456735,cgpa:3},
    ];
  }
}
interface Student{
  usn: string;
  name: string;
  contactNum: number;
  cgpa: number;
}
