import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private user: User = new User;

  constructor(private fireDb:AngularFirestore) { }

  //add new user
  createUser(value:User)
  {
    return this.fireDb.collection('/users').add({
      name:value.username,
      email:value.email,
      designation:value.designation,
      location:value.location
    });
  }


  getAllUsers()
  {
    return this.fireDb.collection('users').snapshotChanges();
  }
}
