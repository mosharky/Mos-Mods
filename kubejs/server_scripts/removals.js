onEvent('recipes', (event) => {

    //Removes by given recipe ID
    const idRemovals = [
        'farmersdelight:rope',
        'minecraft:trident',
        'upgrade_aquatic:trident',
        /darkerdepths:.*_ore/,
        /comfortable_nether:withered_remains.*/,
        /infernalexp:.*iron_ingot/,
        'quark:biotite_ore',
        'twilightforest:equipment/fiery_iron_helmet',
        'twilightforest:equipment/fiery_iron_chestplate',
        'twilightforest:equipment/fiery_iron_leggings',
        'twilightforest:equipment/fiery_iron_boots',
        'twilightforest:equipment/fiery_iron_sword',
        'twilightforest:equipment/fiery_iron_pickaxe',
        /betterendforge:.*_smithing/,
    ]

    //Removes by recipe type
    const typeRemovals = [
        'betterendforge:alloying'
    ]

    //-------------FUNCTIONS/ARRAYS-------------
    //Removes inputs and outputs from global list fullRemoval
    global.fullRemovals.forEach(function (removal) {
        event.remove({ input: removal });
        event.remove({ output: removal });
    });
    //Removes by ID
    idRemovals.forEach(function (removal) {
        event.remove({ id: removal });
    });
    //Removes by type
    typeRemovals.forEach(function (removal) {
        event.remove({ type: removal });
    });
    //-------------FUNCTIONS/ARRAYS-------------
})