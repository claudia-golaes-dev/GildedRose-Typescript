import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Unit Tests - Gilded Rose', function () {
    // General tests
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

    // Conjured Mana Cake tests
    it('Checking if the quality decreases twice once a day passes for Conjured Mana Cake', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 5, 12) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(10);
    });

    it('Checking once the sell by date has passed, quality degrades twice as fast for Conjured Mana Cake', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', -2, 12) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });


    // Sulfurus tests
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

    // Aged Brie test
    it('Checking if the quality of Aged Brie increases once a day passes', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 12) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
    });

    // Backstage passes test 
    it('Checking if the quality of the Backstage passes increases once a day passes', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 12, 12) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
    });

    it('Checking if the quality of the Backstage passes drops to 0 after the concert', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 13) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('Checking if the quality of the Backstage passes increases by 2 when 5 < sellIN <= 10', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 13) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(15);
    });

    it('Checking if the quality of the Backstage passes increases by 3 when 0 < sellIN <= 5', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 13) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(16);
    });
    

});
