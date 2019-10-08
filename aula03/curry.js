function f1(a){
    return function f2(b){
        return function f3(c){
            return a + b + c
        }
    }
}

console.log(f1(1)(2)(3))

function Point(x, y) {
    this.x = x
    this.y = y
  
     //this.add = function(p) {
     //  return new Point(this.x+p.x, this.y+p.y)
     //}
  
    this.add = (p) => {
      return new Point(this.x+p.x, this.y+p.y)
    }
    
  
    console.log(this);
  }
  
  let p1 = new Point(2,3)
  let p2 = new Point(4,5)
  
  let f = p1.add;
  
  f(p2);