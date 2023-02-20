import { Component, Input, OnInit } from '@angular/core';

@Component({
  // selector: '[app-server]', //selector is an attribute
  //selector: '.app-server', //selector is a class
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  @Input() servers: Array<string> = [];
  public allowServer: boolean = false;
  public serverId: number = 0;
  public serverStatus: string = 'offline';

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 5000);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public getServerId(): number {
    this.serverId = Math.floor(Math.random() * 101);
    return this.serverId;
  }

  public getServerStatus(): string {
    this.serverStatus = this.allowServer ? 'ONLINE' : 'OFFLINE';
    return this.serverStatus;
  }
}
