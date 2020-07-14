import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/shared/methods.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private methods: MethodsService) { }

  ngOnInit(): void {
  }

}
