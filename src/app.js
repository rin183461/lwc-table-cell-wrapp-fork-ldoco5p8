import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    get productArray() {
        let samples = [
            {
                family: 'Family 1',
                assetName: 'Name 1',
                assetType: 'Type 1'
            },
            {
                family: 'Family 1',
                assetName: 'Name 2',
                assetType: 'Type 2'
            },
            {
                family: 'Family 1',
                assetName: 'Name 3',
                assetType: 'Type 3'
            },
            {
                family: 'Family 2',
                assetName: 'Name 4',
                assetType: 'Type 4'
            },
            {
                family: 'Family 2',
                assetName: 'Name 5',
                assetType: 'Type 5'
            },
            {
                family: 'Family 3',
                assetName: 'Name 6',
                assetType: 'Type 6'
            }
        ];

        let groupedDataMap = new Map();
        samples.forEach(product => {
            if (groupedDataMap.has(product.family)) {
                groupedDataMap.get(product.family).products.push(product);
            } else {
                let newProduct = {};
                newProduct.family = product.family;
                newProduct.products = [product];
                groupedDataMap.set(product.family, newProduct);
            }
        });

        let itr = groupedDataMap.values();
        let productArray = [];
        let result = itr.next();
        while (!result.done) {
            result.value.rowspan = result.value.products.length + 1;
            productArray.push(result.value);
            result = itr.next();
        }
        return productArray;
    }
}
