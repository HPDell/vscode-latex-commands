interface LaTeXCommands {
    commands: string;
    snippets: string;
}

let commands: LaTeXCommands[] = new Array<LaTeXCommands>();

commands.push({
    commands: "latex-commands.inlinemath",
    snippets: "\$ $1 \$"
});

commands.push({
    commands: "latex-commands.displaymath",
    snippets: "\$\$ $1 \$\$"
});

commands.push({
    commands: "latex-commands.item",
    snippets: "\\item "
})

export default commands;