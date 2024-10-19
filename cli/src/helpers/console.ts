const colors = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    end: "\x1b[0m",
    newline: "\n",
};

export function print(text: string, color?: keyof typeof colors) {
    process.stdout.write(
        `${color ? colors[color] : ""}${text}${color ? colors.end : ""}`,
    );
}

export function println(text: string, color?: keyof typeof colors) {
    process.stdout.write(
        `${color ? colors[color] : ""}${text}${color ? colors.end : ""}${colors.newline}`,
    );
}
