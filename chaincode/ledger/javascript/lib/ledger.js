/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class Ledger extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        
        
        // var company = {};
        var price2 = 100;
        var price1 = 400;
        var margin = 500;
        var total = margin + price2+price1;
        const leds = [
            {
                company: 'pfizer',
                make: 'Fiat',
                price: price1,
                owner: 'Pari',
            },
            {
                company: 'Teleporter',
                make: 'Fiat',
                price: price1 + price2,
                owner: 'Valeria',
            },
            {
                company: 'Dispensary',
                make: 'Fiat',
                price: total,
                owner: 'Shotaro',
            },
            // {
            //     company: 'Customer',
            //     make: 'Fiat',
            //     price: total,
            //     owner: 'Shotaro',
            // },
        ];

        for (let i = 0; i < leds.length; i++) {
            leds[i].docType = 'med';
            await ctx.stub.putState('MED' + i, Buffer.from(JSON.stringify(leds[i])));
            console.info('Added <--> ', leds[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryLed(ctx, ledNumber) {
        const ledAsBytes = await ctx.stub.getState(ledNumber); // get the car from chaincode state
        if (!ledAsBytes || ledAsBytes.length === 0) {
            throw new Error(`${ledNumber} does not exist`);
        }
        console.log(ledAsBytes.toString());
        return ledAsBytes.toString();
    }

    async createLed(ctx, ledNumber, make, price, company, owner) {
        console.info('============= START : Create Car ===========');

        const car = {
            company,
            docType: 'med',
            make,
            price,
            owner,
        };

        await ctx.stub.putState(ledNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    async queryALL(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async changeLedOwner(ctx, ledNumber, newOwner) {
        console.info('============= START : changeLedOwner ===========');

        const ledAsBytes = await ctx.stub.getState(ledNumber); // get the car from chaincode state
        if (!ledAsBytes || ledAsBytes.length === 0) {
            throw new Error(`${ledNumber} does not exist`);
        }
        const car = JSON.parse(ledAsBytes.toString());
        car.owner = newOwner;

        await ctx.stub.putState(ledNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeLedOwner ===========');
    }

}

module.exports = Ledger;
