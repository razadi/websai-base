import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefeService } from '../../services/refe/refe.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  referencia: string;
  filesadmi: any[];
  filesoper: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public refeServ: RefeService
  ) { 
    this.route.params.subscribe(params => {
      this.referencia = params.refe;
    });
  }

  ngOnInit() {
    this.filesadmi = this.refeServ.files.filter(data => data.tipo === 'ADM');
    this.filesoper = this.refeServ.files.filter(data => data.tipo === 'OPE');
  }

}
