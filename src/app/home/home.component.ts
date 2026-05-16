import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta-service.service';
import { Meta } from '../models/meta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  metasList: Meta[] = [];
  nuevaMetaTexto: string = '';

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    // Esto se ejecuta al abrir la página y trae las metas de Firebase
    this.metaService.getMetas().subscribe(data => {
      this.metasList = data.map(e => {
        return { 
          id: e.payload.doc.id, 
          ...e.payload.doc.data() as Meta 
        };
      });
    });
  }

  guardar() {
    if(this.nuevaMetaTexto.trim() !== '') {
      this.metaService.addMeta({ meta: this.nuevaMetaTexto });
      this.nuevaMetaTexto = ''; // Limpiar la cajita después de guardar
    }
  }

  eliminar(id: any) {
    if(confirm('¿Estás segura de eliminar esta meta?')) {
      this.metaService.deleteMeta(id);
    }
  }
}
