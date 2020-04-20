
exports.up = function(knex) {
    return (
        knex.schema
            .createTable('projects', tbl => {
                tbl.increments();
                tbl.string('Name', 255).notNullable();
                tbl.string('Description', 255);
                tbl.boolean('Completed').notNullable().defaultTo(false);
            })
            .createTable('resource', tbl => {
                tbl.increments();
                tbl.string('Name', 255).notNullable().unique();
                tbl.string('Description', 255);
            })
            .createTable('task', tbl => {
                tbl.increments();
                tbl.string('Description', 255).notNullable();
                tbl.string('Notes', 255);
                tbl.boolean('Completed').notNullable().defaultTo(false);
                tbl.integer('Project')
                    .unsigned()
                    .notNullable()
                    .references('projects.id')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
            })
            .createTable('project_resources', tbl => {
                tbl.increments();
                tbl.integer('Project')
                    .unsigned()
                    .notNullable()
                    .references('projects.id')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
                tbl.integer('Resource')
                    .unsigned()
                    .notNullable()
                    .references('resource.id')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
            })
    )
};
  
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('projects')
};
