export default class Order {
  constructor(tableNumber, items = [{}]) {
    this.items = items;
    this.tableNumber = tableNumber;
    this.totalPrice = 0;
  }
  calculateTotalPrice() {
    this.items.forEach((element) => {
      this.totalPrice += element.price;
    });
    console.log("The price for the items in the order is " + this.totalPrice);
    return this.totalPrice;
  }
}
