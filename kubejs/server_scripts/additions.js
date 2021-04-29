events.listen('recipes', (event) => {

    //Chest
    event.shapeless('minecraft:chest', '#forge:chests')
    event.shaped('minecraft:chest', [
        'SSS',
        'S S',
        'SSS'
      ], {
        S: '#minecraft:planks'
      })
    //Ladder
    event.shaped('3x minecraft:ladder', [
        'A A',
        'AAA',
        'A A'
      ], {
        A: 'minecraft:stick'
      })
    event.shaped('naturescompass:naturescompass', [
        'CAD',
        'ABA',
        'EAF'
      ], {
        A: '#minecraft:logs',
        B: 'minecraft:compass',
        C: 'alexsmobs:gazelle_horn',
        D: 'alexsmobs:bear_fur',
        E: 'alexsmobs:crocodile_scute',
        F: 'environmental:duck_egg',
      })

});