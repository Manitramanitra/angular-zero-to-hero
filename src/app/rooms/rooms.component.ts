import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements AfterViewChecked, AfterViewInit {
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  ngAfterViewChecked(): void {
    this.headerComponent.title = "coucou Manitra"
  }
  ngAfterViewInit(): void {
    // this.headerComponent.title = "coucou Manitra"
    // console.log(this.headerComponent)
  }
  
  title : string  = 'Room List';

  hotelName = '';

  numberOfRooms = 10;

  roomList: RoomList[] = [];

  hideRooms = false;

  ngOnInit(): void {
    console.log(this.headerComponent)
    this.hotelName = 'Hotel donaka';
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'carlton',
        amenities: 'tsara bien conditioner ny aeration avec piscine',
        price: 500,
        photos: 'test.google.com',
        checkinTime: new Date('11-Nov-2011'),
        checkoutTime: new Date('23-Dec-2011'),
      },
      {
        roomNumber: 2,
        roomType: 'novotel',
        amenities: 'tsara bien conditioner ny aeration avec piscine',
        price: 500,
        photos: 'test.google.com',
        checkinTime: new Date('11-Nov-2011'),
        checkoutTime: new Date('23-Dec-2011'),
      },
      {
        roomNumber: 3,
        roomType: 'trano hotely',
        amenities: 'tsara bien conditioner ny aeration avec piscine',
        price: 500,
        photos: 'test.google.com',
        checkinTime: new Date('11-Nov-2011'),
        checkoutTime: new Date('23-Dec-2011'),
      },
      {
        roomNumber: 4,
        roomType: 'trois étoiles',
        amenities: 'tsara bien conditioner ny aeration avec piscine',
        price: 500,
        photos: 'test.google.com',
        checkinTime: new Date('11-Nov-2011'),
        checkoutTime: new Date('23-Dec-2011'),
      },
    ];
  }
  
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Miova Room list"
  }

  roomSelect!: RoomList;

  selectRoom(room: RoomList) {
    this.roomSelect = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 5,
      roomType: 'Hall misa ',
      amenities: 'tsara bien conditioner ny aeration avec piscine',
      price: 5000,
      photos: 'test.google.com',
      checkinTime: new Date('11-Nov-2011'),
      checkoutTime: new Date('23-Dec-2011'),
    };
    // this.roomList.push(room) it's the same with the under
    this.roomList = [...this.roomList, room]
  }
}
