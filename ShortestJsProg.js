// yes, shortest js programme is empty
// type window in console
// u'll see somehing like this
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// whenever u create a EC, a "this" is created
// along with it even for global execution context
// at global level, this points to window object
// see console
// if u'll type this==window-it will show true


// anything which is not inside any fn ...it is i global space i.e, window



var a =10;
function b(){
    var x=100;
}
console.log(window.a);
// output 10
console.log(a);
// if u dont put anything in front of a it automativcally assumes taht u are refering to window.a
console.log(x);
// output : x is not defined
console.log(this.a);
// at global level this points to window object
// output 10
