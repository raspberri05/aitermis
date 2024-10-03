export function exits(message: string, code: number) {
    console.error(message);
    process.exit(code);
}
