
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          user_id:1,
          title:'Best Day of my Life',
          contents:'The Day i Got Married!!!'
        },
        {
          user_id:2,
          title:'Some Day of the Year',
          contents:'Christmas'
        },
        {
          user_id:1,
          title:'Something Funny',
          contents:'Crash bandicoot sat on Cortexs face'
        },
      ]);
    });
};
