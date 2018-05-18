import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styles: []
})
export class ClientItemComponent implements OnInit {

  @Input() client: Client;
  
  constructor() { }

  ngOnInit() {
  }

}
