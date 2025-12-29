import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exinterpolation',
  imports: [CommonModule],
  templateUrl: './exinterpolation.html',
  styleUrl: './exinterpolation.css',
})
export class Exinterpolation {
  cards=[
    {
      name:'nandana',
      email:'nandana@gmail.com',
      image:'https://tse2.mm.bing.net/th/id/OIP.4r8zzPeumy5l7fJdN_8tEAHaFi?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
      age:20,
      gender:'female'
    },
    {
      name:'aswathy',
      email:'aswathy@gmail.com',
      image:'https://www.softwebsolutions.com/wp-content/uploads/2022/07/Data-Engineering.jpg',
      age:20,
      gender:'female'
    },
  ]
 
   }


