let user = new Object();
let user2 = {
    name: "John",
    age: 30,
};

user2.isAdmin = true;

alert(user2.name + " " + user2.age + " " + user2.isAdmin)

delete user2.age

alert(user2.name + " " + user2.age + " " + user2.isAdmin)



// dot access do not work for multiword key, because of this we should use square brackets

user2["likes birds"] = true;

alert(user2["likes birds"])

delete(user2["likes birds"])