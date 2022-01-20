exports.seed = function (knex) {
  return knex('education_histories').insert(
      [
        {  client_id: 1, school_name: "Laguna Creek University",  level: "7"},
        {  client_id: 2, school_name: "Elk Creek Charter School",  level: "4"}, 
        {  client_id: 3, school_name: "Coral Coast High School",  level: "9"},
      ]
     );
};
