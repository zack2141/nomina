import { Component } from '@angular/core';
import { Empleados } from '../Entidades/empleados';
import { ServicioEmpleadoService } from '../servicios/servicio-empleado.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  Empleado!: Empleados[];
  Identi!: number;
  nombres_emple!:string;
  apellidos_emple!: string;
  correo_emple!: string;

   emple: Empleados = new Empleados;

  constructor(private servicio:ServicioEmpleadoService){}

  // para iniciar metodos al momento de cargar la pagina
  ngOnInit(): void{

    this.ver_lista_empleados()

  }

  //funcion para ver la lista de empleados
  ver_lista_empleados(){
    this.servicio.ver_empleados().subscribe(dato=>{
      console.log(dato)

      this.Empleado= dato
    })
  }

  guardar(){
    this.servicio.guardar_empleado(this.Identi, this.nombres_emple, this.apellidos_emple, this.correo_emple).subscribe(dato=>{
      console.log(dato)
    })
  }

  ver_empleado( id_buscado: number){

    this.servicio.buscar_empleado(id_buscado).subscribe(dato=>{
       
      this.emple = dato;

      console.log(this.emple)
      

    })

  }

  vaciar_inputs(){
    this.emple.id=0
    this.emple.nombre=""
    this.emple.apellidos =""
    this.emple.email =""
  }

}
