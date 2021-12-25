// priority: 500
onEvent('recipes', (event) => {

    //Replace output
    const outputReplace = [
        {
            filter: {},
            toReplace: '',
            replaceWith: ''
        },
    ];


    //Replace input
    const inputReplace = [
        {
            filter: {},
            toReplace: 'minecraft:bookshelf',
            replaceWith: '#forge:bookshelves'
        },
        {
            filter: {},
            toReplace: 'minecraft:egg',
            replaceWith: '#forge:eggs'
        },
        {
            filter: {},
            toReplace: 'supplementaries:flax',
            replaceWith: 'farmersdelight:straw'
        },
        {
            filter: {},
            toReplace: 'minecraft:lead',
            replaceWith: 'supplementaries:rope'
        },
        {
            filter: {},
            toReplace: 'minecraft:diamond_ore',
            replaceWith: 'momo:raw_diamond'
        },
        {
            filter: {},
            toReplace: 'minecraft:lapis_ore',
            replaceWith: 'momo:raw_lapis'
        },
        {
            filter: {},
            toReplace: 'minecraft:emerald_ore',
            replaceWith: 'momo:raw_emerald'
        },
        {
            filter: {},
            toReplace: 'minecraft:redstone_ore',
            replaceWith: 'momo:raw_redstone'
        },
        {
            filter: {},
            toReplace: 'minecraft:coal_ore',
            replaceWith: 'momo:raw_coal'
        },
        {
            filter: {},
            toReplace: 'minecraft:gold_ore',
            replaceWith: 'momo:raw_gold'
        },
        {
            filter: {},
            toReplace: 'minecraft:iron_ore',
            replaceWith: 'momo:raw_iron'
        },
        {
            filter: { mod: 'waystones'},
            toReplace: 'minecraft:ender_pearl',
            replaceWith: 'minecraft:ender_eye'
        },
        {
            filter: { id: 'waystones:warp_stone'},
            toReplace: 'minecraft:purple_dye',
            replaceWith: 'minecraft:purpur_block'
        },
        {
            filter: { mod: 'storagedrawers'},
            toReplace: 'minecraft:oak_planks',
            replaceWith: '#minecraft:planks'
        },
        {
            filter: { id: 'farsight_spyglasses:spyglass'},
            toReplace: 'minecraft:glass_pane',
            replaceWith: 'comfortable_nether:fortified_glass'
        },
        {
            filter: { id: 'alexsmobs:endolocator'},
            toReplace: 'minecraft:ender_pearl',
            replaceWith: 'minecraft:ender_eye'
        },
        {
            filter: { id: 'alexsmobs:endolocator'},
            toReplace: 'minecraft:ender_pearl',
            replaceWith: 'minecraft:ender_eye'
        },
        {
            filter: {},
            toReplace: 'alexmobs:shark_tooth',
            replaceWith: '#momo:trident_teeth'
        },
        {
            filter: {},
            toReplace: 'minecraft:slime_ball',
            replaceWith: '#forge:slimeballs'
        },
        {
            filter: {},
            toReplace: 'enigmaticlegacy:earth_heart',
            replaceWith: 'minecraft:heart_of_the_sea'
        },
        {
            filter: {mod: 'storagenetwork'},
            toReplace: 'minecraft:iron_nugget',
            replaceWith: 'create:brass_ingot'
        },
        {
            filter: {mod: 'storagenetwork'},
            toReplace: 'minecraft:gold_ingot',
            replaceWith: 'create:brass_sheet'
        },
        {
            filter: {mod: 'storagenetwork'},
            toReplace: 'minecraft:blaze_powder',
            replaceWith: 'create:golden_sheet'
        },
        {
            filter: {mod: 'storagenetwork'},
            toReplace: 'minecraft:iron_ingot',
            replaceWith: 'create:brass_ingot'
        },
        {
            filter: {mod: 'storagenetwork'},
            toReplace: 'minecraft:gold_block',
            replaceWith: 'create:brass_block'
        },
        {
            filter: {mod: 'storagenetwork'},
            toReplace: 'minecraft:redstone_block',
            replaceWith: 'create:zinc_ingot'
        },
        {
            filter: {mod: 'craftabledeeds'},
            toReplace: 'minecraft:netherite_ingot',
            replaceWith: 'quark:polished_deepslate'
        },
        {
            filter: {id: 'enigmaticlegacy:escape_scroll'},
            toReplace: 'enigmaticlegacy:eye_of_nebula',
            replaceWith: 'upgrade_aquatic:elder_eye'
        },
        {
            filter: { id: 'waystones:warp_stone' },
            toReplace: 'minecraft:emerald',
            replaceWith: 'betterendforge:eternal_crystal'
        },
        {
            filter: {},
            toReplace: 'minecraft:ender_eye',
            replaceWith: 'momo:lesser_ender_eye'
        },
        {
            filter: {},
            toReplace: 'enigmaticlegacy:earth_heart',
            replaceWith: 'minecraft:heart_of_the_sea'
        },
        
    ];

    const InputOutputReplace = [
        {
            filter: {},
            toReplace: 'farmersdelight:rope',
            replaceWith: 'supplementaries:rope'
        },
        {
            filter: { mod: 'environmental' },
            toReplace: 'environmental:fried_egg',
            replaceWith: 'farmersdelight:fried_egg'
        },
    ];


    //----------------------FUNCTIONS/ARRAYS----------------------
    //Replace output 
    outputReplace.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
    //Replace input
    inputReplace.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
    //Replace input AND output
    InputOutputReplace.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.toReplace, recipe.replaceWith);
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
    //----------------------FUNCTIONS/ARRAYS----------------------
})