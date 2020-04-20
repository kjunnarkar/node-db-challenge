
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { Name: 'Set up database', Description: 'Database tasks', Completed: true },
    { Name: 'Seed data into tables', Description: 'Put test data into tables', Completed: false },
    { Name: 'Set up database methods', Description: 'Setup DB access methods', Completed: false }
  ]);
}
