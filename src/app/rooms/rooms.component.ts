import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  constructor() {}

  hotelName = '';

  numberOfRooms = 10;

  hideRooms = false;
  ngOnInit(): void {
    this.hotelName = 'Hotel donaka'
    this.roomList = [
      {
        roomNumber:1,
        roomType: "carlton",
        amenities: "tsara bien conditioner ny aeration avec piscine",
        price: 500,
        photos: "test.google.com",
        checkinTime: new Date("11-Nov-2011"),
        checkoutTime: new Date("23-Dec-2011")
      },
      {
        roomNumber:2,
        roomType: "novotel",
        amenities: "tsara bien conditioner ny aeration avec piscine",
        price: 500,
        photos: "test.google.com",
        checkinTime: new Date("11-Nov-2011"),
        checkoutTime: new Date("23-Dec-2011")
      },
      {
        roomNumber:3,
        roomType: "trano hotely",
        amenities: "tsara bien conditioner ny aeration avec piscine",
        price: 500,
        photos: "test.google.com",
        checkinTime: new Date("11-Nov-2011"),
        checkoutTime: new Date("23-Dec-2011")
      },
      {
        roomNumber:4,
        roomType: "trois étoiles",
        amenities: "tsara bien conditioner ny aeration avec piscine",
        price: 500,
        photos: "test.google.com",
        checkinTime: new Date("11-Nov-2011"),
        checkoutTime: new Date("23-Dec-2011")
      }
    ]
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = []
    

}
