(function (window) {
  "use strict";
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function (order) {
    console.log("Adding order for" + order.emailAddress);
    console.log(order);
    this.db.add(order.emailAddress, order);
    // datastore 의 add method 를 사용
    // datastore 네임스페이스를 명시하거나 , 생성자 언급을 할 필요가 없다.
  };

  Truck.prototype.deliverOrder = function (customerId) {
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId);
  };

  Truck.prototype.printOrders = function () {
    var customerIdArray = Object.keys(this.db.getAll());
    console.log("Truck #" + this.truckId + " has pending orders :");
    customerIdArray.forEach(
      function (id) {
        console.log(this.db.get(id));
      }.bind(this)
    );
  };

  App.Truck = Truck;
  window.App = App;
})(window);
