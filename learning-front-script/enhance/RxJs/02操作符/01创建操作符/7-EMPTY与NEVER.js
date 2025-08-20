import { EMPTY, NEVER } from "rxjs";

EMPTY.subscribe({
    next: () => console.log("不会执行"),
    complete: () => console.log("立即完成"),
});

NEVER.subscribe(() => console.log("永远不会执行"));
