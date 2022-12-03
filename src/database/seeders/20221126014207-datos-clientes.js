"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('cliente',
      [{
        idCliente: 1,
        "nombre": "Rodrigo",
        "email": "vwansbury0@imgur.com",
        "direccion": "795 Arizona Terrace",
        "telefono": "8811135807",
        "apellido": "Valentin Wansbury"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 2,
        "nombre": "Yessica",
        "email": "nclowsley1@nymag.com",
        "direccion": "00729 Londonderry Hill",
        "telefono": "6967631301",
        "apellido": "Nicolea Clowsley"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 3,
        "nombre": "Alexis",
        "email": "trostron2@boston.com",
        "direccion": "830 Stang Point",
        "telefono": "3623330896",
        "apellido": "Tabatha Rostron"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 4,
        "nombre": "José",
        "email": "rjillis3@123-reg.co.uk",
        "direccion": "285 Hanover Place",
        "telefono": "6276967137",
        "apellido": "Roberto Jillis"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 5,
        "nombre": "Fernando",
        "email": "rsatterly4@washingtonpost.com",
        "direccion": "6793 Kipling Hill",
        "telefono": "5803554424",
        "apellido": "Raviv Satterly"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 6,
        "nombre": "Monse",
        "email": "asutlieff5@gizmodo.com",
        "direccion": "2669 Nancy Pass",
        "telefono": "7501158802",
        "apellido": "Arlen Sutlieff"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 7,
        "nombre": "Clara",
        "email": "smcgrane6@sciencedaily.com",
        "direccion": "32294 Schurz Pass",
        "telefono": "3511843685",
        "apellido": "Sansone McGrane"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 8,
        "nombre": "Anderson",
        "email": "bmcgeneay7@cpanel.net",
        "direccion": "42 Superior Park",
        "telefono": "1669972693",
        "apellido": "Brucie McGeneay"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 9,
        "nombre": "Mauricio",
        "email": "nkorbmaker8@google.es",
        "direccion": "070 Blue Bill Park Alley",
        "telefono": "1692372689",
        "apellido": "Nara Korbmaker"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 10,
        "nombre": "Rodolfo",
        "email": "rokenfold9@symantec.com",
        "direccion": "43 Corscot Street",
        "telefono": "1827162701",
        "apellido": "Ruby Okenfold"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 11,
        "nombre": "Mónica",
        "email": "mthickinsa@japanpost.jp",
        "direccion": "20702 8th Pass",
        "telefono": "7022336568",
        "apellido": "Marlene Thickins"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 12,
        "nombre": "Margaret",
        "email": "gkeepinb@4shared.com",
        "direccion": "43785 Fordem Road",
        "telefono": "5736338252",
        "apellido": "Garrard Keepin"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 13,
        "nombre": "Cesar",
        "email": "cchristensenc@com.com",
        "direccion": "7 Jana Crossing",
        "telefono": "6687419186",
        "apellido": "Chevy Christensen"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 14,
        "nombre": "Deunicio",
        "email": "ssherwynd@alibaba.com",
        "direccion": "98384 Bultman Point",
        "telefono": "3213502151",
        "apellido": "Sianna Sherwyn"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 15,
        "nombre": "Efernic",
        "email": "cbristere@theglobeandmail.com",
        "direccion": "5 Dryden Road",
        "telefono": "8895436028",
        "apellido": "Charisse Brister"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 16,
        "nombre": "Fabiola",
        "email": "cbrinef@barnesandnoble.com",
        "direccion": "19 Kensington Hill",
        "telefono": "7122422723",
        "apellido": "Cornelle Brine"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 17,
        "nombre": "Guillermo",
        "email": "rransleyg@whitehouse.gov",
        "direccion": "971 Del Mar Street",
        "telefono": "1428474791",
        "apellido": "Raphaela Ransley"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 18,
        "nombre": "Harem",
        "email": "eleareh@wikipedia.org",
        "direccion": "24 Melody Place",
        "telefono": "3361032734",
        "apellido": "Ezri Leare"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 19,
        "nombre": "Jacinto",
        "email": "glangeleyi@japanpost.jp",
        "direccion": "61550 Arkansas Lane",
        "telefono": "1449360378",
        "apellido": "Garold Langeley"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 20,
        "nombre": "Karmen",
        "email": "rfursej@list-manage.com",
        "direccion": "276 Calypso Trail",
        "telefono": "5258698063",
        "apellido": "Ricky Furse"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 21,
        "nombre": "Zaira",
        "email": "cvenneyk@marriott.com",
        "direccion": "02 Banding Drive",
        "telefono": "9468929197",
        "apellido": "Cathie Venney"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 22,
        "nombre": "Brisa",
        "email": "aaitchisonl@reuters.com",
        "direccion": "54 Fremont Road",
        "telefono": "6788670044",
        "apellido": "Aldwin Aitchison"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        idCliente: 23,
        "nombre": "Karolina",
        "email": "rem@pals.com",
        "direccion": "20036 Stoughton Road",
        "telefono": "6845632738",
        "apellido": "Ruthie Gratrex"
        ,
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cliente', null, {
    });
  }
};
