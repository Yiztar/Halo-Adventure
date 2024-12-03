import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {
  constructor(private router: Router) {}

  goToOtherPage() {
    this.router.navigate(['/login']);
  }

  onImageClick() {
    // Acción que deseas realizar al hacer clic en la imagen
    console.log('Imagen clickeada');
}
}
