import { Component, OnInit } from '@angular/core';
import { Candidatos } from 'src/assets/classes/Candidatos.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  titulo ='Cronometro'
  /////////////////////////////////////////Bariables del rosas\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  minutos:number;
   segundos:number;
   pausa:boolean;
   messagePausa:string;
   objCandidato = new Candidatos();
   tempo:any;

   ////////////////////////////////////////////////////////////////////////////////////////////////////////





  candidatos: Candidatos[] = []; 


  candidatoSelec: Candidatos = new Candidatos();

  mostrarC(candidatoo: Candidatos){
    this.candidatoSelec = candidatoo;
    this.inicarTemporizador();
  }
  

  cantidad:number;

  agregarColumnas(){
    for (let index = 0; index < this.cantidad; index++) {
    this.candidatos.push({id: index+1, nombre: " ", tiempo: 0, minutos: 0});
    
  }
  }

  /* agregarCandidato(){
    this.candidato.id = this.candidatos.length +1;
    this.candidatos.push(this.candidato);

    /* this.candidato = new Candidatos(); 

   
  } */
   bandera1: boolean = false;
   contador: number = 0;

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

    this.minutos=0;
    this.segundos=0;
    this.messagePausa ="Pausar";
    
    let candidatosLocal = localStorage.getItem("candidatos");
    if(candidatosLocal != undefined){
      this.candidatos= JSON.parse(candidatosLocal);
    }
    
  }

  ///////////////////////////////////////////////////////////////////////

  inicarTemporizador(){
    
    
    this.tempo = setInterval(()=>this.temporizar() ,1000);

  }
  agregaTiempo(){
    
    for (let index = 0; index < this.cantidad; index++) {  
    this.candidatos[index].minutos = this.objCandidato.minutos;
    }
  }

  resetartiempo(){
    this.minutos=0;
    this.segundos=0;
  }

  pausartiempo(){
  clearInterval(this.tempo);
  /* this.objCandidato.minutos=this.minutos;
  this.objCandidato.segundos=this.segundos; */
  }

  temporizar(){
    
    if (--this.segundos < 0){
      this.segundos=59;
    if (--this.minutos < 0){
      this.resetartiempo();
    }
  }

  }
  /////////////////////////////////////////////////////////////////////////

}
