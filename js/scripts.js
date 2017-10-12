//js

function Phone(brand, price, color, diagonal) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.diagonal = diagonal;
}

Phone.prototype.printInfo = function () {
    console.log('Marka: ' + this.brand + ', Cena: ' + this.price + ', Kolor: ' + this.color + ', Diagonal: ' + this.diagonal + ', Pochodzenie: ' + this.origin);
}

var iPhone = new Phone('iPhone', '2000', 'bialy', '4"');
var samsung = new Phone('Samsunge', '3000', 'zielony', '5"');
var onePlus = new Phone('OnePlus', '4000', 'niebieski', '6"');

iPhone.printInfo();
samsung.printInfo();
onePlus.printInfo();

Phone.prototype.origin = '';//dodanie property - można to zrobić lepiej ???

iPhone.printInfo();
samsung.printInfo();
onePlus.printInfo();

iPhone.origin = 'USA';
samsung.origin = 'Korea';
onePlus.origin = 'China?';

iPhone.printInfo();
samsung.printInfo();
onePlus.printInfo();

