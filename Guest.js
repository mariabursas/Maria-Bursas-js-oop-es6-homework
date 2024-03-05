import Reservation from "./Reservation.js";

export default class Guest extends Reservation {
  constructor(name, date, time, guestCount, specialRequest) {
    super(name, date, time, guestCount);
    this.specialRequest = specialRequest;
  }
}
