
let cylinder = {
    radius : 2,
    height : 10,
    area : function () {
   const pi = 3.1416;
   return pi * this.radius * this.radius *this.height; 
    }
};
console.log("Area of the Cylinder: " + cylinder.area() + " square units");