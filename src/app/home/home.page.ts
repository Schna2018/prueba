import { Component, OnInit } from '@angular/core';
import { ExamenService } from './examen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items:any;

  constructor(
    private ExamenService: ExamenService
  ) {}

  ngOnInit(): void {
    this.ExamenService.obtenerProductos().subscribe((producto)=>{
      
      this.items= producto;
      localStorage.setItem('producto',JSON.stringify(this.items));
    });
    
    
    
  }

}
