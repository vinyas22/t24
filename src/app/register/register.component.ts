import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User=new User();

  constructor(private service : ServiceService) { }

  ngOnInit(): void {
  }

  registerfac(){
    this.service.registeremp(this.user).subscribe(data=>{console.log(data)})
  }
}
