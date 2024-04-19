//Create a simple function that prints a welcome message, get creative and use a custom message
function printWelcomeMessage() {
    const messages = [
        "Welcome, we've been expecting you!",
        "Greetings and salutations!",
        "Hello, it's nice to see you again!",
        "Welcome back, we missed you!",
        "Howdy, partner! Good to see you again!"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randomIndex]);
}
printWelcomeMessage();

//Use the function to print a welcome message
//node index.js