import {Component, OnInit} from '@angular/core';
import {GlobaleService} from "../../service/globale.service";

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent  implements OnInit{


  listCompte: any[] = [];

  constructor(private gl: GlobaleService) {}

  ngOnInit(): void {
    this.getAll
  }


}
