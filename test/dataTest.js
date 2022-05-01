import { expect } from 'chai';
import { getAllCards, findCard, addCard, removeCard } from '../data.js'; // jumps a file lvl then imports all exported items from data.js

let cards = [
    {cardName : "goblin", manaCost : 1, attackStat : 2, defStat : 1},
    {cardName : "wizard", manaCost : 5, attackStat : 3, defStat : 2},
    {cardName : "barbarian", manaCost : 3, attackStat : 5, defStat : 3},
    {cardName : "paladin", manaCost : 3, attackStat : 2, defStat : 5},
    {cardName : "archer", manaCost : 2, attackStat : 3, defStat : 2},
];

let all =  getAllCards();

describe('testing add and find method', () => {

    let result = findCard("wizard");
    let wrongFind = findCard("sdfsdfsw");
    let wrongAdd = addCard("sdfsdf",3);

    // expect(1).to.equal(1); // this to.equal without deep keyword is simple check of primative data

    before(() => { // runs this function before any testing starts in this describe block
        addCard("troll",4,3,2);
    });

    after(() => { // runs this function after all the tests are done in this describe block
        removeCard("troll");
    });

    it('finding specific card', () => { 
        expect(result).to.deep.equal( // using the deep key word to go in-depth of JSON object
            {cardName : "wizard", manaCost : 5, attackStat : 3, defStat : 2}
        );
    });

    it('finding non-existing card', () => { 
        expect(wrongFind).to.deep.equal( 
            undefined
        );
    });

    it('Adding card', () => {
        expect(all).to.deep.equal( 
            [
                {cardName : "goblin", manaCost : 1, attackStat : 2, defStat : 1},
                {cardName : "wizard", manaCost : 5, attackStat : 3, defStat : 2},
                {cardName : "barbarian", manaCost : 3, attackStat : 5, defStat : 3},
                {cardName : "paladin", manaCost : 3, attackStat : 2, defStat : 5},
                {cardName : "archer", manaCost : 2, attackStat : 3, defStat : 2},
                {cardName : "troll", manaCost : 4, attackStat : 3, defStat : 2},
            ]
        );
    });

    it('Failure to add card', () => {
        expect(wrongAdd).to.deep.equal( 
            false
        );
    });

}); // end of outer describe 

describe('testing remove method', () => {

    let wrongRemove = removeCard("asdfs");

    before(() => {
        removeCard("paladin");
    });

    it('removing card', () => {
        expect(all).to.deep.equal( // using the deep key word to go in-depth of JSON object
            [
                {cardName : "goblin", manaCost : 1, attackStat : 2, defStat : 1},
                {cardName : "wizard", manaCost : 5, attackStat : 3, defStat : 2},
                {cardName : "barbarian", manaCost : 3, attackStat : 5, defStat : 3},
                {cardName : "archer", manaCost : 2, attackStat : 3, defStat : 2},
            ]
        );
    });

    it('failng to removing card', () => {
        expect(wrongRemove).to.deep.equal( // using the deep key word to go in-depth of JSON object
            false
        );
    });
    
}); // ending of 2nd describe 





