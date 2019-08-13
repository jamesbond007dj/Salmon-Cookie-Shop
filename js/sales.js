'use strict';

// Declare work hours
var hoursWork = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm']

// First store (pike) object
var storePike = {
    location: '1st and Pike',
    maxCustomer: 65,
    minCustomer: 23,
    avgCookiePerSale: 6.3,
    totalHoursWork: 14,
    totalCookieSales: 0,
    storeSales: [],

    salesDaily: function() {
        for (var i = 0; i<this.totalHoursWork; i++ ) {
            var randomSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) * this.averageCookiePerSale + this.minCustomer);
            this.storeSales.push(randomSales);
            
        }
    },

    calculateDailyTotal: function () {
        for (var i = 0 ; i < this.storeSales.length; i++) {
            this.totalCookieSales += this.storeSales[i];
        }
    },
    populateLocation: function () {
        var newText = document.createTextNode(this.location);
        var position = document.getElementsByTagName('1h')[this.objectNumber];
        position.appendChild(newText);
    },
    populateSales: function() {
        for (var i = 0; i < this.storeSales.length; i++ ) {
            var newElement = document.createElement('li');
            var newText = document.createTextNode(this.storeSales[i]);
            newElement.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newElement);

        }
    }


};

var storeSeatec = {
    location: 'SeaTac Airport',
    maxCustomer: 24,
    minCustomer: 3,
    averageCookiePerSale: 1.2,
    totalHoursWork: 14,
    totalCookieSales: 0,
    storeSales: [],

    salesDaily: function () {
        for ( var i = 0 ; i < this.totalHoursWork ; i++) {
            var randomSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1 ) * this.averageCookiePerSale + this.minCustomer);
            this.storeSales.push(randomSales);
        }
    },
    calculateDailyTotal: function () {
        for (var i = 0 ; i < this.storeSales.length; i++) {
            this.totalCookieSales += this.storesSales [i];
        }
    },
    populateLocation: function () {
        var newText = document.createTextNode(this.location);
        var position = document.getElementsByTagName('1h')[this.objectNumber];
        position.appendChild(newText);
    },
    populateSales : function () {
        for (var i = 0 ; i < this.storeSales.length; i++) {
            var newElement = document.createElement('li');
            var newText = document.createTextNode(this.storesSales[i]);
            newElement.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newElement);
        }
    }
};

var storeSeattle = {
    location: 'Seattle Center',
    maxCustomer: 38, 
    minCustomer: 11,
    averageCookiePerSale: 3.7,
    totalHoursWork: 14, 
    totalCookieSales : 0,
    storeSales: [],

    salesDaily : function () {
        for (var i = 0 ; i < this.totalHoursWork ; i++ ) {
            var randomSales = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) * this.averageCookiePerSale + this.minCustomer);
            this.storeSales.push(randomSales);

        }
    },

    calculateDailyTotal : function () {
        for (var i = 0 ; i < this.storeSales.length; i++) {
            this.totalCookieSales += this.storeSales [i];

        }   
    },

    populateLocation: function () {
        var newText = document.createTextNode(this.location);
        var position = document.getElementsByTagName('1h')[this.objectNumber];
        position.appendChild(newText);
    },
    populateSales : function () { 
        for (var i = 0; i < this.storeSales.length; i++) {
            var newElement = document.createElement('li');
            var newText = document.createTextNode(this.storeSales[i]);
            newElement.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newElement);
        }
        
    } 

};
var storeCapitol = {
    location: 'Capitol Hill',
    maxCustomer: 38,
    minCustomer: 20,
    averageCookiePerSale: 2.3,
    totalHoursWork: 14,
    totalCookieSales: 0,
    storeSales: [],

    salesDaily: function () {
        for (var i = 0; i< this.totalHoursWork; i++) {
             var randomSales = Math.floor(math.random() * (this.maxCustomer - this.minCustomer + 1 ) * this.averageCookiePerSale + this.minCustomer);
             this.storeSales.push(randomSales);

        }
    },
    calculateDailyTotal: function () {
        for (var i = 0; i < this.storeSales.length; i++) {
            this.totalCookieSales +=this.storesSales [i];
        }
    },
    populateLocation : function () {
        var newText = document.createTextNode(this.location);
        var position = document.getElementsByTagName('1h')[this.objectNumber];
        position.appendChild(newText);

    },
    populateSales: function () {
        for (var i = 0 ; i < this.storeSales.length; i++) {
            var newElement = document.createElement('li');
            var newText = document.createTextNode(this.storeSales[i]);
            newElement.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newElement);
        }
    }

}; var storeAlki ={
    location: 'Alki',
    maxCustomer: 16,
    minCustomer: 2,
    avgCookiePerSale: 4.6,
    totalHoursWork: 14,
    totalCookieSales: 0,
    storeSales: [],

    salesDaily: function () {
        for (var i = 0; i < this.totalHoursWork; i++);
            var randomSales = Math.floor(math.random() * (this.maxCustomer - this.minCustomer + 1 ) * this.averageCookiePerSale + this.minCustomer);
            this.storeSales.push(randomSales);

    },
    calculateDailyTotal: function () {
        for (var i = 0 ; i < this.storeSales.length; i++) {
            this.totalCookieSales += this.storeSales[i];
        }
    },
    populateLocation: function () {
        var newText = document.createTextNode(this.location);
        var position = document.getElementsByTagName('1h');
        position.appendChild(newText);
    },
    populateSales : function () {
        for (var i = 0; i < this.storeSales.length; i++) {
            var newElement = document.createElement('li');
            var newText = document.createTextNode(this.storeSales[i]);
            newElement.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newElement);
        }
    }

};

//results

storePike.salesDaily();
storeSeatec.salesDaily();
storeSeattle.salesDaily();
storeCapitol.salesDaily();
storeAlki.salesDaily();

storePike.calculateDailyTotal();
storeSeatec.calculateDailyTotal();
storeSeattle.calculateDailyTotal();
storeCapitol.calculateDailyTotal();
storeAlki.calculateDailyTotal();

storePike.populateLocation();
storeSeatec.populateLocation();
storeSeattle.populateLocation();
storeCapitol.populateLocation();
storeAlki.populateLocation();

storePike.populateSales();
storeSeatec.populateSales();
storeSeattle.populateSales();
storeCapitol.populateSales();
storeAlki.populateSales();