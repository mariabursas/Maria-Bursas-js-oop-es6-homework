import Restaurant from "/Restaurant.js";
import Guest from "./Guest.js";
import Order from "./Order.js";
import MenuItem from "./MenuItem.js";
import Reservation from "./Reservation.js";
import OnlineOrder from "./OnlineOrder.js";

const restaurant = new Restaurant("Pizzerie", 90);
const pizzaQuattroStagioni = new MenuItem("Quattro stagioni", 20);
const pasteCabonara = new MenuItem("Paste Carbonara", 15);
const reservationDaniel = new Reservation("Daniel", "20.02.2024", "6PM", 2);
const reservationJohn = new Reservation("John", "20.02.2024", "6PM", 4);
restaurant.addMenuItem(pizzaQuattroStagioni);
restaurant.addMenuItem(pasteCabonara);
const babyJohn = new Guest(
  reservationJohn.name,
  reservationJohn.date,
  reservationJohn.time,
  reservationJohn.guestCount,
  "baby seat"
);
console.log(babyJohn.specialRequest);
let order6PM = new Order(2, [
  pizzaQuattroStagioni,
  pasteCabonara,
  pizzaQuattroStagioni,
]);
let order4PM = new Order(1, [pasteCabonara]);
let orderOnline = new OnlineOrder([pizzaQuattroStagioni], "Cluj-Napoca");
restaurant.addOrder(order4PM);
restaurant.addOrder(order6PM);
restaurant.addOrder(orderOnline);
order6PM.calculateTotalPrice();
order4PM.calculateTotalPrice();
orderOnline.calculateTotalPrice();
restaurant.addReservation(reservationJohn);
restaurant.addReservation(reservationDaniel);
restaurant.guestCount();
restaurant.listReservations();
restaurant.checkAvailability("Daniel");

restaurant.listMenuItems();
console.log(babyJohn.specialRequest);
restaurant.sortReservationsAlphabetically();
restaurant.listOrders();
restaurant.getTotalRevenue();
