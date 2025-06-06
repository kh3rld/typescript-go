//// [tests/cases/compiler/controlFlowBreakContinueWithLabel.ts] ////

//// [controlFlowBreakContinueWithLabel.ts]
enum User { A, B }

let user: User = User.A

label: while (true) {
    switch (user) {
        case User.A:
            user = User.B;
            continue label;
        case User.B:
            break label;
    }
}
user;


//// [controlFlowBreakContinueWithLabel.js]
var User;
(function (User) {
    User[User["A"] = 0] = "A";
    User[User["B"] = 1] = "B";
})(User || (User = {}));
let user = User.A;
label: while (true) {
    switch (user) {
        case User.A:
            user = User.B;
            continue label;
        case User.B:
            break label;
    }
}
user;
