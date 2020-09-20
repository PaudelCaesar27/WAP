class Article {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static fullName(firstName, lastName) {
        return "My full name is "+firstName + " "+ lastName;
    }
}

let name = [
    new Article("Roshni", "Sapkota"),
    new Article("Navin", "Paudel")
];

console.log(Article.fullName("Navin", "Paudel"));
