import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable()
export class ClientService {

  constructor() { }

  loadClients(): Client[] {
    // TODO: Charger la liste de tous les clients
    return [];

  }

  loadClient(id: number): Client {
    //TODO: Renvoie un client
    return null;
  }

  addClient() {
    // TODO: Ajoute un client à la BDD

  }

  deleteClient(id: number) {
    // TODO: Supprime un client de la BDD

  }



}
