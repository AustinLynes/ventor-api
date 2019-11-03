
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name:'Austin Lynes',
          age:25,
          username:'XxSadPandaxX',
          password:'Neverzero124!',
          bio:'Hey Guys im a Full Stack Web developer from Bend Oregon!'
        },
        {
          name:'Kyra Lynes',
          age:22,
          password:'Dubstep15',
        }
      ]);
    });
};
