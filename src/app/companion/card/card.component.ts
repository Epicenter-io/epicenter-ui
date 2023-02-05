import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  chips = [
    {name: 'Java', color: "gold", img: 'https://material.angular.io/assets/img/examples/shiba1.jpg', alt:"Photo of a Shiba Inu"},
    {name: 'Angular', color: "aquamarine", img: 'https://material.angular.io/assets/img/examples/shiba1.jpg', alt:"Photo of a Shiba Inu"},
    {name: 'CI/CD', color: 'bisque', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg', alt:"Photo of a Shiba Inu"},
    {name: 'TypeScript', color: 'coral', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg', alt:"Photo of a Shiba Inu"},
  ];


}
