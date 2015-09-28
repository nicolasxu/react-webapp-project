


function Employee(name, age) {
	var name = name;
	var age  = age;

	return {
		getAge: function() { return age;},
		getName: function () { return name;}
	};
}

var e1 = new Employee('Jim', 23);
var e2 = new Employee('Tom', 24);

console.log(e1.getName() +"  "+ e1.getAge());
console.log(e2.getName() +"  "+ e2.getAge());