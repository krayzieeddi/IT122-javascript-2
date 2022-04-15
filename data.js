export let cards = [
    {cardName : "goblin", manaCost : "1", attackStat : "2", defStat : "1"},
    {cardName : "wizard", manaCost : "5", attackStat : "3", defStat : "2"},
    {cardName : "barbarian", manaCost : "3", attackStat : "5", defStat : "3"},
    {cardName : "paladin", manaCost : "3", attackStat : "2", defStat : "5"},
    {cardName : "archer", manaCost : "2", attackStat : "3", defStat : "2"},
];

export const getAllCards = () => {
        return JSON.stringify(cards); 
}

export const findCard = (url) => {
        return JSON.stringify(cards.find(element => element.cardName === url.name));      
}
