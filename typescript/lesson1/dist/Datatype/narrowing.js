//  unnion type 
//  typeof
function print1(a) {
    if (typeof a === "string") {
        a.toLocaleUpperCase();
        console.log(a);
    }
    return a;
}
print1("string");
function optionalFunc(sinhvien) {
    if (sinhvien) {
        return sinhvien.name;
    }
}
optionalFunc();
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
})(ROLE || (ROLE = {}));
function login(user) {
    if ("is_admin" in user) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome back");
    }
}
