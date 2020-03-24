
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //Incremento altomático de chave primaria
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //Referenciando a chave estrangeira
        table.string('ong_id').notNullable();
  
        table.foreign('ong_id').references('id').inTable('ongs'); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
