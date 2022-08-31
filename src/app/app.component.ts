import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Profile Editor';

  user: User = {
    name: 'Churro',
    age: 7,
    favoriteColor: 'Purple',
    favoriteAnimal: 'Cats',
    stillAlive: true,
  };

  formUser: User = { ...this.user };

  animals: string[] = ['Dogs', 'Cats', 'Birds', 'Fishes', 'Horses', 'Penguins'];

  users: User[] = [
    {
      name: 'Churro',
      age: 7,
      favoriteColor: 'Purple',
      favoriteAnimal: 'Cats',
      stillAlive: true,
    },
  ];

  displayEdit: boolean = false;

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
  }

  saveChanges() {
    this.toggleEdit();
    this.user = { ...this.formUser };
    this.users.push(this.formUser);
  }
}
