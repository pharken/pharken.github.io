'use strict';

/*
const pushCartSde = function (){
    lpTag.sdes = lpTag.sdes||[];

    // cart update
    let cartUpdateEx = {
        "type":     "cart",  //MANDATORY
        "total":    11.7,  //TOTAL VALUE OF THE CART AFTER DISCOUNT
        "currency": "USD",  //CURRENCY CODE
        "numItems": 6,  //NUMBER OF ITEMS IN CART
        "products": [{
            "product":     {
                "name":     "prod1",  //PRODUCT NAME
                "category": "category",  //PRODUCT CATEGORY NAME
                "sku":      "sku",  //PRODUCT SKU OR UNIQUE IDENTIFIER
                "price":    7.8  //SINGLE PRODUCT PRICE
            }, "quantity": 1  //NUMBER OF PRODUCTS
        }]
    };

    // viewed product
    let viewProductEx = {
        "type":     "prodView",
        "currency": "USD",
        "products": [{
            "product": {
                "name":     "red high heel shoe",
                "category": "women shoes",
                "sku":      "xyz567",
                "price":    77.8
            }
        }]
    }

    // transaction
    let transactionEx = {
        "type":     "purchase",  //MANDATORY
        "total":    11.7,
        "currency": "USD",
        "orderId":  "DRV1534XC",
        "cart":     {
            "products": [
                {
                    "product":  {
                        "name":     "antivirus pro plan",
                        "category": "software",
                        "sku":      "xyz001",
                        "price":    7.8
                    },
                    "quantity": 3
                },
                {
                    "product":  {
                        "name":     "Mega phone",
                        "category": "device",
                        "sku":      "mgphne",
                        "price":    1000.01
                    },
                    "quantity": 2
                },
            ]
        }
    };

    //SDE PUSH -- instant
    //SDE SEND -- delayed
    lpTag.sdes.send(cartUpdateEx);
    lpTag.sdes.send(transactionEx);
    lpTag.sdes.send(viewProductEx);
}
*/


const cartUpdateEx = {
    "type":     "cart",  //MANDATORY
    "total":    11.7,  //TOTAL VALUE OF THE CART AFTER DISCOUNT
    "currency": "USD",  //CURRENCY CODE
    "numItems": 6,  //NUMBER OF ITEMS IN CART
    "products": [{
        "product":     {
            "name":     "prod1",  //PRODUCT NAME
            "category": "category",  //PRODUCT CATEGORY NAME
            "sku":      "sku",  //PRODUCT SKU OR UNIQUE IDENTIFIER
            "price":    7.8  //SINGLE PRODUCT PRICE
        }, "quantity": 1  //NUMBER OF PRODUCTS
    }]
};

// viewed product
const viewProductEx = {
    "type":     "prodView",
    "currency": "USD",
    "products": [{
        "product": {
            "name":     "red high heel shoe",
            "category": "women shoes",
            "sku":      "xyz567",
            "price":    77.8
        }
    }]
}

// transaction
const transactionEx = {
    "type":     "purchase",  //MANDATORY
    "total":    11.7,
    "currency": "USD",
    "orderId":  "DRV1534XC",
    "cart":     {
        "products": [
            {
                "product":  {
                    "name":     "antivirus pro plan",
                    "category": "software",
                    "sku":      "xyz001",
                    "price":    7.8
                },
                "quantity": 3
            },
            {
                "product":  {
                    "name":     "Mega phone",
                    "category": "device",
                    "sku":      "mgphne",
                    "price":    1000.01
                },
                "quantity": 2
            },
        ]
    }
};


export  {
    cartUpdateEx,
    viewProductEx,
    transactionEx
}
