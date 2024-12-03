import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  onImageClick() {
    // Acción que deseas realizar al hacer clic en la imagen
    console.log('Imagen clickeada');
  }
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(["principal"])
    
  }
  
}
