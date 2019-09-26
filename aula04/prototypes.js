function Point(x,y)
{
    this.x=x
    this.y=y
}

let p1 = new Point(6,5)
console.log(p1)
p1.add = function(p){return new Point(this.x + p.x, this.y + p.y)}

let p2 = p1.add(p1)
console.log(p2)

let p3 = new Point(7,4)
//let p4 = p3.add(p3) //ERRO

Point.prototype.add = function(p){return new Point(this.x + p.x, this.y + p.y)}

let p5 = new Point(7,4)
let p6 = p5.add(p5)
console.log(p6)

Object.prototype.test = "Test String"

String.prototype.surround = function(left, rigth){
                                return left + " " +  this + " " + rigth;
                            }

let s = "STR".surround("LEFT", "RIGHT")

console.log(s);
console.log(s.test)
console.log([].test)
console.log(function(){}.test)






