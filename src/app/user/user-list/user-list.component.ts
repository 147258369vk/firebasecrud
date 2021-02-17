import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private fireservice:FirebaseService) { }

  items:any =[];

  ngOnInit(){

    this.fireservice.getAllUsers().subscribe(result =>{
      this.items=result;
      console.log(this.items);
    })
  }

}
