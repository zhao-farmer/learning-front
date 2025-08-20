import { of } from "rxjs";
import { finalize } from "rxjs/operators";

of(1, 2, 3)
.pipe(finalize(() => console.log("清理资源（无论成功或失败）")))
.subscribe({
    next: console.log,
    error: () => console.error("出错"),
});
