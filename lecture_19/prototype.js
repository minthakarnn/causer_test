// var parent ={
// 	value : "parentvalue",
// 	obj : {
// 		objValue : "parentObjValue"
// 	},
// 	walk : function () {
// 		console.log("walking")
// 	}
// }
// var child = Object.create(parent)
// console.log("CHILD - child.value",child.value)
// console.log("CHILD - child.obj.objValue",child.obj.objValue)
// console.log("PARENT - parent.value",parent.value)
// console.log("PARENT - parent.obj.objValue",parent.obj.objValue)
// console.log("parent : ",parent.value)
// console.log("child : ",child.value)

// child.value = "childValue"
// child.obj.objValue = "childObjValue"

// console.log("*** CHANGED: child.value = 'childValue'")
// console.log("*** CHANGED: child.obj.objValue = 'childObjValue'")
// console.log("CHILD - child.value",child.value)
// console.log("CHILD - child.obj.objValue",child.obj.objValue)
// console.log("PARENT - parent.value",parent.value)
// console.log("PARENT - parent.obj.objValue",parent.obj.objValue)
// console.log("parent : ",parent.value)
// console.log("child : ",child.value)

// console.log("child.obj === parent.obj ? ", child.obj === parent.obj)

// var grandChild = Object.create(child)
// console.log("Grand Child : ",grandChild)
// grandChild.walk()

function dog(name) {
	this.name = name
	console.log("'this ' is: ",this)
}
var myDog = new dog("max")
console.log("myDog : ",myDog)

// Dog("max2")
