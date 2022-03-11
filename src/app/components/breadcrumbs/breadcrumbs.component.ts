import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;
  descripcion: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) { 
    this.getDataRoute().subscribe(data => {
      this.titulo = data.titulo;
      this.descripcion = data.descripcion;
      // Para poner el titulo de la pagina del browser como queremos
      this.title.setTitle('webSAAI-' + this.titulo);
      // Aqui agrego metas al portal  -------------
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.descripcion
      };
      this.meta.addTag(metaTag);
      // ------------------------------------------
    });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events
          .pipe(
            filter( evento => evento instanceof ActivationEnd),
            filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
            map((evento: ActivationEnd) => evento.snapshot.data)
          );
  }

}
