//Create a function that takes the full name and the birthdate and create the RFC based on it. Then create unit testing for this function

function generateRFC(fullName, birthdate) {
    const names = fullName.split(' ');
    const lastName = names[names.length - 1];
    const firstName = names[0];
    const date = new Date(birthdate);
    const year = date.getFullYear().toString().slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return lastName.slice(0, 2).toUpperCase() + firstName[0].toUpperCase() + year + month + day;
}