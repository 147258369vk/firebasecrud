import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fireservice:FirebaseService,private route:Router) { }

  ngOnInit(): void {
  }

  addUser(form: { value: User; })
  {
    // console.log(form.value);
    this.fireservice.createUser(form.value).then(res =>{
      alert('New User Created');
      this.route.navigate(['/list-user']);
    },
    err =>{
      alert('Error in creating new user' +err);
    })
  }
}
