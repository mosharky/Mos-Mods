//Recipes
events.listen('recipes', (event) => {
    
    //Replace
    //Diamond
    event.replaceOutput({}, 'createaddition:diamond_grit', 'emendatusenigmatica:diamond_dust')
    //Iron
    event.replaceOutput({}, 'occultism:iron_dust', 'emendatusenigmatica:iron_dust')
    event.replaceOutput({}, 'create:iron_sheet', 'emendatusenigmatica:iron_plate')
    //Gold
    event.replaceOutput({}, 'occultism:gold_dust', 'emendatusenigmatica:gold_dust')
    event.replaceOutput({}, 'create:golden_sheet', 'emendatusenigmatica:gold_plate')
    //Lapis
    event.replaceOutput({}, 'create:lapis_sheet', 'emendatusenigmatica:lapis_plate')
    event.replaceInput({}, 'create:lapis_sheet', 'emendatusenigmatica:lapis_plate')
    //Copper
    event.replaceOutput({}, 'create:copper_ingot', 'emendatusenigmatica:copper_ingot')
    event.replaceOutput({}, 'create:copper_sheet', 'emendatusenigmatica:copper_plate')
    event.replaceOutput({}, 'create:copper_nugget', 'emendatusenigmatica:copper_nugget')
    event.replaceOutput({}, 'occultism:coaapper_dust', 'emendatusenigmatica:copper_dust')
    event.replaceOutput({}, 'occultism:copper_ingot', 'emendatusenigmatica:copper_ingot')
    event.replaceOutput({}, 'createaddition:copper_rod', 'emendatusenigmatica:copper_rod')
    //Zinc
    event.replaceOutput({}, 'create:zinc_ingot', 'emendatusenigmatica:zinc_ingot')
    event.replaceOutput({}, 'createaddition:zinc_sheet', 'emendatusenigmatica:zinc_plate')
    event.replaceOutput({}, 'create:zinc_nugget', 'emendatusenigmatica:zinc_nugget')
    //Silver
    event.replaceOutput({}, 'occultism:silver_ingot', 'emendatusenigmatica:silver_ingot')
    event.replaceOutput({}, 'occultism:silver_dust', 'emendatusenigmatica:silver_dust')
    //Brass
    event.replaceOutput({}, 'create:brass_ingot', 'emendatusenigmatica:brass_ingot')
    event.replaceOutput({}, 'create:brass_nugget', 'emendatusenigmatica:brass_nugget')
    event.replaceOutput({}, 'create:brass_sheet', 'emendatusenigmatica:brass_plate')
    //Lead
    event.replaceOutput({}, 'eidolon:lead_ingot', 'emendatusenigmatica:lead_ingot')
    event.replaceOutput({}, 'eidolon:lead_nugget', 'emendatusenigmatica:lead_nugget')
    //Ender Dust
    event.replaceOutput({}, 'betterendforge:ender_dust', 'emendatusenigmatica:ender_dust')
    //Obsidian Dust
    event.replaceOutput({}, 'create:powdered_obsidian', 'emendatusenigmatica:obsidian_dust')
    event.replaceOutput({}, 'occultism:obsidian_dust', 'emendatusenigmatica:obsidian_dust')
    //Nether Quartz
    event.replaceInput({}, 'minecraft:nether_quartz_ore', 'emendatusenigmatica:quartz_chunk')
    //Other
    event.replaceOutput({}, 'environmental:fried_egg', 'farmersdelight:fried_egg')

    //Removes all recipes in the betterendforge:alloying type
    event.remove({type: 'betterendforge:alloying'})

    //Remove by Recipe ID
    var idRemovals = [
        //Diamond
        'minecraft:diamond_from_blasting',
        'undergarden:blast_undergarden_diamond',
        'minecraft:diamond_from_smelting',
        'undergarden:smelt_undergarden_diamond',
        //Coal
        'minecraft:coal_from_blasting',
        'undergarden:blast_undergarden_coal',
        'minecraft:coal_from_smelting',
        'undergarden:smelt_undergarden_coal',
        //Lapis
        'minecraft:lapis_from_blasting',
        'minecraft:lapis_from_smelting',
        //Redstone
        'minecraft:redstone_from_blasting',
        'minecraft:redstone_from_smelting',
        //Emerald
        'minecraft:emerald_from_blasting',
        'minecraft:emerald_from_smelting',
        //Iron
        'occultism:blasting/iron_ingot_from_dust',
        'occultism:smelting/iron_ingot_from_dust',
        'minecraft:iron_ingot_from_blasting',
        'minecraft:iron_ingot',
        'undergarden:blast_undergarden_iron',
        'undergarden:smelt_undergarden_iron',
        //Gold
        'occultism:blasting/gold_ingot_from_dust',
        'occultism:smelting/gold_ingot_from_dust',
        'minecraft:gold_ingot_from_blasting',
        'minecraft:gold_ingot',
        'undergarden:blast_undergarden_gold',
        'undergarden:smelt_undergarden_gold',
        //Copper
        'occultism:crafting/copper_ingot_from_nuggets',
        'occultism:crafting/copper_ingot_from_block',
        'occultism:blasting/copper_ingot',
        'occultism:blasting/copper_ingot_from_dust',
        'occultism:smelting/copper_ingot',
        'occultism:smelting/copper_ingot_from_dust',
        'create:blasting/copper_ingot_from_ore',
        'create:smelting/copper_ingot_from_ore',
        'create:crafting/materials/copper_nugget_from_decompacting',
        'create:crafting/materials/copper_block_from_compacting',
        'create:crafting/materials/copper_ingot_from_decompacting',
        'create:crafting/materials/copper_ingot_from_compacting',
        //Zinc
        'create:blasting/zinc_ingot_from_ore',
        'create:smelting/zinc_ingot_from_ore',
        'create:crafting/materials/zinc_nugget_from_decompacting',
        'create:crafting/materials/zinc_block_from_compacting',
        'create:crafting/materials/zinc_ingot_from_decompacting',
        'create:crafting/materials/zinc_ingot_from_compacting',
        //Brass
        'emendatusenigmatica:alloy_dust/brass',
        'create:crafting/materials/brass_nugget_from_decompacting',
        'create:crafting/materials/brass_block_from_compacting',
        'create:crafting/materials/brass_ingot_from_decompacting',
        'create:crafting/materials/brass_ingot_from_compacting',
        //Silver
        'occultism:crafting/silver_ingot_from_nuggets',
        'occultism:crafting/silver_ingot_from_block',
        'occultism:blasting/silver_ingot',
        'occultism:blasting/silver_ingot_from_dust',
        'occultism:smelting/silver_ingot',
        'occultism:smelting/silver_ingot_from_dust',
        //Lead
        'eidolon:lead_ingot',
        'eidolon:lead_block',
        'eidolon:decompress_lead_block',
        'eidolon:decompress_lead_ingot',
        'eidolon:blast_lead_ore',
        'eidolon:blast_lead_dust',
        'eidolon:smelt_lead_ore',
        'eidolon:smelt_lead_dust',
        //Obsidian
        'occultism:blasting/obsidian_from_dust',
        'occultism:smelting/obsidian_from_dust',
        //No More Ores
        'emendatusenigmatica:ingot_from_ore/blasting/iron',
        'emendatusenigmatica:ingot_from_ore/smelting/iron',
        'emendatusenigmatica:ingot_from_ore/blasting/gold',
        'emendatusenigmatica:ingot_from_ore/smelting/gold',
        'emendatusenigmatica:ingot_from_ore/blasting/copper',
        'emendatusenigmatica:ingot_from_ore/smelting/copper',
        'emendatusenigmatica:ingot_from_ore/blasting/zinc',
        'emendatusenigmatica:ingot_from_ore/smelting/zinc',
        'emendatusenigmatica:ingot_from_ore/blasting/silver',
        'emendatusenigmatica:ingot_from_ore/smelting/silver',
        'emendatusenigmatica:ingot_from_ore/blasting/lead',
        'emendatusenigmatica:ingot_from_ore/smelting/lead',
        'emendatusenigmatica:gem_from_ore/blasting/coal',
        'emendatusenigmatica:gem_from_ore/smelting/coal',
        'emendatusenigmatica:gem_from_ore/blasting/diamond',
        'emendatusenigmatica:gem_from_ore/smelting/diamond',
        'emendatusenigmatica:gem_from_ore/blasting/emerald',
        'emendatusenigmatica:gem_from_ore/smelting/emerald',
        'emendatusenigmatica:gem_from_ore/blasting/redstone',
        'emendatusenigmatica:gem_from_ore/smelting/redstone',
        'emendatusenigmatica:gem_from_ore/blasting/lapis',
        'emendatusenigmatica:gem_from_ore/smelting/lapis',
        //Enigmatic Legacy
        'enigmaticlegacy:etherium_ingot_from_blasting',
        'enigmaticlegacy:etherium_ingot',
        //Other
        'minecraft:ender_eye',
        'emendatusenigmatica:enigmatic_fortunizer',
        'charm:extra_recipes/trident',
        'upgrade_aquatic:trident',
        'botania:petal_apothecary/orechid',
        'botania:petal_apothecary/orechid_ignem',
        'betterendforge:ender_shard_to_dust',
        'betterendforge:ender_pearl_to_dust',
        'betterendforge:end_stone_smelter',
        'refinedstorage:silicon'
    ];

    //Remove inputs and outputs
    var fullRemovals = [
        //Copper
        'occultism:copper_nugget',
        'occultism:copper_block',
        //Silver
        'occultism:silver_nugget',
        'occultism:silver_block',
        //Alloys
        'emendatusenigmatica:bronze_ingot',
        'emendatusenigmatica:bronze_dust',
        'emendatusenigmatica:constantan_ingot',
        'emendatusenigmatica:constantan_dust',
        'emendatusenigmatica:electrum_ingot',
        'emendatusenigmatica:electrum_dust',
        'emendatusenigmatica:steel_ingot',
        'emendatusenigmatica:steel_dust',
        'emendatusenigmatica:invar_ingot',
        'emendatusenigmatica:invar_dust',
        'emendatusenigmatica:signalum_ingot',
        'emendatusenigmatica:signalum_dust',
        'emendatusenigmatica:lumium_ingot',
        'emendatusenigmatica:lumium_dust',,
        'emendatusenigmatica:enderium_ingot',
        'emendatusenigmatica:enderium_dust',
        //Other
        'minecraft:nether_gold_ore',
        'emendatusenigmatica:aluminum_ingot',
        'emendatusenigmatica:nickel_ingot',
        'emendatusenigmatica:uranium_ingot',
        'emendatusenigmatica:osmium_ingot',
        'emendatusenigmatica:tin_ingot',
        'emendatusenigmatica:enigmatic_hammer',
        'emendatusenigmatica:cobalt_ingot',
        'emendatusenigmatica:cobalt_dust',
        //Random
        'farmersdelight:wheat_dough',
        'alexsmobs:endolocator',
        'naturescompass:naturescompass',
        'environmental:rice',
        'outvoted:prismarine_rod',
        'twilightforest:raw_venison',
    ];


    fullRemovals.forEach(function (removal) {
        event.remove({ input: removal });
        event.remove({ output: removal });
    });
    idRemovals.forEach(function (removal) {
        event.remove({ id: removal });
    });
});