//ARRAYS

const suspectsArray = [
    {
        character: "MrGreen",
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        image: "./assets/img/mr-green.jpeg",
        color: "green"
    },
    {
        character: "Dr.Orchid",
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        image: "./assets/img/orchid-crop.jpeg",
        color: "orchid"
    },
    {
        character: "ProfPlum",
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        image: "./assets/img/professor-plum.jpeg",
        color: "purple"
    },
    {
        character: "MissScarlet",
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: 31,
        image: "./assets/img/miss-scarlett.jpeg",
        color: "red"
    },
    {
        character: "MrsPeacock",
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        image: "./assets/img/mrs-peacock.jpeg",
        color: "MediumSpringGreen"
    },
    {
        character: "MrMustard",
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        image: "./assets/img/col-mustard.jpeg",
        color: "goldenrod"
    }];

const weapons = [
    {
        name: "rope",
        weight: 10
    },
    {
        name: "knife",
        weight: 8
    },
    {
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    }
];

const rooms = [
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" }
];

function getRandomNumber(array) {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
}

function pickMystery() {
    let murderer = getRandomNumber(suspectsArray);
    console.log(murderer.character);
    let murderWeapon = getRandomNumber(weapons);
    console.log(murderWeapon.name);
    let crimeScene = getRandomNumber(rooms);
    console.log(crimeScene.name);
    return [murderer, murderWeapon, crimeScene];
};

function revealMystery() {
    let mystery = pickMystery();
    console.log(mystery);
    //who killed mr.boddy with what and where?
    let colorName = document.getElementById("colorName");
    colorName.style.color = mystery[0].color;
    document.getElementById("colorName").innerHTML = mystery[0].firstName + " " + mystery[0].lastName;
    document.getElementById("reveal").innerHTML = " killed Mr.Boddy using the " + mystery[1].name + " in the " + mystery[2].name + "!";

    //create the murderer card
    let murdererCard = document.getElementById("murderer");
    murdererCard.style.backgroundColor = "#000";
    murdererCard.style.border = "15px groove silver";
    document.getElementById("pic").style.opacity = 100;
    const img = document.getElementById("pic");
    img.src = mystery[0].image;

    document.getElementById("character").innerHTML = mystery[0].character;
    let murderer = document.getElementById("character");
    murderer.style.backgroundColor = "cornsilk";
    murderer.style.borderRadius = "15px";

    let fullNameAge = document.getElementById("fullName");
    document.getElementById("fullName").innerHTML = mystery[0].firstName + " " + mystery[0].lastName + "<br></br>" + " Age: " + mystery[0].age;
    fullNameAge.style.color = "cornsilk";

    let occupation = document.getElementById("occupation");
    document.getElementById("occupation").innerHTML = mystery[0].occupation + "<br></br>  Flavor Text";
    occupation.style.backgroundColor = "cornsilk";

    //create the weapon card
    let weapon = document.getElementById("weapon");
    weapon.style.border = "15px groove silver";
    weapon.style.backgroundColor = "#000";
    document.getElementById("weapon").innerHTML = mystery[1].name;

    //create the crime scene card

    let room = document.getElementById("room");
    room.style.border = "15px groove silver";
    room.style.backgroundColor = "#000";
    document.getElementById("room").innerHTML = mystery[2].name;
};