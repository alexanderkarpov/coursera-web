// Prototypal inheritance
var parent = {
    value: "parentValue",
    obj: {
        objValue: "parentObjValue"
    },
    walk: function () {
        console.log("walking!")
    }
};

var child = Object.create(parent); //parent object is a prototype for the child object
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

parent.value = "new value";
console.log("CHILD - child.value: ", child.value);
console.log("PARENT - parent.value: ", parent.value);

child.value = "next value";
console.log("CHILD - child.value: ", child.value);
console.log("PARENT - parent.value: ", parent.value);

console.log("parent: ", parent);
console.log("child: ", child);


// function constructor
function Dog(name) {
    this.name;
    console.log("'this' is: ", this);
}

var myDog = new Dog("Max");
console.log("myDog", myDog);

var myDog2 = Dog("Max2");
console.log("myDog2", myDog2);
