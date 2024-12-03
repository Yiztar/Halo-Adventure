import { Component } from '@angular/core';

@Component({
  selector: 'app-foote',
  templateUrl: './foote.component.html',
  styleUrls: ['./foote.component.css']
})
export class FooteComponent {
  onImageClick() {
    // Acción que deseas realizar al hacer clic en la imagen
    console.log('Imagen clickeada');
}
}
