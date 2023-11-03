import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
  ngOnInit(): void {
  }
  @Input() rooms: RoomList[] = [];
  @Input() title: String = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ito ny current value')
    console.log(changes['title'].currentValue)
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
