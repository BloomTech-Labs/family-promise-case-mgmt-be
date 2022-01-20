exports.seed = function (knex) {
  return knex('phone_numbers').insert(
      [
        {  client_id: 1, number: "9024240242", phone_type: "CELL" }, 
        {  client_id: 2, number: '4234324236', phone_type: "CELL" }, 
        {  client_id: 3, number: "4324527585", phone_type: "CELL" },       
      ]
     );
};
