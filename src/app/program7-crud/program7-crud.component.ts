import { Component } from '@angular/core';

@Component({
    selector: 'app-program7-crud',
    templateUrl: './program7-crud.component.html',
    styleUrls: ['./program7-crud.component.css']
})
export class Program7CrudComponent {
    componentTitle: string = "Program #7 - User Management";
    id:number= 0;
    name: string = '';
    email: string= '';
    index: number=0;
    isEditing = false;
    users: User[] = [
        { id: 1, name: 'Amar Kumar', email: 'amar@example.com' },
        { id: 2, name: 'Geetha Mourya', email: 'geetha@example.com' },
        { id: 3, name: 'Ramesh Aithal', email: 'ramesh@example.com' },
    ];
    addUser() {
        if (this.name.trim() !== '' && this.email.trim() !== '') {
            const newUser: User = {
                id: this.users.length + 1,
                name: this.name,
                email: this.email
            };
            this.users.push(newUser);
            this.resetForm();
        }
    }
    editUser(user: User, index:number) {
        this.isEditing = true;
        this.name = user.name;
        this.email = user.email;
        this.id=user.id;
        this.index=index;
    }
    updateUser() {
        const updateUser: User = {
            id: this.id,
            name: this.name,
            email: this.email
        };
        this.users[this.index] = updateUser;
        this.resetForm();
    }
    deleteUser(index: number) {
        this.users.splice(index, 1);
        this.resetForm();
    }
    resetForm() {
        this.isEditing = false;
        this.id= 0;
        this.name= '';
        this.email= '';
    }
}
interface User {
    id: number;
    name: string;
    email: string;
}
