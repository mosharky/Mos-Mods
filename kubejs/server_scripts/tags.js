//priority: 5000
//Item Tags
onEvent('item.tags', event => {

    /*
    //Remove a tag from an item
    const removeTagFromItem = [
        {tag: '', item: ''},
    ]
    */

    //Remove all items within a tag
    const removeAllItemsInTag = [
        //momo unification
        'forge:ores/coal',
        'forge:ores/copper',
        'forge:ores/diamond',
        'forge:ores/emerald',
        'forge:ores/gold',
        'forge:ores/iron',
        'forge:ores/lapis',
        'forge:ores/redstone',
        'forge:ores/zinc',
        'supplementaries:ropes',
        'forge:ores/silver',
        'forge:ingots/silver',
        'forge:ores/lead',
        'forge:ingots/lead',
        'curios:spellstone'
    ]

    //Strip all tags from an item
    const removeAllTagsFromItem = [
        global.fullRemovals,
    ]

    //-------------FUNCTIONS/ARRAYS-------------
    //Remove a tag from an item
    /*
    removeTagFromItem.forEach(function (instance) {
        event.add(instance.tag, instance.item)
    });
    */
    //Remove all items within a tag
    removeAllItemsInTag.forEach(function (tagname) {
        event.removeAll(tagname);
    });
    //Remove all tags from an item
    removeAllTagsFromItem.forEach(function (removal) {
        event.removeAllTagsFrom(removal);
    });
    //-------------FUNCTIONS/ARRAYS-------------

    //Add a tag to an item:
    const addTagToItem = [
        { tag: 'supplementaries:ropes', item: 'supplementaries:rope' },
        { tag: 'alexsmobs:drops_acacia_blossoms', item: 'outvoted:baobab_leaves' },
        { tag: 'alexsmobs:drops_bananas', item: ['atmospheric:rosewood_leaves', 'atmospheric:morado_leaves', 'atmospheric:flowering_morado_leaves'] },
        { tag: 'momo:trident_teeth', item: ['upgrade_aquatic:thrasher_tooth', 'outvoted:barnacle_tooth'] },
        { tag: 'forge:ores', item: /momo:raw_.*/ },
        { tag: 'forge:ores/coal', item: 'momo:raw_coal' },
        { tag: 'forge:ores/copper', item: 'momo:raw_copper' },
        { tag: 'forge:ores/diamond', item: 'momo:raw_diamond' },
        { tag: 'forge:ores/emerald', item: 'momo:raw_emerald' },
        { tag: 'forge:ores/gold', item: 'momo:raw_gold' },
        { tag: 'forge:ores/iron', item: 'momo:raw_iron' },
        { tag: 'forge:ores/lapis', item: 'momo:raw_lapis' },
        { tag: 'forge:ores/redstone', item: 'momo:raw_redstone' },
        { tag: 'forge:ores/zinc', item: 'momo:raw_zinc' },
        { tag: 'minecraft:wooden_slabs', item: 'darkerdepths:petrified_slab' },
        { tag: 'minecraft:planks', item: ['darkerdepths:petrified_planks', 'darkerdepths:vertical_petrified_planks'] },
        { tag: 'forge:slimeballs', item: 'autumnity:snail_slime' },
        { tag: 'momo:armor/helmets', item: /.*helmet/ },
        { tag: 'momo:armor/chestplates', item: /.*chestplate/ },
        { tag: 'momo:armor/leggings', item: [/.*leggings/, /.*pants/] },
        { tag: 'momo:armor/boots', item: /.*boots/ },
        { tag: 'momo:armor', item: ['#momo:armor/helmets', '#momo:armor/chestplates', '#momo:armor/leggings', '#momo:armor/boots'] },
        { tag: 'momo_origins:deer_berry_foods', item: [/.*berry*/, /.*berries*/] },
        { tag: 'momo_origins:piglin_all_loved_axes', item: ['comfortable_nether:axe_of_rectitude', 'twilightforest:minotaur_axe_gold'] },
        { tag: 'momo_origins:piglin_all_loved_tools', item: ['#momo_origins:piglin_all_loved_axes', 'farmersdelight:golden_knife'] },
        { tag: 'momo_origins:piglin_golden_armor', item: ['comfortable_nether:golden_snout_helmet'] },
        {
            tag: 'momo_origins:penguin_seafood',
            item: [
                '#forge:raw_fishes',
                '#forge:cooked_fishes',
                'farmersdelight:baked_cod_stew',
                'farmersdelight:fish_stew',
                'farmersdelight:squid_ink_pasta',
                'irregularchef:pool_party_stick',
                'abnormals_delight:pike_with_beetroot',
                'abnormals_delight:perch_with_mushrooms'
            ]
        },
        {
            tag: 'minecraft:logs',
            item: [
                'darkerdepths:petrified_log',
                'darkerdepths:stripped_petrified_log',
                'darkerdepths:petrified_wood',
                'darkerdepths:stripped_petrified_wood'
            ]
        },
        {
            tag: 'origins:meat',
            item: [
                '#forge:meats',
                'environmental:venison',
                'environmental:cooked_venison',
                'environmental:duck',
                'environmental:cooked_duck',
                'alexsmobs:moose_ribs',
                'alexsmobs:cooked_moose_ribs',
                'farmersdelight:chicken_cuts',
                'farmersdelight:cooked_chicken_cuts',
                'farmersdelight:bacon',
                'farmersdelight:cooked_bacon',
                'farmersdelight:cod_slice',
                'farmersdelight:cooked_cod_slice',
                'farmersdelight:salmon_slice',
                'farmersdelight:cooked_salmon_slice',
                'farmersdelight:mutton_chops',
                'farmersdelight:cooked_mutton_chops',
                'farmersdelight:ham',
                'farmersdelight:smoked_ham',
                'farmersdelight:minced_beef',
                'farmersdelight:beef_patty',
                'quark:frog_leg',
                'quark:golden_frog_leg',
                'quark:cooked_frog_leg',
                'quark:crab_leg',
                'quark:cooked_crab_leg',
                'twilightforest:raw_meef',
                'twilightforest:cooked_meef',
                'upgrade_aquatic:pike',
                'upgrade_aquatic:cooked_pike',
                'upgrade_aquatic:lionfish',
                'upgrade_aquatic:cooked_lionfish',
                'upgrade_aquatic:perch',
                'upgrade_aquatic:cooked_perch',
                /infernalexp:.*_hogchop/,
                'autumnity:turkey',
                'autumnity:cooked_turkey',
                'autumnity:turkey_piece',
                'autumnity:cooked_turkey_piece',
                'abnormals_delight:duck_fillet',
                'abnormals_delight:cooked_duck_fillet',
                'abnormals_delight:venison_shanks',
                'abnormals_delight:cooked_venison_shanks',
                'nethers_delight:hoglin_loin',
                'nethers_delight:hoglin_sirloin',
                'nethers_delight:strider_slice',
                'nethers_delight:ground_strider',
                'nethers_delight:nether_skewer',
                /betterendforge:end_fish_.*/
            ]
        },
        {
            tag: 'origins:ranged_weapons',
            item: [
                'dannys_expansion:frozen_bow',
                /twilightforest:.*_bow/,
                /twilightforest:.*_scepter/,
                /eidolon:.*_wand/,
                'savageandravage:wand_of_freezing'
            ]
        },
        {
            tag: 'origins:shields',
            item: [
                'alexsmobs:shield_of_the_deep',
                'outvoted:wildfire_shield',
                'twilightforest:knightmetal_shield',
            ]
        },
        {
            tag: 'momo:omnifood',
            item: [
                'farmersdelight:barbecue_stick',
                'farmersdelight:egg_sandwich',
                'farmersdelight:chicken_sandwich',
                'farmersdelight:hamburger',
                'farmersdelight:bacon_sandwich',
                'farmersdelight:mutton_wrap',
                'farmersdelight:dumplings',
                'farmersdelight:stuffed_potato',
                'farmersdelight:beef_stew',
                'farmersdelight:chicken_soup',
                'farmersdelight:fish_stew',
                'farmersdelight:baked_cod_stew',
                'farmersdelight:bacon_and_eggs',
                'farmersdelight:pasta_with_meatballs',
                'farmersdelight:pasta_with_mutton_chop',
                'farmersdelight:roasted_mutton_chops',
                'farmersdelight:steak_and_potatoes',
                'farmersdelight:squid_ink_pasta',
                'farmersdelight:grilled_salmon',
                'farmersdelight:roast_chicken_block',
                'farmersdelight:roast_chicken',
                'farmersdelight:honey_glazed_ham_block',
                'farmersdelight:honey_glazed_ham',
                'farmersdelight:shepherds_pie_block',
                'farmersdelight:shepherds_pie',
                'nethers_delight:grilled_strider',
                'nethers_delight:raw_stuffed_hoglin',
                'nethers_delight:stuffed_hoglin_item',
                'nethers_delight:roast_hoglin_snout',
                'nethers_delight:roast_hoglin_ham',
                'nethers_delight:roast_hoglin',
                'irregularchef:thrasher_soup',
                'irregularchef:pool_party_stick',
                'irregularchef:hunters_casserole',
                'irregularchef:turtle_gallimaufry_block',
                'irregularchef:turtle_gallimaufry',
                'abnormals_delight:seared_venison',
                'abnormals_delight:passionfruit_glazed_duck',
                'abnormals_delight:dune_platter',
                'abnormals_delight:duck_noodles',
                'abnormals_delight:perch_with_mushrooms',
                'abnormals_delight:pike_with_beetroot',
                'abnormals_delight:venison_with_bamboo_shoots',
                'abnormals_delight:maple_glazed_bacon',
            ]
        }
    ]


    //-------------FUNCTIONS/ARRAYS-------------
    //Add a tag to an item:
    addTagToItem.forEach((instance) => {
        event.add(instance.tag, instance.item)
    });
    //-------------FUNCTIONS/ARRAYS-------------


});


onEvent('block.tags', event => {
    const addTagToBlock = [
        { tag: 'create:windmill_sails', block: /chisel:wool*/ },
        {
            tag: 'origins:natural_stone',
            block: [
                'minecraft:blackstone',
                'quark:deepslate',
                'darkerdepths:shale',
                'darkerdepths:aridrock',
                'darkerdepths:limestone',
                'darkerdepths:grimestone'
            ]
        },
        {
            tag: 'momo_origins:penguin_walkable_blocks',
            block: [
                /betterendforge:*_ice/,
                /environmental:ice_*/,
                /quark:snow*/,
                'betterendforge:dense_snow'
            ]
        },
        {
            tag: 'momo_origins:moth_glow',
            block: [
                '#chisel:glowstone',
                /infernalexp:.*glowstone*./,
                /infernalexp:.*dimstone*./,
            ]
        },
    ]
    addTagToBlock.forEach((instance) => {
        event.add(instance.tag, instance.block)
    });
});