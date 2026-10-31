import { Component } from '@angular/core';

// IONIC COMPONENTS: Imported Ionic components used in the HTML
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

  // IONIC COMPONENTS: Registering components so they can be used in HTML
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})
export class HomePage {

  students = [
    { id: 1, name: 'Juan Dela Cruz', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 2, name: 'Maria Santos', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 3, name: 'Carlos Reyes', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 4, name: 'Angela Garcia', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 5, name: 'Mark Villanueva', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 6, name: 'Sofia Mendoza', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 7, name: 'Daniel Bautista', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 8, name: 'Beatrice Navarro', gender: 'Female', course: 'BS Information Technology', year: 3 }
  ];

  selectedGender = 'All';

  selectedStudent: any = null;

  // EVENT BINDING: Changes the selected gender when a filter button is clicked
  filterStudents(gender: string) {
    this.selectedGender = gender;
  }

  // EVENT BINDING: Displays the selected student's information
  viewStudent(student: any) {
    this.selectedStudent = student;
  }

  // EVENT BINDING: Closes the student profile popup
  closeStudent() {
    this.selectedStudent = null;
  }

  // FILTERED STUDENT LIST
  get filteredStudents() {

    if (this.selectedGender === 'All') {
      return this.students;
    }

    return this.students.filter(
      student => student.gender === this.selectedGender
    );
  }

}