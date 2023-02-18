import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {} from '@angular/fire/database'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  fg:FormGroup = this.fb.group({
    email: ['', [Validators.email]],
    password:['',[Validators.minLength(6)]]
  })
  msg?:string;
  error?:any;
  constructor(private auth:AuthService,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  signIn(){
    
    this.auth.signIn(this.fg.value).subscribe({
      next: ()=>{
        this.router.navigate(['/'])
      },
      error:(error)=>{
        this.error = error;
        this.msg= error.message
      }
    })
  }
}
