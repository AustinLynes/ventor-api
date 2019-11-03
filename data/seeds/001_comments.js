
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          post_id:1,
          user_id:2,
          content:'oh yeah, was it??'
        },
        {
          post_id:1,
          user_id:1,
          content:'yeah, it was the day i married you!'
        },
        {
          post_id:2,
          user_id:1,
          content:'Hope i get something Great!'
        },
        {
          post_id:2,
          user_id:2,
          content:'I wanna get him something hes not expecting!!'
        },
        {
          post_id:3,
          user_id:1,
          content:'Crash is a Dork...'
        },
        {
          post_id:3,
          user_id:2,
          content:'I dont understand whats wrong with you guys...'
        }
      ]);
    });
};
