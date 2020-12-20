var koh = document.getElementById("koh").innerHTML;
var hass = document.getElementById("hass").innerHTML;
var muri = document.getElementById("muri").innerHTML;
var cham = document.getElementById("cham").innerHTML;
var health_koh = Number(document.getElementById("health_koh").innerHTML);
var health_hass = Number(document.getElementById("health_hass").innerHTML);
var health_muri = Number(document.getElementById("health_muri").innerHTML);
var health_cham = Number(document.getElementById("health_cham").innerHTML);
var alpha = document.getElementById("alpha").innerHTML;
var beta = document.getElementById("beta").innerHTML;
var gamma = document.getElementById("gamma").innerHTML;
var choice = "";
let i = "";
var next_move = 1;
var selected_monster = ["none", "none"];
var hero_defence = [false, false, false, false];
hero_next_move(Hero_move, koh, hass, muri, cham, health_koh, health_hass, health_muri, health_cham, hero_defense);


function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function tri(x, y) {
    return x - y;
}

function attack(selected_monster, next_move, koh, hass, muri, cham, health_alpha, health_beta, health_gamma, hero_defense){
    document.getElementById("attack").innerHTML=("Attack");
    setTimeout(() => {document.getElementById("attack").innerHTML=("Attack");}, 250);
    if (selected_monster[0] == "none"){
        document.getElementById("message").innerHTML=("Select the monster");
    }
    else {
        var attack_power = random(20,30);
        selected_monster[1] = selected_monster[1] - attack_power;
        document.getElementById("message").innerHTML=("You deal"attack_power+"damage at"+selected_monster[0]);
        if (selected_monster[0] == alpha){
            document.getElementById("health_alpha").innerHTML=(selected_monster[1]);
            health_alpha = selected_monster[1]
        } if (selected_monster[0] == beta){
            document.getElementById("health_beta").innerHTML=(selected_monster[1]);
            health_beta = selected_monster[1]
        } if (selected_monster[0] == gamma){
            document.getElementById("health_gamma").innerHTML=(selected_monster[1]);
            health_gamma = selected_monster[1]
    }
        setTimeout(() => {hero_next_move(Hero_move, koh, hass, muri, cham, health_koh, health_hass, health_muri, health_cham, hero_defence);}, 2500);
    }
    return (next_move)
}

function defense(selected_monster, next_move, koh, hass, muri, cham, hero_defense){
    document.getElementById("defense").innerHTML=("Defense");
    setTimeout(() => {document.getElementById("defense").innerHTML=("Defense");}, 250);

    if (selected_monster[0] == "none"){
        document.getElementById("message").innerHTML=("Select the monster");
        hero_defense = [false, false, false, false];
    } else {
        if (next_move == 1){
            document.getElementById("message").innerHTML=(koh+"defend himself");
            hero_defense[0] = true;
        } if (next_move == 2){
            document.getElementById("message").innerHTML=(hass+"defend himself");
            hero_defense[1] = true;
        } if (next_move == 3){
            document.getElementById("message").innerHTML=(muri+"defend himself");
            hero_defense[2] = true;
        } if (next_move == 4){
            document.getElementById("message").innerHTML=(cham+"defend himself");
            hero_defense[3] = true;
    }
        next_move = next_move + 1;
        setTimeout(() => {hero_next_move(Hero_move, koh, hass, muri, cham, health_koh, health_hass, health_muri, health_cham, hero_defence);}, 2500);
    }
    return (hero_defense);
}

function Alpha(alpha){
    var health_alpha = Number(document.getElementById("health_alpha").innerHTML);
    var selected_monster = [alpha, health_alpha];
    if (selected_monster[1] > 0){
        document.getElementById("message").innerHTML = ("Target " + bossChoisi[0] + ".");
    } else{
        document.getElementById("message").innerHTML = (selected_monster[0] + " is dead");
        selected_monster[0] = "none";
    }
    return selected_monster;
}

function Beta(beta){
    var health_beta = Number(document.getElementById("health_beta").innerHTML);
    var selected_monster = [beta, health_beta];
    if (selected_monster[1] > 0){
        document.getElementById("message").innerHTML = ("Target " + selected_monster[0] + ".");
    } else{
        document.getElementById("message").innerHTML = (selected_monster[0] + " is dead");
        selected_monster[0] = "none";
    }
    return selected_monster;
}

function Gamma(gamma){
    var health_gamma = Number(document.getElementById("health_gamma").innerHTML);
    var selected_monster = [gamma , health_gamma];
    if (selected_monster[1] > 0){
        document.getElementById("message").innerHTML = ("Target " + selected_monster[0] + ".");
    } else{
        document.getElementById("message").innerHTML = (selected_monster[0] + " is dead");
        selected_monster[0] = "none";
    }
    return selected_monster;
}
    
function hero_next_move(Hero_move, koh, hass, muri, cham, health_koh, health_hass, health_muri, health_cham, hero_defense);{
                      
    if (next_move == 1){
        if (health_koh <= 0) {
            next_move = next_move + 1
    }
                     }
    if (next_move == 2){
        if (health_hass <= 0) {
            next_move = next_move + 1
     }
                     }
    if (next_move == 3){
        if (health_muri <= 0) {
            next_move = next_move + 1
    }
                     }
    if (next_move == 4){
        if (health_cham <= 0) {
            next_move = next_move + 1
    }
                     }
    if (next_move == 5){
        console.log("Monster turn")
        monster_turn(koh, hass, muri, cham, health_koh, health_hass, health_muri, health_cham, alpha, beta, gamma, hero_defense);
        next_move = 1
        hero_next_move(Hero_move, koh, hass, muri, cham, health_koh, health_hass, health_muri, health_cham, hero_defense);
        console.log("Hero turn " + next_move)
    }
}

function monster_turn(koh, hass, muri, cham, health_koh, health_hass, health_muri, health_cham, alpha, beta, gamma, hero_defense){

var alpha_damage = random(10,20);
var beta_damage = random(10,20);
var gamma_damage = random(10,20);

var Heroes = [koh, hass, muri, cham];
var selected_koh = Heroes[random(0,3)]
var selected_hass = Heroes[random(0,3)]
var selected_muri = Heroes[random(0,3)]

if (selected_koh == koh){
if (hero_defense[0] == true){
health_koh = health_koh - Math.round((alpha_damage/2));
} else {
health_koh = health_koh - alpha_damage;
}
} if (selected_koh == hass){
if (hero_defense[1] == true){
health_hass = health_hass - Math.round((alpha_damage/2));
} else {
health_hass = health_hass - alpha_damage;
}
} if (selected_koh == muri){
if (hero_defense[2] == true){
health_muri = health_muri - Math.round((alpha_damage/2));
} else {
health_muri = health_muri - alpha_damage;
}
} if (selected_koh == cham){
if (hero_defense[3] == true){
health_cham = health_cham - Math.round((alpha_damage/2));
} else {
health_cham = health_cham - alpha_damage;
}
} if (selected_hass == koh){
if (hero_defense[0] == true){
health_koh = health_koh - Math.round((beta_damage/2));
} else {
health_koh = health_koh - beta_damage;
}
} if (selected_hass == hass){
if (hero_defense[1] == true){
health_hass = health_hass - Math.round((beta_damage/2));
} else {
health_hass = health_hass - beta_damage;
}
} if (selected_hass == muri){
if (hero_defense[2] == true){
health_muri = health_muri - Math.round((beta_damage/2));
} else {
health_muri = health_muri - beta_damage;
}
} if (selected_hass == cham){
if (hero_defense[3] == true){
health_cham = health_cham - Math.round((beta_damage/2));
} else {
health_cham = health_cham - beta_damage;
}
} if (selected_muri == koh){
if (hero_defense[0] == true){
health_koh = health_koh - Math.round((gamma_damage/2));
} else {
health_koh = health_koh - gamma_damage;
}
} if (selected_muri == hass){
if (hero_defense[1] == true){
health_hass = health_hass - Math.round((gamma_damage/2));
} else {
health_hass = health_hass - gamma_damage;
}
} if (selected_muri == muri){
if (hero_defense[2] == true){
health_muri = health_muri - Math.round((gamma_damage/2));
} else {
health_muri = health_muri - gamma_damage;
}
} if (selected_muri == cham){
if (hero_defense[3] == true){
health_cham = health_cham - Math.round((gamma_damage/2));
} else {
health_cham = health_cham - gamma_damage;
}
}

document.getElementById("health_koh").innerHTML=health_koh;
document.getElementById("health_hass").innerHTML=health_hass;
document.getElementById("health_muri").innerHTML=health_muri;
document.getElementById("health_cham").innerHTML=health_cham;

setTimeout(()=>{document.getElementById("message").innerHTML=(alpha+"deal"+ alpha_damage+"damage");},1);
setTimeout(()=>{document.getElementById("message").innerHTML=(beta+"deal"+ beta_damage+"damage");},2000);
setTimeout(()=>{document.getElementById("message").innerHTML=(gamma+"deal"+ gamma_damage+"damage");},4000);
}