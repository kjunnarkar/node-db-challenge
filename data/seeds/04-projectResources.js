
exports.seed = function(knex, Promise) {
  return knex('project_resources').insert([
    { Project: 1, Resource: 1 },
    { Project: 2, Resource: 2 },
    { Project: 3, Resource: 3 }
  ]);
}
