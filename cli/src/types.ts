export type Command = {
    name: string;
    description: string;
    usage: string;
    options: CommandOption[];
};

export type CommandOption = {
    name: string;
    description: string;
    example: string;
};
