//Item Tags
onEvent('item.tags', event => {

    //Diamond
    event.removeAll('forge:ores/diamond')
    event.removeAll('forge:dusts/diamond')
    event.add('forge:dusts/diamond', 'emendatusenigmatica:diamond_dust')
    event.add('forge:ores/diamond', 'emendatusenigmatica:diamond_chunk')
    //Coal
    event.removeAll('forge:ores/coal')
    event.add('forge:ores/coal', 'emendatusenigmatica:coal_chunk')
    //Lapis
    event.removeAll('forge:ores/lapis')
    event.add('forge:ores/lapis', 'emendatusenigmatica:lapis_chunk')
    //Redstone
    event.removeAll('forge:ores/redstone')
    event.add('forge:ores/redstone', 'emendatusenigmatica:redstone_chunk')
    //Emerald
    event.removeAll('forge:ores/emerald')
    event.add('forge:ores/emerald', 'emendatusenigmatica:emerald_chunk')
    //Iron
    event.removeAll('forge:ores/iron')
    event.removeAll('forge:rods/iron')
    event.removeAll('forge:plates/iron')
    event.removeAll('forge:dusts/iron')
    event.add('forge:ores/iron', 'emendatusenigmatica:iron_chunk')
    event.add('forge:rods/iron', 'emendatusenigmatica:iron_rod')
    event.add('forge:plates/iron', 'emendatusenigmatica:iron_plate')
    event.add('forge:dusts/iron', 'emendatusenigmatica:iron_dust')
    //Gold
    event.removeAll('forge:ores/gold')
    event.removeAll('forge:rods/gold')
    event.removeAll('forge:plates/gold')
    event.removeAll('forge:dusts/gold')
    event.add('forge:ores/gold', 'emendatusenigmatica:gold_chunk')
    event.add('forge:rods/gold', 'emendatusenigmatica:gold_rod')
    event.add('forge:plates/gold', 'emendatusenigmatica:gold_plate')
    event.add('forge:dusts/gold', 'emendatusenigmatica:gold_dust')
    //Copper
    event.removeAll('forge:ingots/copper')
    event.removeAll('forge:storage_blocks/copper')
    event.removeAll('forge:nuggets/copper')
    event.removeAll('forge:ores/copper')
    event.removeAll('forge:rods/copper')
    event.removeAll('forge:plates/copper')
    event.removeAll('forge:dusts/copper')
    event.add('forge:ingots/copper', 'emendatusenigmatica:copper_ingot')
    event.add('forge:storage_blocks/copper', 'emendatusenigmatica:copper_block')
    event.add('forge:nuggets/copper', 'emendatusenigmatica:copper_nugget')
    event.add('forge:ores/copper', 'emendatusenigmatica:copper_chunk')
    event.add('forge:rods/copper', 'emendatusenigmatica:copper_rod')
    event.add('forge:plates/copper', 'emendatusenigmatica:copper_plate')
    event.add('forge:dusts/copper', 'emendatusenigmatica:copper_dust')
    //Zinc
    event.removeAll('forge:ingots/zinc')
    event.removeAll('forge:storage_blocks/zinc')
    event.removeAll('forge:nuggets/zinc')
    event.removeAll('forge:ores/zinc')
    event.removeAll('forge:rods/zinc')
    event.removeAll('forge:plates/zinc')
    event.removeAll('forge:dusts/zinc')
    event.add('forge:ingots/zinc', 'emendatusenigmatica:zinc_ingot')
    event.add('forge:storage_blocks/zinc', 'emendatusenigmatica:zinc_block')
    event.add('forge:nuggets/zinc', 'emendatusenigmatica:zinc_nugget')
    event.add('forge:ores/zinc', 'emendatusenigmatica:zinc_chunk')
    event.add('forge:rods/zinc', 'emendatusenigmatica:zinc_rod')
    event.add('forge:plates/zinc', 'emendatusenigmatica:zinc_plate')
    event.add('forge:dusts/zinc', 'emendatusenigmatica:zinc_dust')
    //Brass
    event.removeAll('forge:ingots/brass')
    event.removeAll('forge:storage_blocks/brass')
    event.removeAll('forge:nuggets/brass')
    event.removeAll('forge:plates/brass')
    event.removeAll('forge:rods/brass')
    event.add('forge:ingots/brass', 'emendatusenigmatica:brass_ingot')
    event.add('forge:storage_blocks/brass', 'emendatusenigmatica:brass_block')
    event.add('forge:nuggets/brass', 'emendatusenigmatica:brass_nugget')
    event.add('forge:plates/brass', 'emendatusenigmatica:brass_plate')
    event.add('forge:rods/brass', 'emendatusenigmatica:brass_rod')
    //Silver
    event.removeAll('forge:ingots/silver')
    event.removeAll('forge:storage_blocks/silver')
    event.removeAll('forge:nuggets/silver')
    event.removeAll('forge:ores/silver')
    event.removeAll('forge:rods/silver')
    event.removeAll('forge:plates/silver')
    event.removeAll('forge:dusts/silver')
    event.add('forge:ingots/silver', 'emendatusenigmatica:silver_ingot')
    event.add('forge:storage_blocks/silver', 'emendatusenigmatica:silver_block')
    event.add('forge:nuggets/silver', 'emendatusenigmatica:silver_nugget')
    event.add('forge:ores/silver', 'emendatusenigmatica:silver_chunk')
    event.add('forge:rods/silver', 'emendatusenigmatica:silver_rod')
    event.add('forge:plates/silver', 'emendatusenigmatica:silver_plate')
    event.add('forge:dusts/silver', 'emendatusenigmatica:silver_dust')
    //Lead
    event.removeAll('forge:ingots/lead')
    event.removeAll('forge:storage_blocks/lead')
    event.removeAll('forge:nuggets/lead')
    event.removeAll('forge:ores/lead')
    event.removeAll('forge:rods/lead')
    event.removeAll('forge:plates/lead')
    event.removeAll('forge:dusts/lead')
    event.add('forge:ingots/lead', 'emendatusenigmatica:lead_ingot')
    event.add('forge:storage_blocks/lead', 'emendatusenigmatica:lead_block')
    event.add('forge:nuggets/lead', 'emendatusenigmatica:lead_nugget')
    event.add('forge:ores/lead', 'emendatusenigmatica:lead_chunk')
    event.add('forge:rods/lead', 'emendatusenigmatica:lead_rod')
    event.add('forge:plates/lead', 'emendatusenigmatica:lead_plate')
    event.add('forge:dusts/lead', 'emendatusenigmatica:lead_dust')
    //Obsidian
    event.removeAll('forge:dusts/obsidian')
    event.add('forge:dusts/obsidian', 'emendatusenigmatica:obsidian_dust')
    //Quartz
    event.removeAll('forge:ores/quartz')
    event.add('forge:ores/quartz', 'emendatusenigmatica:quartz_chunk')
    //Other ores
    event.removeAll('forge:ores/aluminum')
    event.removeAll('forge:ores/nickel')
    event.removeAll('forge:ores/uranium')
    event.removeAll('forge:ores/osmium')
    event.removeAll('forge:ores/tin')
    event.removeAll('forge:ores/certus_quartz')
    event.removeAll('forge:ores/charged_certus_quartz')
    event.removeAll('forge:ores/fluorite')
    event.removeAll('forge:ores/bitumen')
    event.removeAll('forge:ores/cinnabar')
    event.removeAll('forge:ores/apatite')
    event.removeAll('forge:ores/sulfur')
    event.removeAll('forge:ores/potassium_nitrate')
    event.removeAll('forge:ores/arcane')
    event.removeAll('forge:ores/dimensional')
    event.removeAll('forge:ores/cobalt')
    //Other Ingots
    event.removeAll('forge:ingots/aluminum')
    event.removeAll('forge:ingots/nickel')
    event.removeAll('forge:ingots/uranium')
    event.removeAll('forge:ingots/osmium')
    event.removeAll('forge:ingots/tin')
    event.removeAll('forge:ingots/certus_quartz')
    event.removeAll('forge:ingots/charged_certus_quartz')
    event.removeAll('forge:ingots/fluorite')
    event.removeAll('forge:ingots/bitumen')
    event.removeAll('forge:ingots/cinnabar')
    event.removeAll('forge:ingots/apatite')
    event.removeAll('forge:ingots/sulfur')
    event.removeAll('forge:ingots/potassium_nitrate')
    event.removeAll('forge:ingots/arcane')
    event.removeAll('forge:ingots/dimensional')
    event.removeAll('forge:ingots/cobalt')
    //Random
    event.remove('forge:grain/rice', 'environmental:rice')
    event.remove('forge:seeds/rice', 'environmental:rice')
    event.remove('forge:crops/rice', 'environmental:rice')
    event.remove('forge:grain', 'environmental:rice')
    event.remove('forge:crops', 'environmental:rice')
    event.remove('forge:seeds', 'environmental:rice')
});

//Recipes
events.listen('recipes', (event) => {

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
        //BetterEnd
        'betterendforge:additional_gold',
        'betterendforge:additional_iron',
        //Enigmatic Legacy
        'enigmaticlegacy:etherium_ingot_from_blasting',
        'enigmaticlegacy:etherium_ingot',
        //Other
        'minecraft:ender_eye',
        'emendatusenigmatica:enigmatic_fortunizer',
        'charm:extra_recipes/trident',
        'upgrade_aquatic:trident'
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
    ];


    fullRemovals.forEach(function (removal) {
        event.remove({ input: removal });
        event.remove({ output: removal });
    });
    idRemovals.forEach(function (removal) {
        event.remove({ id: removal });
    });
});