import { input } from '@inquirer/prompts';
//Game Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let enemie_type = ["Zombie", "Undead", "Ogre", "Demons"];
let enemy_max_health = 80;
let attack_damage_enemy = Math.floor(Math.random() * 20) + 10;
let player_score = 0;
//Player Variables
let health = 80;
let health_potions = 4;
let health_potion_heal = 40;
let health_potion_drop_chance = 50;
let running = true;
console.log("Welcome To The Dark Woods");
GAME: while (running) {
    console.log("...................................");
    let enemy_health = Math.floor(Math.random() * 80) + 1;
    let enemy = enemie_type[Math.floor(Math.random() * enemie_type.length - 1) + 1];
    console.log(`# ${enemy} has appeared!! #`);
    GAME2: while (enemy_health > 0) {
        console.log(`Your Hp:${health}`);
        console.log(`${enemy}'s Hp:${enemy_health}`);
        console.log("What Would You Like To Do?");
        console.log("1.Attack");
        console.log("2.Drink Health Potion");
        console.log("3.Run!");
        const selection = await input({
            message: 'Select Your Choice'
        });
        if (selection == "1") {
            let attack_damage = Math.floor(Math.random() * 10) + 30;
            let damage_taken = attack_damage_enemy;
            enemy_health -= attack_damage;
            health -= damage_taken;
            console.log(`You Struck The Enemy For DMG:${attack_damage}`);
            console.log(`Enemy Struck You For Damage DMG:${damage_taken}`);
            if (health < 1) {
                console.log(`Your Player Can't Go Any Longer`);
            }
        }
        else if (selection == "2") {
            if (health_potions > 0) {
                health += health_potion_heal;
                health_potions--;
                console.log(`You Healed For Amount:${health_potion_heal}HP ` +
                    `Your Current Health Now Is ${health}` +
                    `The Amount Of Potions You Have Left Are ${health_potions} `);
            }
            else {
                console.log("You Have Ran Out Of Health Potions!!");
            }
        }
        else if (selection == "3") {
            console.log(`You Decided To Run Away From Your Oponent!`);
            continue GAME;
        }
        else {
            console.log(`Invalid Option`);
            break;
        }
    }
    if (health < 1) {
        console.log(`You Were Very Weak And Barely Made It Out OF The Dungeon`);
        break;
    }
    console.log("...................................");
    console.log(`You Defeated The Enemy ${enemy}`);
    console.log(`Your Current HP Is:${health}`);
    player_score = player_score + 10;
    if (Math.floor(Math.random() * 100) + 1 < health_potion_drop_chance) {
        health_potions++;
        console.log(`The Enemy Dropped A Potion!! \n You Pick It Up \n Your Current Potions Are ${health_potions}`);
    }
    console.log("...................................");
    console.log(`What Would You Like To Do Now?`);
    console.log(`1.Keep Fighting`);
    console.log(`2.Exit The Dungeon`);
    let selection_2 = await input({
        message: 'Select Your Choice'
    });
    while (selection_2 != "1" && selection_2 != "2") {
        console.log(`Wrong Choice Please Try Again!`);
        selection_2 = await input({
            message: 'Select Your Choice'
        });
    }
    if (selection_2 == "1") {
        console.log(`You Decide To Continue Fighting`);
    }
    else if (selection_2 == "2") {
        console.log(`You Successfully Escape The Dungeon, Success!!`);
        break;
    }
}
console.log(`YOUR SCORE WAS ${player_score}`);
console.log("#######################");
console.log("# THANKS FOR PLAYING #");
console.log("#######################");
