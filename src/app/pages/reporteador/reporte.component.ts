import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  report: any[] = [];

  form: FormGroup;
  esNew: boolean = false;
  nombre: string;
  repid: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.repid = this.route.snapshot.params['id'];
    this.esNew = this.repid === 'new';

    // this.report = [
    //   {id: 1, name: 'Refe.'},
    //   {id: 2, name: 'Num. Pedimento'},
    //   {id: 3, name: 'T.Oper.'}
    // ];

    // const controls = this.report.map(c => new FormControl(false));
    // this.form = this.formBuilder.group({
    //   // usuario: [this.usuario, [Validators.required]],
    //   nombre: new FormControl({value: this.nombre, disabled: !this.esNew}, Validators.required),
    //   report: new FormArray(controls)
    // });

  }

  ngOnInit() {
  }

  submit(event) {

    console.log(event.target.value);
    this.router.navigate(['/reporteador']);
     
  }

}
