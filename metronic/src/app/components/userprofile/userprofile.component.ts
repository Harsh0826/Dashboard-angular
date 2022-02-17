import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {


  currentUser = {
    firstname: '',
    lastname:'',
    email: ''
  };
  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute,
    private router:Router
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
  }
  gotologin(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  ngOnInit(): void {
  }

}
