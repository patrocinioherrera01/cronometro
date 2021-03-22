import { Component } from '@angular/core';
import { Candidatos } from 'src/assets/classes/Candidatos.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo ='Cronometro'

  candidatos: Candidatos[] = []; 


  candidatoSelec: Candidatos = new Candidatos();

  mostrarC(candidatoo: Candidatos){
    this.candidatoSelec = candidatoo;
  }
  

  cantidad:number;

  agregarColumnas(){
    for (let index = 0; index < this.cantidad; index++) {
    this.candidatos.push({id: index+1, nombre: " ", tiempo: 0});
    
  }
  }

  /* agregarCandidato(){
    this.candidato.id = this.candidatos.length +1;
    this.candidatos.push(this.candidato);

    /* this.candidato = new Candidatos(); 

   
  } */
   bandera1: boolean = false;

  guardarRegistros(){
    /* this.candidatos.push(this.candidato); */
    localStorage.setItem("candidatos",JSON.stringify(this.candidatos));
    console.log(this.candidatos)
    this.bandera1 = true;

    
  }

  borrarRegistros(datos:string){
    if(confirm("Desea borrar los " +datos)){

    localStorage.removeItem("candidatos");
    this.bandera1 = false;
    window.location.reload();
    }
  }


  constructor(){}
  ngOnInit(){
    
    let candidatosLocal = localStorage.getItem("candidatos");
    if(candidatosLocal != undefined){
      this.candidatos= JSON.parse(candidatosLocal);
    }
    
  }

}
