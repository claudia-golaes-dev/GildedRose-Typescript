import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    //General tests
    it('Checking if the selling day of a product except Sulfurus modifies', function() {
        const gildedRose = new GildedRose([ new Item('Potato', 13, 12) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(12);
    });

    it('Checking once the sell by date has passed, quality degrades twice as fast, except Sulfurus', function() {
        const gildedRose = new GildedRose([ new Item('Potato', -2, 12) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(10);
    });

    it('Checking if the quality decreases once a day passes, except Sulfurus, Aged Brie and Backstage Passes', function() {
        const gildedRose = new GildedRose([ new Item('Potato', 5, 12) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);
    });

    /** 
    it('Checking if the added object exists in the inventory', function() {
        const namesList = ['Sulfuras, Hand of Ragnaros', 'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert']
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 50) ]);
        const items = gildedRose.updateQuality();
        expect(namesList).to.include(items[0].name) ;
    });
    */ 

    //Sulfurus tests
    it('Checking if the quality of Sulfurus does not modify', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    });
    
    it('Checking if the selling day of Sulfurus does not modify', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(0);
    });

    //Aged Brie tests
    it('Checking if the quality of Aged Brie increases once a day passes', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 12) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
    });

    
    

});
