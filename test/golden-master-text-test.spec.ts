import { Item, GildedRose } from '../app/gilded-rose';
import { expect } from 'chai';


// Add a master test here
describe('Golden Master Test', function () {
    it('Sulfuras, Hand of Ragnaros testing', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                                            new Item('Sulfuras, Hand of Ragnaros', 4, 22),
                                            new Item('Sulfuras, Hand of Ragnaros', 4, 80),
                       
        ] );
        // First update for Sulfuras (all values should remain the same)
        let items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);

        expect(items[1].sellIn).to.equal(4);
        expect(items[1].quality).to.equal(22);

        expect(items[2].sellIn).to.equal(4);
        expect(items[2].quality).to.equal(80);

        // Second update for Sulfuras (all values should remain the same)
        items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);

        expect(items[1].sellIn).to.equal(4);
        expect(items[1].quality).to.equal(22);

        expect(items[2].sellIn).to.equal(4);
        expect(items[2].quality).to.equal(80);
    });

    it('Aged Brie testing', function(){
        const gildedRose = new GildedRose([new Item('Aged Brie', 4, 80),
                                        new Item('Aged Brie', 21, 12),
                                        new Item('Aged Brie', 5, 13),
                                        new Item('Aged Brie', -6, 22),
                                        new Item('Aged Brie', -15, -43),
                                        new Item('Aged Brie', 0, 0),                           
        ] );

        // Values after first update
        let gildedRoseExpected :Item []= [new Item('Aged Brie', 3, 80),
                                        new Item('Aged Brie', 20, 13),
                                        new Item('Aged Brie', 4, 14),
                                        new Item('Aged Brie', -7, 24),
                                        new Item('Aged Brie', -16, -41),
                                        new Item('Aged Brie', -1, 2)                          
        ];

        // First update
        let items = gildedRose.updateQuality();
        expect(items).to.deep.equal(gildedRoseExpected);

        // Values after second update
        gildedRoseExpected = [new Item('Aged Brie', 2, 80),
                                        new Item('Aged Brie', 19, 14),
                                        new Item('Aged Brie', 3, 15),
                                        new Item('Aged Brie', -8, 26),
                                        new Item('Aged Brie', -17, -39),
                                        new Item('Aged Brie', -2, 4)                          
        ];
        items = gildedRose.updateQuality();
        expect(items).to.deep.equal(gildedRoseExpected);
    })

    it('Backstage passes to a TAFKAL80ETC concert', function(){
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 13),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', -2, 14),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 22, 33),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 3, 24),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 14),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 12)                         
        ] );

        // Values after first update
        let gildedRoseExpected :Item []= [new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', -3, 0),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 21, 34),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 2, 27),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 16),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 15)                         
        ];

        // First update
        let items = gildedRose.updateQuality();
        expect(items).to.deep.equal(gildedRoseExpected);

        // Values after second update
        gildedRoseExpected = [new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', -4, 0),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 20, 35),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 1, 30),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 19),
                                        new Item('Backstage passes to a TAFKAL80ETC concert', 3, 18)                         
        ];

        // Second update
        items = gildedRose.updateQuality();
        expect(items).to.deep.equal(gildedRoseExpected);
    })
});