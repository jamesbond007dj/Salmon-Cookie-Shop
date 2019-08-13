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
        var position = document.getElementsByTagName('1h')[this.obejectNumber];
        position.appendChild(newText);
    },
    populateSales: function() {
        for (var i = 0; i < this.storeSales.length; i++ ) {
            var newElement = doctument.createElement('li');
            var newText = document.createTextNode(this.storeSales[i]);
            newElement.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newElement);

        }
    }


};