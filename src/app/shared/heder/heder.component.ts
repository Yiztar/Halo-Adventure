import { Component } from '@angular/core';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent {
  onImageClick() {
    // Acción que deseas realizar al hacer clic en la imagen
    console.log('Imagen clickeada');
}
}