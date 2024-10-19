export function exits(message: string, code: number) {
    console.error(message);
    process.exit(code);
}

export function handleExit(code: number) {
    process.exit(code);
}
