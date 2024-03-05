import Order from "./Order.js";

export default class OnlineOrder extends Order {
  constructor(items, deliveryAddress) {
    super(null, items);
    this.deliveryAddress = deliveryAddress;
    this.tableNumber = "online order";
  }
}
