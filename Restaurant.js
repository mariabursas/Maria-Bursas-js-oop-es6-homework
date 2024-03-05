export default class Restaurant {
  constructor(name, capacity, reservations = [], menu = [], orders = []) {
    this.name = name;
    this.capacity = capacity;
    this.reservations = reservations;
    this.orders = orders;
    this.menu = menu;
  }
  addReservation(reservation) {
    this.reservations.push(reservation);
  }
  removeReservation(reservationToRemove) {
    reservations = reservations.filter(
      (reservation) => reservation !== reservationToRemove
    );
  }

  listReservations() {
    this.reservations.forEach((element) => {
      console.log("There is a reservation for: " + element.name);
    });
  }
  isReservationAvailable(reservationName) {
    let isReservationAvailable = !this.reservations.some(
      (reservation) => reservation.name === reservationName
    );
    console.log(this.reservations);
    console.log("The status of the availability is :" + isReservationAvailable);
  }
  isFullyBooked() {
    let isFullyBooked = this.checkAvailability() === 0;
    isFullyBooked
      ? console.log("Is fully booked")
      : console.log("Is not fully booked");
  }
  guestCount() {
    let guestCount = this.reservations.reduce(
      (total, reservation) => total + reservation.guestCount,
      0
    );
    console.log("The number of guests is " + guestCount);
    return guestCount;
  }
  sortReservationsAlphabetically() {
    this.reservations = this.reservations
      .map((reservation) => reservation.name)
      .sort();
  }
  addOrder(order) {
    this.orders.push(order);
  }
  removeOrder(tableNumber) {
    this.orders = this.orders.filter(
      (order) => order.tableNumber !== tableNumber
    );
  }
  listOrders() {
    this.orders.forEach((order) => {
      console.log(
        "An order was placed at table " +
          order.tableNumber +
          " with the following menu items:"
      );

      order.items.forEach((item) => {
        console.log(item.name);
      });
    });
  }
  getTotalRevenue() {
    let totalRevenue = this.orders.reduce(
      (total, order) => total + order.totalPrice,
      0
    );
    console.log("total revenue is " + totalRevenue);
    return totalRevenue;
  }
  addMenuItem(item) {
    this.menu.push(item);
  }
  removeMenuItem(itemName) {
    this.menu = this.menu.filter((item) => item.name !== itemName);
  }
  listMenuItems() {
    this.menu.forEach((item) => {
      console.log(item.name + " can be ordered from the Menu");
    });
  }
  checkAvailability() {
    let guestCount = this.guestCount();
    let availability = this.capacity - guestCount;
    console.log("The current availability is " + availability);
  }
}
