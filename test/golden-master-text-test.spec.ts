import { Item, GildedRose } from '../app/gilded-rose';
import { expect } from 'chai';

// Add a master test here
describe('Golden Master Test', function () {
    it('Sulfuras, Hand of Ragnaros testing', function() {
        const gildedRose = new GildedRose([ 
                                        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                                        new Item('Sulfuras, Hand of Ragnaros', 4, 22),
                                        new Item('Sulfuras, Hand of Ragnaros', 4, 80)                 
        ]);

        // Values expected after first update
        let expectedValuesAfterFirstUpdate :Item []= [
                                        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                                        new Item('Sulfuras, Hand of Ragnaros', 4, 22),
                                        new Item('Sulfuras, Hand of Ragnaros', 4, 80)                        
        ];

        // Values expected after second update
        let expectedValuesAfterSecondUpdate  = [
                                        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                                        new Item('Sulfuras, Hand of Ragnaros', 4, 22),
                                        new Item('Sulfuras, Hand of Ragnaros', 4, 80)                          
        ];

        // First update for Sulfuras (all values should remain the same)
        let actualValuesAfterFirstUpdate = gildedRose.updateQuality();
        expect(actualValuesAfterFirstUpdate).to.deep.equal(expectedValuesAfterFirstUpdate);

        // Second update for Sulfuras (all values should remain the same
        let actualValuesAfterSecondUpdate = gildedRose.updateQuality();
        expect(actualValuesAfterSecondUpdate).to.deep.equal(expectedValuesAfterSecondUpdate);
    });

    it('Aged Brie testing', function(){
        const gildedRose = new GildedRose([
                                        new Item('Aged Brie', 4, 80),
                                        new Item('Aged Brie', 21, 12),
                                        new Item('Aged Brie', 5, 13),
                                        new Item('Aged Brie', -6, 22),
                                        new Item('Aged Brie', -15, -43),
                                        new Item('Aged Brie', 0, 0),                           
        ]);

        // Values expected after first update
        let expectedValuesAfterFirstUpdate :Item []= [
                                        new Item('Aged Brie', 3, 80),
                                        new Item('Aged Brie', 20, 13),
                                        new Item('Aged Brie', 4, 14),
                                        new Item('Aged Brie', -7, 24),
                                        new Item('Aged Brie', -16, -41),
                                        new Item('Aged Brie', -1, 2)                          
        ];

        // Values expected after second update
        let expectedValuesAfterSecondUpdate  = [
                            new Item('Aged Brie', 2, 80),
                            new Item('Aged Brie', 19, 14),
                            new Item('Aged Brie', 3, 15),
                            new Item('Aged Brie', -8, 26),
                            new Item('Aged Brie', -17, -39),
                            new Item('Aged Brie', -2, 4)                          
        ];

        // First update
        let actualValuesAfterFirstUpdate = gildedRose.updateQuality();
        expect(actualValuesAfterFirstUpdate).to.deep.equal(expectedValuesAfterFirstUpdate);

        // Second update
        let actualValuesAfterSecondUpdate = gildedRose.updateQuality();
        expect(actualValuesAfterSecondUpdate).to.deep.equal(expectedValuesAfterSecondUpdate);
    })

    it('Backstage passes to a TAFKAL80ETC concert', function(){
        const gildedRose = new GildedRose([
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 13),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', -2, 14),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 22, 33),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 3, 24),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 14),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 12)                         
        ] );

        // Values after first update
        let expectedValuesAfterFirstUpdate :Item []= [
                                        new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', -3, 0),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 21, 34),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 2, 27),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 16),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 15)                         
        ];

        // Values expected after second update
        let expectedValuesAfterSecondUpdate = [
                            new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0),
                            new Item('Backstage passes to a TAFKAL80ETC concert', -4, 0),
                            new Item('Backstage passes to a TAFKAL80ETC concert', 20, 35),
                            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 30),
                            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 19),
                            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 18)                         
        ];

         // First update
        let actualValuesAfterFirstUpdate = gildedRose.updateQuality();
        expect(actualValuesAfterFirstUpdate).to.deep.equal(expectedValuesAfterFirstUpdate);

        // Second update
        let actualValuesAfterSecondUpdate = gildedRose.updateQuality();
        expect(actualValuesAfterSecondUpdate).to.deep.equal(expectedValuesAfterSecondUpdate);
    })
});