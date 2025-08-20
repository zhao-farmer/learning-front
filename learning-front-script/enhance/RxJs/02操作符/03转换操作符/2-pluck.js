import { of } from "rxjs";
import { map } from "rxjs/operators";

of({ name: "Alice", age: 25 }, { name: "Bob", age: 30 })
    .pipe(map(user => user.name))
    .subscribe(console.log);
