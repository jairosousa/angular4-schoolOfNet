import { Component, OnInit } from '@angular/core';
import { CepService } from "app/cep/cep.service";
import { Cep } from "app/cep/cep.model";

@Component({
  selector: 'cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = new Cep()

  idLoading = false

  constructor(
    private cepService: CepService
  ) { }

  ngOnInit() {

  }

  buscar() {
    this.idLoading = true
    this.cepService.buscar(this.cep.cep)
      .then((cep: Cep) => {
        this.cep = cep
        this.idLoading = false
      })
      .catch(() => {
        let cep = this.cep.cep
        this.cep = new Cep()
        alert("Cep não encontrado")
        this.cep.cep = cep
        this.idLoading = false
      })
  }

}
