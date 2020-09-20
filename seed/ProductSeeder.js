var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/grocery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var products = [
    new Product({
        imagePath: '/images/product-1.jpg',
        title: 'Cheerios',
        price: 75,
        type: 1,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n: 0,
        rating: 0,
        total: 0
    }),
    new Product({
        imagePath: '/images/product-2.jpg',
        title: 'Chips',
        price: 100,
        type: 1,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n: 0,
        rating: 0,
        total: 0
    }),
    new Product({
        imagePath: '/images/product-3.jpg',
        title: 'Cookies',
        price: 100,
        type: 1,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n: 0,
        rating: 0,
        total: 0

    }),


    new Product({
        imagePath: '/images/product-4.jpg',
        title: 'Dorritos Dip',
        price: 120,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n: 0,
        rating: 0,
        total: 0

    }),
    new Product({
        imagePath: '/images/product-5.jpg',
        title: 'Fruits',
        price: 120,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n: 0,
        rating: 0,
        total: 0

    }),
    new Product({
        imagePath: '/images/product-6.jpg',
        title: 'Milk',
        price: 120,
        type: 2,
        r1: 1,
        r2: 2,
        r3: 3,
        r4: 4,
        r5: 5,
        n: 0,
        rating: 0,
        total: 0

    })

];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length)
            exit();

    });
}

function exit() {
    mongoose.disconnect();
}