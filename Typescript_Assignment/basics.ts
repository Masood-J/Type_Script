//Q#02
let name1:string="Hassan";
console.log(`Hello ${name1}, would you like to learn some python today`)
//Q#03
let name2:string="Ahsan"
let name3:string="Danish"
console.log(name2.toUpperCase())
console.log(name2.toLowerCase())
console.log(`${name2.toUpperCase()} ${name3.toUpperCase()}`)
//Q#04
let author_name:string="Socrates"
let quote:string="To know, is to know that you know nothing. That is the meaning of true knowledge."
console.log(`${author_name}, once said: ${quote}`)
//Q#05
let famous_person:string="Socrates"
let message:string="Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family."
console.log(`${author_name} said: ${message}`)
//Q#06
let name11="\t \t Aryan \n"
console.log(`Untrimmed Name: ${name11}`)
let trim_name=name11.trim()
console.log(`Trimmed Name: ${trim_name}`)
//Q#07
console.log(4+4)
console.log(2*4)
console.log(16-8)
console.log(16/2)
//Q#09 Favourite Number
let fav_number:number=9;
console.log(`My Favourite Number Is ${fav_number}`)
//Q#10 Adding Comments
let name112="\t \t Aryan \n" //creates a name with many spaces
console.log(`Untrimmed Name: ${name11}`)
let trim_name1=name11.trim()//built in function to remove spaces or simply trim name
console.log(`Trimmed Name: ${trim_name}`)
//Q#11
let friends_array=["Syed","Hassan","Mirza","Usman"]
for(let i=0;i<4;i++){
    console.log(friends_array[i])
}
//Q#12 Print message to name
let good_msg:string="Hope You Have A Good Day"
for(let i=0;i<4;i++){
    console.log(`${good_msg}, ${friends_array[i]} `)
}
//Q#13 Array Implement Transportation
let good_msg2:string="I would like to own "
let fav_transport=["Honda","Civic","Tesla"]
for(let i=0;i<3;i++){
    console.log(`${good_msg2}, ${fav_transport[i]}, Car `)
}
//Q#14
let guest_list=["Syed","Hassan","Mirza","Usman"]
let dinner_msg="You Have Been Invited To Dinner At My House"
for(let i=0;i<4;i++){
    console.log(`${dinner_msg} , ${guest_list[i]} `)
}
//Q#15
console.log("Unfortunately Syed Can't Make It")
guest_list.shift()
guest_list.unshift("Zafar")
for(let i=0;i<4;i++){
    console.log(`${dinner_msg} , ${guest_list[i]} `)
}
//Q#16 More Guests
guest_list.push("Ahmad","Zia","Fatima")
for(let i=0;i<guest_list.length;i++){
    console.log(`${dinner_msg} , ${guest_list[i]} `)
}
//Q#17 Shrinking Guests List
console.log("We have to cut guests since new tables didn't arrive")
let shrink_array=guest_list.slice(2,4)
for(let i=0;i<shrink_array.length;i++){
    console.log(`${dinner_msg} , ${shrink_array[i]} `)
}
//Q#18
let fav_places=["Ifel Tower","The Rock Monument","China Wall","New York Monument"]
console.log(fav_places)
let sort_places=fav_places.sort()
console.log(sort_places)
let reverse_places=fav_places.reverse()
console.log(reverse_places)
console.log(fav_places)
//Q#19 Number oF Guests
console.log(`The Number Of Guests Being Invited Currently Is ${shrink_array.length}`)
//Q#20 Mountain List
let mountain_array:string[]=["k2","Everest","Himaliyas","Alps"]
console.log(mountain_array)
//Q#21 TS Objects
let mountain:{}={
k2:"second largest",
everest:"Largest",
Himaliyas:"Tourist Attraction",
Alps:"Located In Europe"
}
//Q#22 Conditional Statements
let car = 'Mustang';
let milage = 300;
let isDriving = true;
let numberOfDoors = 4;
let carColor = 'blue';

//  True Tests
console.log("Is car equal to 'Mustang'? I predict True.");
console.log(car === 'Mustang');

console.log("Is milage greater than or equal to 300? I predict True.");
console.log(milage >= 300);

console.log("Is isDriving equal to true? I predict True.");
console.log(isDriving === true);

console.log("Is numberOfDoors equal to 4? I predict True.");
console.log(numberOfDoors === 4);

console.log("Is carColor equal to 'blue'? I predict True.");
console.log(carColor === 'blue');

//False Tests
console.log("Is car equal to 'toyota'? I predict False.");
console.log(car === 'toyota');

console.log("Is age less than 25? I predict False.");
console.log(milage < 250);


console.log("Is numberOfDoors equal to 2? I predict False.");
console.log(numberOfDoors === 2);

console.log("Is carColor equal to 'red'? I predict False.");
console.log(carColor === 'red');
//Q#24 Conditional Statements Tests Using a lot of arguments
let array_cars:string[]=["mustang","lambo","Viper","Tesla"]
console.log("Is Honda Present In 'Array_Cars'? I Predict False")

let false_variable=false;
for(let i=0;i<=array_cars.length;i++){
    if("Honda"===array_cars[i]){
        false_variable=true;
    }
}
console.log(false_variable)
let milage1:number=300
if(milage>300){
    console.log("milage is greater than 300")
}
else{
    console.log("Milage is equal to 300 or lesser")
}
console.log("Is Ummar Older OR Not:")
let Ummar_age=19;
let Ammar_age=20;
if(Ummar_age>Ammar_age){
    console.log("Ummar Is Older")
}
if(Ummar_age==Ammar_age){
    console.log("Both Are Of Same Age")
}
else{
    console.log("Ummar is Not Older")
}
console.log("Does Mustang Meet Test Amount? I Predict False")
let test_horse_power=890;
let mustang_hp=700;
if(mustang_hp>=test_horse_power){
    console.log("the car hp meets test amount")
}
else{
    console.log("it doesn't meet test amount")
}
console.log("Does lambo belong in cars_array?I Predict True")
let true_variable=false
for(let i=0;i<=array_cars.length;i++){
    if("lambo"===array_cars[i]){
        true_variable=true;
    }
}
console.log(true_variable)
let required_age=20
console.log("Test To Check If Ammar Meets required age")
if(Ammar_age>required_age||Ammar_age==required_age){
    console.log("Ammar Meets Age Requirements")
}
//Q#25 Alien Colors
let alien_colour:string="green"
let game_score=0
if(alien_colour=="green"){
    game_score=game_score+5
}
if(alien_colour=="red"){
    game_score=game_score+10
}
console.log(`You Total Earned Score Is ${game_score}`)
//Q26 Alien Color P2
game_score=0
alien_colour="Red"
if(alien_colour=="green"){
    game_score=game_score+5;
}
else if(alien_colour!="green"){
    game_score=game_score+10
}
console.log(`You Total Earned Score Is ${game_score}`)
//Q27 Alien Color P3
game_score=0
if(alien_colour=="green"){
    game_score=game_score+5
}
else if(alien_colour=="yellow"){
    game_score=game_score+10
}
else if(alien_colour=="Red"){
    game_score=game_score+15
}
console.log(`You Total Earned Score Is ${game_score}`)
//Q28 Stages Of Life
let comparison_age=30
let person_age=31
if(person_age<=2){
    console.log("Person Is A Baby")
}
else if(person_age<=5 && person_age>2){
    console.log("Person IS Toddler")
}
else if(person_age>=5 && person_age<=10){
    console.log("Person Is Child")
}
else if(person_age>=10 && person_age<=18){
    console.log("Person Is Teenager")
}
else if(person_age>=18 && person_age<30){
    console.log("Person Is Young Adult")
}
else if(person_age>=30 && person_age<=45){
    console.log("Person Is Adult")
}
else if(person_age>45){
    console.log("Person Is An Elder")
}
//Q29 Favourite Fruit
let fruit_array=["Banana","Apple","Pear","Peach","Grape"]
for(let i=0;i<=fruit_array.length;i++){
    if (fruit_array[i]=="Apple"){
        console.log("you rlly like apples")
    }
}
//Q30 Hello Admin
let user_array=["admin","tahir","akhter"]
for(let i=0;i<=user_array.length;i++){
    if(user_array[i]=="admin"){
        console.log(`Welcome ${user_array[i]}`)
    }
    if(user_array[i]=="tahir"){
        console.log(`Welcome ${user_array[i]}`)
    }
    if(user_array[i]=="akhter"){
        console.log(`Welcome ${user_array[i]}`)
    }
}
//Q31 No Users
user_array=[]
if (user_array.length==0){
    console.log("we need to get more users")
}
//Q#32 Check Usernames
const current_users: string[] = ['alice', 'bob', 'charlie', 'david', 'emily'];
const new_users: string[] = ['john', 'sarah', 'CHARLIE', 'david', 'olivia'];

for (const new_user of new_users) {
  const lower_case_new_user = new_user.toLowerCase();
  if (current_users.includes(lower_case_new_user)) {
    console.log(`The username ${new_user} is already taken. Please enter a new username.`);
  } 
}
//Q#33 Ordinal Numbers
let number_ordinals=[1,2,3,4]
for(let i=0;i<=number_ordinals.length;i++){
    
    if(number_ordinals[i]==1){
        console.log(`${number_ordinals[i]}st`)
    }
    if(number_ordinals[i]==2){
        console.log(`${number_ordinals[i]}nd`)
    }
    if(number_ordinals[i]==3){
        console.log(`${number_ordinals[i]}rd`)
    }
    if(number_ordinals[i]==4){
        console.log(`${number_ordinals[i]}th`)
    }
}
//Q#34 Pizzas
let pizza_array=["Chesse Pizza","Peparoni Pizza","Tikka Pizza"]
for(let i=0;i<=pizza_array.length;i++){
    console.log(`I love ${pizza_array[i]}`)
}
console.log(`I like Chicken Or Tikka Pizzas, I don't love them like people normally do since I don't find them healthy`)
//Q#35 Animals List
let animal_array=["Eagle","Sparrow","Parrot"]
for(let i=0;i<=animal_array.length;i++){
    if (animal_array[i]=="Eagle"){
        console.log(`${animal_array[i]} are on top of food chain`)
    }
    if (animal_array[i]=="Sparrow"){
        console.log(`${animal_array[i]} are cute birds`)
    }
    if (animal_array[i]=="Parrot"){
        console.log(`${animal_array[i]} make good pets`)
    }


}
console.log("All Of these animals have wings")
//Q#36 T-Shirt Function
let size_shirt="Medium"
let message_shirt="I Love Earth"
function make_shirt(size:string,message:string){
    console.log(`Size Of Shirt Is ${size} and the message to print on it is ${message}`)
}
make_shirt(size_shirt,message_shirt)
//Q#37 Large Shirt
make_shirt("Large","I Love Typescript")
make_shirt("Medium","I Love Typescript")
//Q#38 Describe Cities
function describe_city(city:string,country:string="Pakistan"){
    console.log(`${city} Is Located In ${country}`)
}
describe_city("lahore")
describe_city("Karachi")
describe_city("Texas","USA")
//Q#39 City Names
function city_name(city:string,country:string){
    console.log(`${city},${country}`)
}
city_name("Lahore", "Pakistan")
//Q#40 Album
interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist,
      title,
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  const album1 = makeAlbum("Pink Floyd", "The Dark Side of the Moon");
  const album2 = makeAlbum("Led Zeppelin", "IV");
  const album3 = makeAlbum("Michael Jackson", "Thriller", 9);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
//Q#41 Magicians
let magicians_array=["John","Watson","Gabriel","Kevios"]
function show_magicians(Magicians:string[]){
    for(let i=0;i<Magicians.length;i++){
        console.log(Magicians[i])
    }
}
show_magicians(magicians_array)
//Q#42
function make_great(magicians:string[]){
    for(let i=0;i<magicians.length;i++){
        magicians[i]="Great" + " " + magicians[i]
    }
}
let magicians_array_old=magicians_array.slice()
make_great(magicians_array)
show_magicians(magicians_array)
//Q#43 Unchanged Array
console.log(magicians_array_old)
console.log(magicians_array)
//Q#44 Sanwiches
function sandwich_ingridients(...items:string[]){
    for (let item of items) {
        console.log("- " + item);
      }
    }
    sandwich_ingridients("lettuce","mayo","chicken")
    sandwich_ingridients("ketchup","lettuce","mustard","cucumber")
    
//Q#45 Cars
function createCar(manufacturer:string, model:string, ...options:any[]) {
    const car = {
      manufacturer,
      model,
      ...options,
    };
  
    return car;
  }
  
  const myCar = createCar("Honda", "Civic", { color: "black", sunroof: true });
  console.log(myCar);