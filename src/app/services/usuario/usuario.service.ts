import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http'; 
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable( )
export class UsuarioService {

  usuario:Usuario;
  token:string;

  constructor(
      public http:HttpClient,
      public router:Router
   ) {
    this.cargarStorage();
   }

   estaLogueado(){
     return ( this.token.length >5)? true : false;
   }
   
   cargarStorage(){
     if( localStorage.getItem('item')){
       this.token = localStorage.getItem('item');
       this.usuario = JSON.parse(localStorage.getItem('usuario'))
     }else{
       this.token = '';
       this.usuario = null;
     }
   }

   guardarStorage( id: string, token:string, usuario:Usuario){
    localStorage.setItem('id', id);
            localStorage.setItem('token', token);
            //Como el user es un objeto, tengo que pasarlo por el metodo stringify
            localStorage.setItem('usuario', JSON.stringify(usuario));
          
      this.usuario = usuario;
      this.token = token;
   }

   logout(){
     this.usuario = null;
     this.token = ' ';
     localStorage.removeItem('item');
     localStorage.removeItem('token');
     this.router.navigate(['/login']);
     
   }

   loginGoogle( token:string ){
     let url = URL_SERVICIOS + '/login/google';
     return this.http.post( url, { token }).pipe(
       map( (resp:any)=>{
         this.guardarStorage(resp.id, resp.token, resp.usuario)
         return true;
       })
     )
   }

   login( usuario:Usuario, recordar: boolean =false){

     //Función de recordar
      if( recordar ){
        localStorage.setItem('email', usuario.email);
      }else{
        localStorage.removeItem('email');
      }


      let url = URL_SERVICIOS + '/login';
      return this.http.post( url, usuario).pipe(
        map(
          (resp:any)=>{
            this.guardarStorage( resp.id, resp.token, resp.usuario);
            // localStorage.setItem('id', resp.id);
            // localStorage.setItem('token', resp.token);
            // //Como el user es un objeto, tengo que pasarlo por el metodo stringify
            // localStorage.setItem('usuario', JSON.stringify(resp.usuario));


            return true;
          }

        )
      )
   }



   crearUsuario( usuario:Usuario){
      let url= URL_SERVICIOS + '/usuario';
      return this.http.post( url, usuario)
                  .pipe(
                    map( (resp:any)=>{
                      Swal.fire ({
                        icon: 'success',
                        title: 'Usuario creado',
                        text: usuario.email
                        
                        });
                    })
                  );
   }
}
