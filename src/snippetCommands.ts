interface LaTeXCommands {
    commands: string;
    snippts: string;
}

let commands: LaTeXCommands[] = new Array<LaTeXCommands>();

commands.push({
    commands: "latex-commands.inlinemath",
    snippts: " $ $1 $ "
});

commands.push({
    commands: "latex-commands.displaymath",
    snippts: " $$ $1 $$ "
});

commands.push({
    commands: "latex-commands.item",
    snippts: "\\item "
})

export default commands;