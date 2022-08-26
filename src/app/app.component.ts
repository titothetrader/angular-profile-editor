import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Profile Editor';

  formUser: User = {
    name: 'Churro',
    age: 7,
    favoriteColor: 'Purple',
    favoriteAnimal: 'Cats',
    stillAlive: true,
  };

  animals: string[] = ['Dogs', 'Cats', 'Birds', 'Fishes', 'Horses', 'Penguins'];

  users: User[] = [];

  displayEdit: boolean = false;

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
  }

  saveChanges() {
    this.toggleEdit();
    this.users.push(this.formUser);
  }
}
