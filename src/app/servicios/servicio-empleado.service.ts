import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicioEmpleadoService {

  constructor(private httpClient: HttpClient) { }
  

  url!:`http://localhost:8080/Empleados`;

  ver_empleados():Observable<any>{
    return this.httpClient.get(`http://localhost:8080/Empleados/verdatos2`)
  }

  guardar_empleado(
    id:number,
    nombre:string,
    apellidos: string,
    correo:string
  ):Observable<object>{
    return this.httpClient.get(`http://localhost:8080/Empleados/guardar?nombre=${nombre}&apellido=${apellidos}&correo=${correo}&id=${id}`)
  }

  buscar_empleado(
    id:number
  ):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/Empleados/busca?id=${id}`)
  }
}
