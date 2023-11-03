import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('user',{read:ViewContainerRef}) vcr! : ViewContainerRef;
  ngOnInit(){
    const componentRef = this.vcr.createComponent(RoomsComponent)
  }
}
