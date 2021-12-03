//priority: 1000

onEvent('recipes', (event) => {
    const recipes = [
        /*
        --------------EXAMPLE--------------
        {
            output: 'thing:thing',
            pattern: ['AAA', 'BBB', 'CCC'],
            key: {
                A: 'thing1:thing1',
                B: 'thing2:thing2',
                C: 'thing3:thing3'
            },
            id: 'recipeid'
        },
        */

        //Chest from any plank
        {
            output: 'minecraft:chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#minecraft:planks'
            },
            id: 'quark:building/crafting/chests/chest_revert'
        },

        //Upgrade Aquatic Trident
        {
            output: 'minecraft:trident',
            pattern: [' AA', ' CA', 'B  '],
            key: {
                A: '#momo:trident_teeth',
                B: 'upgrade_aquatic:prismarine_rod',
                C: 'minecraft:heart_of_the_sea'
            },
            id: 'momo:trident'
        },

        //Chainmail Helmet
        {
            output: 'minecraft:chainmail_helmet',
            pattern: ['   ', 'CBC', 'A A'],
            key: {
                A: 'minecraft:chain',
                B: 'minecraft:iron_ingot',
                C: 'minecraft:iron_nugget'
            },
            id: 'momo:chainmail_helmet'
        },

        //Chainmail Chestplate
        {
            output: 'minecraft:chainmail_chestplate',
            pattern: ['B B', 'CBC', 'ACA'],
            key: {
                A: 'minecraft:chain',
                B: 'minecraft:iron_ingot',
                C: 'minecraft:iron_nugget'
            },
            id: 'momo:chainmail_chestplate'
        },

        //Chainmail Leggings
        {
            output: 'minecraft:chainmail_leggings',
            pattern: ['BBB', 'C C', 'A A'],
            key: {
                A: 'minecraft:chain',
                B: 'minecraft:iron_ingot',
                C: 'minecraft:iron_nugget'
            },
            id: 'momo:chainmail_leggings'
        },

        //Chainmail Boots
        {
            output: 'minecraft:chainmail_boots',
            pattern: ['   ', 'C C', 'A A'],
            key: {
                A: 'minecraft:chain',
                C: 'minecraft:iron_nugget'
            },
            id: 'momo:chainmail_boots'
        },

        //Ender Storage Chest
        {
            output: 'enderstorage:ender_chest',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'create:brass_ingot',
                B: '#minecraft:wool',
                C: 'minecraft:obsidian',
                D: '#forge:chests',
                E: 'minecraft:ender_eye'
            },
            id: 'enderstorage:ender_chest'
        },
        {
            output: 'enderstorage:ender_tank',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'create:brass_ingot',
                B: '#minecraft:wool',
                C: 'minecraft:obsidian',
                D: 'minecraft:cauldron',
                E: 'minecraft:ender_eye'
            },
            id: 'enderstorage:ender_tank'
        },
        {
            output: 'enderstorage:ender_pouch',
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: 'create:brass_sheet',
                B: 'minecraft:leather',
                C: 'minecraft:ender_eye',
                D: 'create:brass_ingot',
                E: '#minecraft:wool'
            },
            id: 'enderstorage:ender_pouch'
        },
        {
            output: 'explorerscompass:explorerscompass',
            pattern: ['AEA', 'BCB', 'ADA'],
            key: {
                A: 'create:brass_ingot',
                B: 'minecraft:netherite_ingot',
                C: 'minecraft:compass',
                D: 'minecraft:lodestone',
                E: 'alexsmobs:endolocator'
            },
            id: 'explorerscompass:explorers_compass'
        },
        {
            output: 'naturescompass:naturescompass',
            pattern: ['ABC', 'DEF', 'GHI'],
            key: {
                A: 'minecraft:crimson_fungus',
                B: '#minecraft:saplings',
                C: 'minecraft:warped_fungus',
                D: 'alexsmobs:echolocator',
                E: 'minecraft:compass',
                F: 'alexsmobs:endolocator',
                G: 'environmental:blue_wisteria_sapling',
                H: 'twilightforest:canopy_sapling',
                I: '#forge:saplings'
            },
            id: 'naturescompass:natures_compass'
        },
        {
            output: 'dannys_expansion:workbench',
            pattern: ['A B', 'CCC', 'D D'],
            key: {
                A: 'create:crafting_blueprint',
                B: '#forge:tools/knives',
                C: '#minecraft:wooden_slabs',
                D: '#minecraft:planks'
            },
            id: 'dannys_expansion:workbench'
        },
        {
            output: 'environmental:sawmill',
            pattern: ['ABC', 'BBC', 'ABD'],
            key: {
                A: 'create:copper_ingot',
                B: '#minecraft:planks',
                C: 'minecraft:iron_ingot',
                D: 'minecraft:stick'
            },
            id: 'environmental:crafting/sawmill'
        },
        {
            output: '4x minecraft:chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#minecraft:logs'
            },
            id: 'momo:chest_from_logs'
        },
        {
            output: '16x minecraft:stick',
            pattern: ['A  ', 'A  ', '   '],
            key: {
                A: '#minecraft:logs'
            },
            id: 'momo:sticks_from_logs'
        },
        {
            output: 'betterendforge:guidebook',
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'betterendforge:ender_shard',
                B: 'minecraft:book',
                C: 'betterendforge:crystal_shards'
            },
            id: 'betterendforge:guidebook'
        },
    ]

    event.shaped('3x minecraft:ladder', [
        'A A',
        'AAA',
        'A A'
    ], {
        A: 'minecraft:stick'
    })

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
})