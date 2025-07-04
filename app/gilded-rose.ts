export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    // Added functions 
    increaseQuality(index: number, value: number = 1) {
        if(this.items[index].quality < 50) {
            this.items[index].quality += value;
        }
    }

    decreaseQuality(index: number, value: number = 1) {
        if(this.items[index].quality > 0) {
            this.items[index].quality -= value;
        }
    }

    decreaseSellIn(index:number) {
        this.items[index].sellIn -= 1;
    }

    updateQuality() {
        const namesList = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert'];

        // Added another condition in the for loop: to ignore Sulfuras, because its value does not modify
        for (let i = 0; i < this.items.length && this.items[i].name != 'Sulfuras, Hand of Ragnaros'; i++) {
            const checkIfAgedBrie = this.items[i].name == 'Aged Brie';
            const checkIfBackstagePasess = this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert';
            const sellDate = this.items[i].sellIn;

            // Checking quality for a normal product
            if(!checkIfAgedBrie && !checkIfBackstagePasess) {
                if (sellDate > 0) {
                    this.decreaseQuality(i);
                } else {
                    this.decreaseQuality(i, 2);
                }
                this.decreaseSellIn(i);
            } else if (checkIfAgedBrie) {
                if (sellDate > 0){
                    this.increaseQuality(i);
                }
                this.decreaseSellIn(i);
                if (sellDate <= 0) {
                    this.increaseQuality(i, 2);
                }
            } else if(checkIfBackstagePasess) {
                this.decreaseSellIn(i);
                if (sellDate > 10) {
                    this.increaseQuality(i);
                } else if (sellDate > 5) {
                    this.increaseQuality(i, 2);
                } else if (sellDate > 0) {
                    this.increaseQuality(i, 3);
                } else {
                    this.items[i].quality = 0;
                }
            }
        }
        return this.items;
    }
}
