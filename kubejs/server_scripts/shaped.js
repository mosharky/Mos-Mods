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
        //Bookshelf unification
        {
            output: 'minecraft:bookshelf',
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: '#minecraft:planks',
                B: 'minecraft:book'
            },
            id: 'quark:building/crafting/oak_bookshelf'
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
            pattern: ['A  ', 'A  '],
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
        {
            output: '2x buzzier_bees:candle',
            pattern: [' A ', ' B ', ' B '],
            key: {
                A: '#buzzier_bees:candle_wick',
                B: '#buzzier_bees:candle_base',
            },
            id: 'buzzier_bees:candles/candle'
        },
        {
            output: 'eidolon:candle',
            pattern: [' A ', ' B '],
            key: {
                A: '#buzzier_bees:candle_wick',
                B: '#buzzier_bees:candle_base',
            },
            id: 'eidolon:candle'
        },
        {
            output: '3x minecraft:ladder',
            pattern: ['A A', 'AAA', 'A A'],
            key: {
                A: 'minecraft:stick'
            },
            id: 'momo:ladders'
        },
        {
            output: 'enigmaticlegacy:antiforbidden_potion',
            pattern: ['AB ', 'CD '],
            key: {
                A: 'enigmaticlegacy:unholy_grail',
                B: 'enigmaticlegacy:recall_potion',
                C: 'minecraft:dragon_breath',
                D: 'enigmaticlegacy:astral_dust'
            },
            id: 'momo:antiforbidden_potion'
        },
        {
            output: 'enigmaticlegacy:earth_heart',
            pattern: ['ABA', 'CCC', 'DED'],
            key: {
                A: 'minecraft:grass_block',
                B: 'minecraft:heart_of_the_sea',
                C: 'minecraft:emerald_block',
                D: 'minecraft:magma_block',
                E: 'comfortable_nether:heartof_the_nether'
            },
            id: 'momo:earth_heart'
        },
    ]
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });

    /*
    event.custom({
        type: ''
    })
    */

    //Orb of Origin recipe
    event.custom({
        type: 'betterendforge:infusion',
        input: { item: 'minecraft:nether_star' },
        output: 'origins:orb_of_origin',
        time: 450,
        catalysts: [
            { item: 'alexsmobs:void_worm_eye', index: 0 },
            { item: 'minecraft:elytra', index: 1 },
            { item: 'minecraft:ender_eye', index: 2 },
            { item: 'twilightforest:fiery_blood', index: 3 },
            { item: 'upgrade_aquatic:elder_eye', index: 4 },
            { item: 'mowziesmobs:ice_crystal', index: 5 },
            { item: 'momo:lesser_ender_eye', index: 6 },
            { item: 'minecraft:totem_of_undying', index: 7 },
        ]
    }).id('momo:orb_of_origin')


    //Greater Eye of Ender recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'momo:lesser_ender_eye' },
            { item: 'alexsmobs:blood_sac' },
            { item: 'momo:hemolymph_pustules' },
        ],
        result: { item: 'minecraft:ender_eye' },
        cookingtime: 200
    }).id('minecraft:ender_eye')


    //Pocket recipes
    //Large
    event.custom({
        type: 'improvedbackpacks:sewing',
        spools_count: 3,
        first: { item: 'improvedbackpacks:tanned_leather' },
        first_count: 3,
        second: { tag: 'forge:shulker_boxes' },
        result: 'improvedbackpacks:large_pocket'
    }).id('improvedbackpacks:large_pocket')
    //Medium
    event.custom({
        type: 'improvedbackpacks:sewing',
        spools_count: 2,
        first: { item: 'improvedbackpacks:tanned_leather' },
        first_count: 2,
        second: { tag: 'forge:ingots/netherite' },
        result: 'improvedbackpacks:medium_pocket'
    }).id('improvedbackpacks:medium_pocket')
    //Tiny
    event.custom({
        type: 'improvedbackpacks:sewing',
        spools_count: 1,
        first: { item: 'improvedbackpacks:tanned_leather' },
        first_count: 1,
        second: { tag: 'forge:ingots/gold' },
        result: 'improvedbackpacks:tiny_pocket'
    }).id('improvedbackpacks:tiny_pocket')



    //Eternal Ingot Recipe
    event.custom({
        type: 'betterendforge:infusion',
        input: { item: 'minecraft:netherite_ingot' },
        output: 'momo:eternal_ingot',
        time: 150,
        catalysts: [
            { item: 'betterendforge:eternal_crystal', index: 0 },
            { item: 'betterendforge:eternal_crystal', index: 2 },
            { item: 'betterendforge:eternal_crystal', index: 4 },
            { item: 'betterendforge:eternal_crystal', index: 6 },
            { item: 'betterendforge:amber_gem', index: 1 },
            { item: 'betterendforge:amber_gem', index: 7 },
            { item: 'betterendforge:amber_gem', index: 3 },
            { item: 'betterendforge:amber_gem', index: 5 },
        ]
    }).id('momo:eternal_ingot')


    //Aquatic Catalyst Recipes
    event.custom({
        type: 'betterendforge:infusion',
        input: { item: 'betterendforge:eternal_crystal' },
        output: 'momo:aquatic_catalyst1',
        time: 100,
        catalysts: [
            { item: 'upgrade_aquatic:elder_eye', index: 0 },
            { item: 'betterendforge:amber_gem', index: 1 },
            { item: 'betterendforge:amber_gem', index: 7 },
            { item: 'minecraft:prismarine_shard', index: 2 },
            { item: 'minecraft:prismarine_shard', index: 6 },
            { item: 'minecraft:prismarine_crystals', index: 3 },
            { item: 'minecraft:prismarine_crystals', index: 4 },
            { item: 'minecraft:prismarine_crystals', index: 5 }
        ]
    }).id('momo:aquatic_catalyst1')
    event.custom({
        type: 'betterendforge:infusion',
        input: { item: 'momo:aquatic_catalyst1' },
        output: 'momo:aquatic_catalyst2',
        time: 100,
        catalysts: [
            { item: 'minecraft:prismarine_crystals', index: 0 },
            { item: 'betterendforge:crystal_shards', index: 2 },
            { item: 'betterendforge:crystal_shards', index: 6 },
        ]
    }).id('momo:aquatic_catalyst2')
    event.custom({
        type: 'betterendforge:infusion',
        input: { item: 'momo:aquatic_catalyst2' },
        output: 'momo:aquatic_catalyst3',
        time: 100,
        catalysts: [
            { item: 'minecraft:prismarine_crystals', index: 7 },
            { item: 'minecraft:prismarine_crystals', index: 1 },
            { item: 'betterendforge:crystal_shards', index: 2 },
            { item: 'betterendforge:crystal_shards', index: 4 },
            { item: 'betterendforge:crystal_shards', index: 6 },
        ]
    }).id('momo:aquatic_catalyst3')
    event.custom({
        type: 'betterendforge:infusion',
        input: { item: 'momo:aquatic_catalyst3' },
        output: 'momo:aquatic_catalyst4',
        time: 100,
        catalysts: [
            { item: 'minecraft:heart_of_the_sea', index: 0 },
            { item: 'minecraft:prismarine_crystals', index: 7 },
            { item: 'minecraft:prismarine_crystals', index: 1 },
            { item: 'betterendforge:crystal_shards', index: 2 },
            { item: 'betterendforge:crystal_shards', index: 4 },
            { item: 'betterendforge:crystal_shards', index: 6 },
        ]
    }).id('momo:aquatic_catalyst4')
    event.custom({
        type: 'betterendforge:infusion',
        input: { item: 'momo:aquatic_catalyst4' },
        output: 'momo:aquatic_catalyst5',
        time: 100,
        catalysts: [
            { item: 'betterendforge:eternal_crystal', index: 0 },
            { item: 'minecraft:prismarine_crystals', index: 7 },
            { item: 'minecraft:prismarine_crystals', index: 1 },
            { item: 'betterendforge:crystal_shards', index: 2 },
            { item: 'betterendforge:crystal_shards', index: 4 },
            { item: 'betterendforge:crystal_shards', index: 6 },
            { item: 'botania:rune_water', index: 3 },
            { item: 'botania:rune_water', index: 5 },
        ]
    }).id('momo:aquatic_catalyst5')


    //Water Protection Infusion
    for (let i = 1; i < 6; i++) {
        event.custom({
            type: 'betterendforge:infusion',
            input: { item: 'momo:aquatic_catalyst' + i },
            output: {
                id: 'minecraft:enchanted_book',
                Count: 1,
                tag: {
                    StoredEnchantments: [
                        {
                            lvl: i,
                            id: 'origins:water_protection'
                        }
                    ]
                }
            },
            time: 300,
            catalysts: [
                { item: 'betterendforge:enchanted_petal', index: 0 },
                { item: 'minecraft:lapis_lazuli', index: 1 },
                { item: 'minecraft:lapis_lazuli', index: 3 },
                { item: 'minecraft:scute', index: 4 },
                { item: 'minecraft:lapis_lazuli', index: 5 },
                { item: 'minecraft:lapis_lazuli', index: 7 }
            ]
        }).id('momo:water_protection' + i)
    }


    //Eidolon Mind Shielding Plate recipe
    event.custom({
        type: 'eidolon:worktable',
        core: ['III', 'III', 'LSL'],
        extras: [
            'B',
            '  ',
            'Q'
        ],
        key: {
            S: {'item': 'eidolon:soul_shard'},
            I: {'tag': 'forge:ingots/zinc'},
            L: {'item': 'minecraft:leather'},
            B: {'tag': 'forge:storage_blocks/lapis'},
            Q: {'tag': 'forge:gems/quartz'}
        },
        result: {item: 'eidolon:mind_shielding_plate'}

    })
})
