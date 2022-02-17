import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title="userprofile"

  currentUser = {
    firstname: '',
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
  gotouserprofile(pageName:string):void{
    this.router.navigate([`${pageName}`])
  
  }
  ngOnInit(): void {
  }

}
