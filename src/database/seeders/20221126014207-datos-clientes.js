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
      }, {
        idCliente: 2,
        "nombre": "Yessica",
        "email": "nclowsley1@nymag.com",
        "direccion": "00729 Londonderry Hill",
        "telefono": "6967631301",
        "apellido": "Nicolea Clowsley"
      }, {
        idCliente: 3,
        "nombre": "Alexis",
        "email": "trostron2@boston.com",
        "direccion": "830 Stang Point",
        "telefono": "3623330896",
        "apellido": "Tabatha Rostron"
      }, {
        idCliente: 4,
        "nombre": "José",
        "email": "rjillis3@123-reg.co.uk",
        "direccion": "285 Hanover Place",
        "telefono": "6276967137",
        "apellido": "Roberto Jillis"
      }, {
        idCliente: 5,
        "nombre": "Fernando",
        "email": "rsatterly4@washingtonpost.com",
        "direccion": "6793 Kipling Hill",
        "telefono": "5803554424",
        "apellido": "Raviv Satterly"
      }, {
        idCliente: 6,
        "nombre": "Monse",
        "email": "asutlieff5@gizmodo.com",
        "direccion": "2669 Nancy Pass",
        "telefono": "7501158802",
        "apellido": "Arlen Sutlieff"
      }, {
        idCliente: 7,
        "nombre": "Clara",
        "email": "smcgrane6@sciencedaily.com",
        "direccion": "32294 Schurz Pass",
        "telefono": "3511843685",
        "apellido": "Sansone McGrane"
      }, {
        idCliente: 8,
        "nombre": "Anderson",
        "email": "bmcgeneay7@cpanel.net",
        "direccion": "42 Superior Park",
        "telefono": "1669972693",
        "apellido": "Brucie McGeneay"
      }, {
        idCliente: 9,
        "nombre": "Mauricio",
        "email": "nkorbmaker8@google.es",
        "direccion": "070 Blue Bill Park Alley",
        "telefono": "1692372689",
        "apellido": "Nara Korbmaker"
      }, {
        idCliente: 10,
        "nombre": "Rodolfo",
        "email": "rokenfold9@symantec.com",
        "direccion": "43 Corscot Street",
        "telefono": "1827162701",
        "apellido": "Ruby Okenfold"
      }, {
        idCliente: 11,
        "nombre": "Mónica",
        "email": "mthickinsa@japanpost.jp",
        "direccion": "20702 8th Pass",
        "telefono": "7022336568",
        "apellido": "Marlene Thickins"
      }, {
        idCliente: 12,
        "nombre": "Margaret",
        "email": "gkeepinb@4shared.com",
        "direccion": "43785 Fordem Road",
        "telefono": "5736338252",
        "apellido": "Garrard Keepin"
      }, {
        idCliente: 13,
        "nombre": "Cesar",
        "email": "cchristensenc@com.com",
        "direccion": "7 Jana Crossing",
        "telefono": "6687419186",
        "apellido": "Chevy Christensen"
      }, {
        idCliente: 14,
        "nombre": "Deunicio",
        "email": "ssherwynd@alibaba.com",
        "direccion": "98384 Bultman Point",
        "telefono": "3213502151",
        "apellido": "Sianna Sherwyn"
      }, {
        idCliente: 15,
        "nombre": "Efernic",
        "email": "cbristere@theglobeandmail.com",
        "direccion": "5 Dryden Road",
        "telefono": "8895436028",
        "apellido": "Charisse Brister"
      }, {
        idCliente: 16,
        "nombre": "Fabiola",
        "email": "cbrinef@barnesandnoble.com",
        "direccion": "19 Kensington Hill",
        "telefono": "7122422723",
        "apellido": "Cornelle Brine"
      }, {
        idCliente: 17,
        "nombre": "Guillermo",
        "email": "rransleyg@whitehouse.gov",
        "direccion": "971 Del Mar Street",
        "telefono": "1428474791",
        "apellido": "Raphaela Ransley"
      }, {
        idCliente: 18,
        "nombre": "Harem",
        "email": "eleareh@wikipedia.org",
        "direccion": "24 Melody Place",
        "telefono": "3361032734",
        "apellido": "Ezri Leare"
      }, {
        idCliente: 19,
        "nombre": "Jacinto",
        "email": "glangeleyi@japanpost.jp",
        "direccion": "61550 Arkansas Lane",
        "telefono": "1449360378",
        "apellido": "Garold Langeley"
      }, {
        idCliente: 20,
        "nombre": "Karmen",
        "email": "rfursej@list-manage.com",
        "direccion": "276 Calypso Trail",
        "telefono": "5258698063",
        "apellido": "Ricky Furse"
      }, {
        idCliente: 21,
        "nombre": "Zaira",
        "email": "cvenneyk@marriott.com",
        "direccion": "02 Banding Drive",
        "telefono": "9468929197",
        "apellido": "Cathie Venney"
      }, {
        idCliente: 22,
        "nombre": "Brisa",
        "email": "aaitchisonl@reuters.com",
        "direccion": "54 Fremont Road",
        "telefono": "6788670044",
        "apellido": "Aldwin Aitchison"
      }, {
        idCliente: 23,
        "nombre": "Karolina",
        "email": "rem@pals.com",
        "direccion": "20036 Stoughton Road",
        "telefono": "6845632738",
        "apellido": "Ruthie Gratrex"
      }]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cliente', null, {});
  }
};
