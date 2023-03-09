const BASIC = 1;
const ADVANCED = 2;
const COMPLEX = 3;
const EXPERT = 4;
const MASTER = 5;
const INDUSTRIAL = 6;

const COMMON = 7;
const UNCOMMON = 8;
const RARE = 9;
const EPIC = 10;
const LEGENDARY = 11;
const MYTHIC = 12;
const DIVINE = 13;

//constructor
function Machine(name, desc, power, grade) {
    this.name = name;
    this.desc = desc;
    this.power = power;
    this.grade = grade;
}

function FuelTank(name, desc, rating, grade) {
    this.name = name;
    this.desc = desc;
    this.rating = rating;
    this.grade = grade;
}

function Extension(name, desc, power, grade) {
    this.name = name;
    this.desc = desc;
    this.power = power;
    this.grade = grade;
}

function Resource(name, desc, rarity){
    this.name = name;
    this.desc = desc;
    this.rarity = rarity;
}

function Synthesizer(name, desc, power){
    this.name = name;
    this.desc = desc;
    this.power = power;
}

function Biotech(name, desc, power){
    this.name = name;
    this.desc = desc;
    this.power = power;
}

//resources
var stone = new Resource("Stone", "The most basic resource.", COMMON);
var iron = new Resource("Iron", "A basic metal used to make machines.", COMMON);
var copper = new Resource("Copper", "", COMMON);
var gold = new Resource("Gold", "A useful resource for building that seems to also be a currency.", UNCOMMON);
