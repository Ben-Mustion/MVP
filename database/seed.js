const faker = require('faker');
const Beers = require('./Beers');
const db = require('./index');
const review = require('./reviews');
const brewery = require('./breweries');

const zips = () => {return 94102 + Math.floor(Math.random()*50)} ;

const typeGenerator = () => {
  const types = ['IPA', 'Pale Ale', 'Stout', 'Porter', 'Brown Ale', 'Pilsner', 'Lager', 'Hefeweizen', 'Sour Ale'];
  return types[Math.floor(Math.random()*9)];
}

const sampleGenerator = () => {
  const beers = [];
  for (let i = 1; i <= 10000; i++) {
    const obj = {};
    obj.id = i;
    obj.name = faker.commerce.productName();
    obj.type = typeGenerator();
    obj.brewery = brewery.breweries[Math.floor(Math.random()*16)]
    obj.rating = Math.floor(Math.random()*5);
    if (obj.type === 'IPA') {
      obj.review = review.reviews.ipaReviews[Math.floor(Math.random()*2)]
    }
    if (obj.type === 'Pale Ale') {
      obj.review = review.reviews.paleAleReviews[Math.floor(Math.random()*2)]
    }
    if (obj.type === 'Stout') {
      obj.review = review.reviews.stoutReviews[Math.floor(Math.random()*2)]
    }
    if (obj.type === 'Porter') {
      obj.review = review.reviews.porterReviews[Math.floor(Math.random()*2)]
    }
    if (obj.type === 'Brown Ale') {
      obj.review = review.reviews.brownAleReviews[Math.floor(Math.random()*2)]
    }
    if (obj.type === 'Pilsner') {
      obj.review = review.reviews.pilsnerReviews[Math.floor(Math.random()*2)]
    }
    if (obj.type === 'Lager') {
      obj.review = review.reviews.lagerReviews[Math.floor(Math.random()*2)]
    }
    if (obj.type === 'Hefeweizen') {
      obj.review = review.reviews.hefeReviews[Math.floor(Math.random()*2)]
    }
    if (obj.type === 'Sour Ale') {
      obj.review = review.reviews.sourReviews[Math.floor(Math.random()*2)]
    }
    obj.checkInDate = faker.date.recent(2);
    obj.location = faker.company.companyName() + ' Bar';
    obj.zipCode = zips();
    beers.push(obj);
  }
  return beers;
}

const insertBeers = () => {
  Beers.create(sampleGenerator())
  .then(() => db.disconnect());
};

insertBeers();
