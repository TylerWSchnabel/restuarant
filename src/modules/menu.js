function menu(){
    let content = document.getElementById('content');
    let menu = document.createElement('div');
    menu.setAttribute('id',"menu");
    let menuFood = document.createElement('div');
    menuFood.className = "itemTitle";
    let foodHead = document.createElement("p");
    foodHead.className="menuHead";
    foodHead.textContent="Food";
    let foodSub = document.createElement('p');
    foodSub.className='menuSub';
    foodSub.textContent="It's your stomach...";
    let food = document.createElement("div");
    food.setAttribute('id','foodMenu');
    let anchovy = document.createElement('div');
    anchovy.setAttribute('class','item');
    let anchovyHead = document.createElement("p");
    anchovyHead.className="menuItem";
    anchovyHead.textContent="Anchovy Loaf";
    let anchovyDes = document.createElement('p');
    anchovyDes.className= "menuDes";
    anchovyDes.textContent="This combination of salty anchovies and creamy, buttery fat spread across each slice of crusty bread comes together in a way that was simply meant to be";
    let eel = document.createElement('div');
    eel.className="item";
    let eelHead = document.createElement('p');
    eelHead.className="menuItem";
    eelHead.textContent ="Eel Trovatore";
    let eelDes = document.createElement('p');
    eelDes.className= 'menuDes';
    eelDes.textContent = "Our twist on jambalaya. Pork, shrimp, rice, and our special ingredient eel, all mixed together and served piping hot and spicy";
    let devil = document.createElement('div');
    devil.className="item";
    let devilHead = document.createElement('p');
    devilHead.className='menuItem';
    devilHead.textContent = "Devil Ray Filet";
    let devilDes = document.createElement('p');
    devilDes.className="menuDes";
    devilDes.textContent = "Tender devil ray fillets are marinated in a citrus ginger marinade and baked to flaky tender perfection. p.s. ask for it deep fried in beer batter";
    let jellyfish = document.createElement('div');
    jellyfish.className="item";
    let jellyfishHead = document.createElement('p');
    jellyfishHead.className='menuItem';
    jellyfishHead.textContent = "Jellyfish Teriyaki";
    let jellyfishDes = document.createElement('p');
    jellyfishDes.className="menuDes";
    jellyfishDes.textContent="Freshly caught jellyfish fried and topped in our in house teriyaki sauce and served over rice";
    let admiral = document.createElement('div');
    admiral.className="item";
    let admiralHead=document.createElement('p');
    admiralHead.className="menuItem";
    admiralHead.textContent="Admiral's Luau";
    let admiralDes = document.createElement('p');
    admiralDes.className="menuDes";
    admiralDes.textContent="Spitfire roasted pig served with fresh pineapple, rice, and a generous portion of Spam";
    let pancakes = document.createElement('div');
    pancakes.className="item";
    let pancakesHead = document.createElement('p');
    pancakesHead.className='menuItem';
    pancakesHead.textContent = "Bigfoot's Pancakes";
    let pancakesDes = document.createElement('p');
    pancakesDes.className="menuDes" ;
    pancakesDes.textContent = "Named after hero cop Bigfoot Bjornsen and his love for pancakes. They might not be as good as his mother's, but they will still have you screaming 'Motto Pannukeiku!'"

    
    let menuDrink = document.createElement('div');
    menuDrink.className = "itemTitle";
    let drinkHead = document.createElement("p");
    drinkHead.className="menuHead";
    drinkHead.textContent="Cocktails";
    let drinkSub = document.createElement('p');
    drinkSub.className='menuSub';
    drinkSub.textContent = "You're gonna want to get good and fucked up before this meal";

    let drink = document.createElement('div');
    let dark = document.createElement('div');
    dark.className="item";
    let darkNStormyHead=document.createElement('p');
    darkNStormyHead.className="menuItem";
    darkNStormyHead.textContent="Dark 'n Stormy";
    let darkNStormyDes = document.createElement('p');
    darkNStormyDes.className= "menuDes";
    darkNStormyDes.textContent="Rum, ginger beer, simple syrup, and lime";
    let sex = document.createElement('div');
    sex.className="item";
    let sexHead =document.createElement('p');
    sexHead.className="menuItem";
    sexHead.textContent="Sex on the Beach";
    let sexDes = document.createElement('p');
    sexDes.className="menuDes";
    sexDes.textContent="Vodka, peach schnapps, orange juice, and cranberry juice";
    let tequila = document.createElement('div');
    tequila.className="item";
    let tequilaHead=document.createElement('p');
    tequilaHead.className="menuItem";
    tequilaHead.textContent="Tequila Zombie";
    let tequilaDes = document.createElement('p');
    tequilaDes.className="menuDes";
    tequilaDes.textContent="Our award winning island cocktail that is sure to put you in an undead state";

    
    menuFood.appendChild(foodHead);
    menuFood.appendChild(foodSub);
    menu.appendChild(menuFood);
    anchovy.appendChild(anchovyHead);
    anchovy.appendChild(anchovyDes);
    food.appendChild(anchovy);
    eel.appendChild(eelHead);
    eel.appendChild(eelDes);
    food.appendChild(eel);
    devil.appendChild(devilHead);
    devil.appendChild(devilDes);
    food.appendChild(devil);
    jellyfish.appendChild(jellyfishHead);
    jellyfish.appendChild(jellyfishDes);
    food.appendChild(jellyfish);
    admiral.appendChild(admiralHead);
    admiral.appendChild(admiralDes);
    food.appendChild(admiral);
    pancakes.appendChild(pancakesHead);
    pancakes.appendChild(pancakesDes);
    food.appendChild(pancakes);
    content.appendChild(food);
    menu.appendChild(food);
    
    menuDrink.appendChild(drinkHead);
    menuDrink.appendChild(drinkSub)
    menu.appendChild(menuDrink);
    dark.appendChild(darkNStormyHead);
    dark.appendChild(darkNStormyDes);
    drink.appendChild(dark);
    sex.appendChild(sexHead);
    sex.appendChild(sexDes);
    drink.appendChild(sex);
    tequila.appendChild(tequilaHead);
    tequila.appendChild(tequilaDes);
    drink.appendChild(tequila);
    menu.appendChild(drink);

    content.appendChild(menu);


}
export default menu
