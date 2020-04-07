import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('mainSlide', {static: true}) mainSlide: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarOpts = {
    slidesPerView: 3.5
  };

  pageSlideOpt = {
    initialSlide: 0
  };

  constructor() { }

  ngOnInit() {
    this.mainSlide.lockSwipes(true);
  }

  login(loginForm: NgForm) {
    console.log(loginForm.valid);
  }

  register(registerForm: NgForm) {
    console.log(registerForm.valid);
  }

  selectAvatar(avatar) {
    this.avatars.forEach( av => av.seleccionado = false);

    avatar.seleccionado = true;
  }

  showRegister() {
    this.mainSlide.lockSwipes(false);
    this.mainSlide.slideTo(1);
    this.mainSlide.lockSwipes(true);
  }

  showLogin() {
    this.mainSlide.lockSwipes(false);
    this.mainSlide.slideTo(0);
    this.mainSlide.lockSwipes(true);
  }

}
