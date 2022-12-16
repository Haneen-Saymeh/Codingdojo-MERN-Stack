// The import line will look different than what is in Faker's documentation
// because we are working with an express application

const express = require("express");
const app = express();
const port=8000;
app.listen( port, () => console.log(`Listening on port: ${port}`) );


const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName:  faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber:faker.phone.number(),
    };
    return newUser;
};

const newFakeUser = createUser();
console.log(newFakeUser);


const createCompany = () => {
    const newCompany = {
        name: faker.company.name(),
        city:  faker.address.city(),
        street: faker.address.street(),
        state: faker.address.state(),
        zipCode:faker.address.zipCode(),
        country:faker.address.country()
    };
    return newCompany;
};

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});


app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});


app.get("/api/user/company", (req, res) => {
    const user= createUser();
    const  company= createCompany();
    const userandcompany={
        user: user,
        company:company,
    }

    res.json(userandcompany);
});
