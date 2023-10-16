
const hero = [
  {
    id: 1,
    name: "Magiccp",
    age: 33,
    class: "Mago",
    weapon: "Magia",
  },
  {
    id: 2,
    name: "Mongepqd",
    age: 32,
    class: "Monge",
    weapon: "Bastão",
  },
  {
    id: 3,
    name: "Ninjaftz",
    age: 31,
    class: "Ninja",
    weapon: "Kunai",
  },
  {
    id: 4,
    name: "Guerreirophp",
    age: 30,
    class: "Guerreiro",
    weapon: "Espada",
  },
];

function classattack(classe, ataque) {
  if (classe == "Mago" && ataque == "Magia") {
    return console.log(`o ${classe} atacou usando ${ataque}`);
  } 
  else if (classe == "Monge" && ataque == "Bastão") {
    return console.log(`o ${classe} atacou usando ${ataque}`);
  } 
  else if (classe == "Ninja" && ataque == "Kunai") {
    return console.log(`o ${classe} atacou usando ${ataque}`);
  }
   else if (classe == "Guerreiro" && ataque == "Espada") {
    return console.log(`o ${classe} atacou usando ${ataque}`);
  }
}
classattack(hero[0].class,hero[0].weapon)
classattack(hero[1].class,hero[1].weapon)
classattack(hero[2].class,hero[2].weapon)
classattack(hero[3].class,hero[3].weapon)
