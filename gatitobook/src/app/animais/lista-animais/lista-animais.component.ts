import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AnimaisService } from '../animais.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais !: Animais;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.usuarioService.retornaUsuario().subscribe((usuario)=>{
    //   const userName = usuario.name ?? '';
    //   this.animaisService.listaDoUsuario(userName).subscribe((animais)=>{
    //     this.animais = animais;
    //   });
    // });
    this.activatedRoute.params.subscribe(param =>{
      this.animais = this.activatedRoute.snapshot.data['animais'];
    });
  }

}
