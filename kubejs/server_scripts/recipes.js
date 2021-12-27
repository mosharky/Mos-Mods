//priority: 1000
global.akashictome = Item.of('akashictome:tome', '{"akashictome:is_morphing":1b,"akashictome:data":{storagenetwork:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Network Guide Book"},"patchouli:book":"storagenetwork:network_book","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Network Guide Book"}]}\'}}},botania:{id:"botania:lexicon",Count:1b,tag:{"akashictome:displayName":{text:"Lexica Botania"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Lexica Botania"}]}\'}}},enigmaticlegacy:{id:"enigmaticlegacy:the_acknowledgment",Count:1b,tag:{"akashictome:displayName":{text:"The Acknowledgment"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The Acknowledgment"}]}\'}}},alexsmobs:{id:"alexsmobs:animal_dictionary",Count:1b,tag:{"akashictome:displayName":{text:"Animal Dictionary"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Animal Dictionary"}]}\'}}},twilightforest:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Traveller\'s Logbook [WIP]"},"patchouli:book":"twilightforest:guide","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Traveller\\\'s Logbook [WIP]"}]}\'}}},supplementaries:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"WIP"},"patchouli:book":"supplementaries:guide","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"WIP"}]}\'}}},eidolon:{id:"eidolon:codex",Count:1b,tag:{"akashictome:displayName":{text:"Ars Ecclesia"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Ars Ecclesia"}]}\'}}},outvoted:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Outvoted"},"patchouli:book":"outvoted:book","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Outvoted"}]}\'}}}}}')

events.listen('recipes', (event) => {

    event.shapeless('minecraft:chest', '#forge:chests').id('momo:chest_revert')
    event.shapeless('minecraft:bookshelf', '#forge:bookshelves').id('momo:bookshelf_revert')
    event.shapeless('2x eidolon:pewter_blend', ['create:zinc_ingot', 'minecraft:iron_ingot']).id('eidolon:pewter_blend')
    event.shapeless('comforts:rope_and_nail', ['minecraft:iron_ingot', 'supplementaries:rope']).id('comforts:rope_and_nail')
    event.shapeless('momo:lesser_ender_eye', ['minecraft:ender_pearl', 'minecraft:blaze_powder', 'minecraft:blaze_powder']).id('momo:lesser_ender_eye')
    event.shapeless('minecraft:coal', '8x tinycoal:tinycoal').id('momo:tinycoal_revert')
    event.shapeless('minecraft:charcoal', '8x tinycoal:tinycharcoal').id('momo:tinycharcoal_revert')
    event.shapeless('2x momo:hemolymph_pustules', 'alexsmobs:hemolymph_sac').id('momo:hemolymph_pustules')
    event.shapeless(global.akashictome, ['minecraft:book', '#forge:bookshelves']).id('akashictome:tome')

    event.recipes.createMixing('moreminecarts:glass_spines', 'infernalexp:glowdust_sand').heated().id('momo:glass_spines')
    event.recipes.createCrushing('4x minecraft:string', '#forge:wool').id('create:crushing/wool')
    event.recipes.createMilling('4x minecraft:string', '#forge:wool').id('create:milling/wool')
    event.recipes.createCrushing('2x betterendforge:ender_shard', 'minecraft:ender_pearl').id('momo:crushing_ender_shard')
    event.recipes.createMilling('2x betterendforge:ender_shard', 'minecraft:ender_pearl').id('momo:milling_ender_shard')

    event.smithing('twilightforest:fiery_ingot', 'twilightforest:knightmetal_ingot', 'twilightforest:fiery_blood').id('twilightforest:material/fiery_iron_ingot')
    const armors = ['helmet', 'chestplate', 'leggings', 'boots']
    armors.forEach((piece) => {
        event.smithing('betterendforge:crystalite_' + piece, 'netherite_' + piece, 'momo:eternal_ingot').id('betterendforge:crystalite_' + piece)
    })


    //ORE STUFF
    event.stonecutting('momo:raw_coal', 'minecraft:coal_ore')
    event.stonecutting('momo:raw_diamond', 'minecraft:diamond_ore')
    event.stonecutting('momo:raw_emerald', 'minecraft:emerald_ore')
    event.stonecutting('momo:raw_gold', 'minecraft:gold_ore')
    event.stonecutting('momo:raw_iron', 'minecraft:iron_ore')
    event.stonecutting('momo:raw_lapis', 'minecraft:lapis_ore')
    event.stonecutting('momo:raw_redstone', 'minecraft:redstone_ore')
    event.stonecutting('momo:raw_copper', 'create:copper_ore')
    event.stonecutting('momo:raw_zinc', 'create:zinc_ore')
    event.stonecutting('minecraft:coal_ore', 'momo:raw_coal')
    event.stonecutting('minecraft:diamond_ore', 'momo:raw_diamond')
    event.stonecutting('minecraft:emerald_ore', 'momo:raw_emerald')
    event.stonecutting('minecraft:gold_ore', 'momo:raw_gold')
    event.stonecutting('minecraft:iron_ore', 'momo:raw_iron')
    event.stonecutting('minecraft:lapis_ore', 'momo:raw_lapis')
    event.stonecutting('minecraft:redstone_ore', 'momo:raw_redstone')
    event.stonecutting('create:copper_ore', 'momo:raw_copper')
    event.stonecutting('create:zinc_ore', 'momo:raw_zinc')
    event.recipes.createMilling('minecraft:coal', 'momo:raw_coal')
    event.recipes.createMilling('minecraft:diamond', 'momo:raw_diamond')
    event.recipes.createMilling('minecraft:emerald', 'momo:raw_emerald')
    event.recipes.createMilling('minecraft:lapis_lazuli', 'momo:raw_lapis')
    event.recipes.createMilling('minecraft:redstone', 'momo:raw_redstone')
})