type Status = number | string;

type Gender = "男" | "⼥";

function printStatus(status: Status) {
    console.log(status);
}

function logGender(str: Gender) {
    console.log(str);
}

printStatus(404);
printStatus("200");
printStatus("501");
logGender("男");
logGender("⼥");


export {}