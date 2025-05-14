let square = {
    side: 4,
    area: function() {
        return this.side * this.side; // Area of square: side * side
    }
};

let rectangle = {
    length: 6,
    breadth: 3,
    area: function() {
        return this.length * this.breadth; // Area of rectangle: length * breadth
    }
};

console.log("Area of the Square: " + square.area() + " square units");
console.log("Area of the Rectangle: " + rectangle.area() + " square units");
