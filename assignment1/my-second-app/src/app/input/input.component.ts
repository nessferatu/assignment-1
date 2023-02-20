import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() text?: string;
  public serverCount = 0;
  public servers: Array<string> = [];
  public showSecret = true;

  public onTextUpdate(event: any): void {
    console.log(event);
    // this.text = event.target.value;
  }

  public onCreateServer(): void {
    this.serverCount = this.serverCount + 1;
    this.servers.push(`server ${this.serverCount}`);
  }

  public onToggleSecret(): void {
    this.showSecret === !this.showSecret;
  }
}
