function demo(): void {
    // 返回undefined合法
    return undefined;
    // 以下返回均不合法
    return 100;
    return false;
    return null;
    return [];
}
demo();

export {}