export interface Room{
  totalRooms : number;
  availRooms : number;
  bookRooms : number;
}
//   bookRooms ?: number  (use ? for optional chaining concept )

export interface Roomlist{
  roomNumber : number;
  roomType : string;
  aminities : string;
  price : number;
  // photos : string;
  checkIn : Date;
  checkOut : Date;
}

