
exports.seed = function(knex, Promise) {
  return knex('task').insert([
    { Description: 'Update GitHub with latest commits', Notes: 'Commit the Sprint Challenge', Completed: true, Project: 1  },
    { Description: 'Talk to the Lambda TL', Notes: 'Give updates on Sprint Challenge', Completed: false, Project: 2  },
    { Description: 'Prepare for the next lecture', Notes: 'Go through the TK material', Completed: false, Project: 3  },
  ]);
}
