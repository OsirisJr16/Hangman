var programming_languages = [
    "python",
    "javascript" , 
    "mongodb",
    "sql",
    "rust",
    "c",
    "java",
    "rust" , 
    "css",
    "html",
    "julia",
    "assembleur" , 
    "csharp",
    "json",
    "golang",
    "ruby",
    "brainfuck",
    "mariadb",
    "perl",
    "scala"
]

function randomword() {
    return programming_languages[Math.floor(Math.random()*programming_languages.length)]


}

export { randomword }

