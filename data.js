export let cards = [
    {cardName : "goblin", manaCost : 1, attackStat : 2, defStat : 1},
    {cardName : "wizard", manaCost : 5, attackStat : 3, defStat : 2},
    {cardName : "barbarian", manaCost : 3, attackStat : 5, defStat : 3},
    {cardName : "paladin", manaCost : 3, attackStat : 2, defStat : 5},
    {cardName : "archer", manaCost : 2, attackStat : 3, defStat : 2},
];

export const getAllCards = () => {
        return cards; 
}

export const addCard = (name, mana, attack, def) => {

        if (name == undefined || mana == undefined || attack == undefined || def == undefined ) {
                return false;
        }

        cards.push({cardName: name, manaCost: mana, attackStat: attack, defStat: def});
}

export const removeCard = (name) => {
        let index = cards.findIndex(item => item.cardName === name); // finds the index value using the name parameter

        if (index > -1) {
                cards.splice(index, 1);
        }
        else {
                return false;
        }
}

export const findCard = (url) => {
        return cards.find(element => element.cardName === url);  // returns the object literal     
}
