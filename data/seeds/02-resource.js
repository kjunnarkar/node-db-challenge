
exports.seed = function(knex, Promise) {
  return knex('resource').insert([
    { Name: 'Set conference room', Description: 'Set meeting from 2-3pm' },
    { Name: 'Set calender', Description: 'Update with new projects' },
    { Name: 'Software License', Description: 'Purchase database license' }
  ]);
}
