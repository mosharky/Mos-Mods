onEvent('worldgen.add', event => {

//COPPER PARAMETERS
copper_clusterMinSize = 4
copper_clusterMaxSize = 18
copper_clusterCount = 5
copper_minHeight = 20
copper_maxHeight = 85

//ZINC PARAMETERS
zinc_clusterMinSize = 4
zinc_clusterMaxSize = 6
zinc_clusterCount = 2
zinc_minHeight = 1
zinc_maxHeight = 30

//COAL PARAMETERS
coal_clusterMinSize = 8
coal_clusterMaxSize = 16
coal_clusterCount = 5
coal_minHeight = 1
coal_maxHeight = 128

//DIAMOND PARAMETERS
diamond_clusterMinSize = 2
diamond_clusterMaxSize = 7
diamond_clusterCount = 1
diamond_minHeight = 1
diamond_maxHeight = 16

//EMERALD PARAMETERS
emerald_clusterMinSize = 1
emerald_clusterMaxSize = 1
emerald_clusterCount = 2
emerald_minHeight = 4
emerald_maxHeight = 32

//GOLD PARAMETERS
gold_clusterMinSize = 3
gold_clusterMaxSize = 8
gold_clusterCount = 5
gold_minHeight = 1
gold_maxHeight = 32

//IRON PARAMETERS
iron_clusterMinSize = 3
iron_clusterMaxSize = 8
iron_clusterCount = 10
iron_minHeight = 1
iron_maxHeight = 64

//LAPIS PARAMETERS
lapis_clusterMinSize = 3
lapis_clusterMaxSize = 6
lapis_clusterCount = 1
lapis_minHeight = 1
lapis_maxHeight = 30

//REDSTONE PARAMETERS
redstone_clusterMinSize = 3
redstone_clusterMaxSize = 7
redstone_clusterCount = 3
redstone_minHeight = 1
redstone_maxHeight = 16


    //Copper
    event.addOre(ore => {
        ore.block = 'momo:deepslate_copper_ore'
        ore.spawnsIn.values = [
            'quark:deepslate',
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:limestone_copper_ore'
        ore.spawnsIn.values = [
            'create:limestone',
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:aridrock_copper_ore'
        ore.spawnsIn.values = [
            'darkerdepths:aridrock'
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:rhyolite_copper_ore'
        ore.spawnsIn.values = [
            'darkerdepths:limestone'
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:shale_copper_ore'
        ore.spawnsIn.values = [
            'darkerdepths:shale'
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:dolomite_copper_ore'
        ore.spawnsIn.values = [
            'create:dolomite'
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:gabbro_copper_ore'
        ore.spawnsIn.values = [
            'create:gabbro'
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:scoria_copper_ore'
        ore.spawnsIn.values = [
            'create:natural_scoria',
            'chisel:basalt/raw'
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:weathered_limestone_copper_ore'
        ore.spawnsIn.values = [
            'create:weathered_limestone'
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:grimestone_copper_ore'
        ore.spawnsIn.values = [
            'darkerdepths:grimestone',
            'darkerdepths:mossy_grimestone'
        ]
        ore.clusterMinSize = copper_clusterMinSize
        ore.clusterMaxSize = copper_clusterMaxSize
        ore.clusterCount = copper_clusterCount
        ore.minHeight = copper_minHeight
        ore.maxHeight = copper_maxHeight
    }),


    //Zinc
    event.addOre(ore => {
        ore.block = 'momo:deepslate_zinc_ore'
        ore.spawnsIn.values = [
            'quark:deepslate',
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:limestone_zinc_ore'
        ore.spawnsIn.values = [
            'create:limestone',
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:aridrock_zinc_ore'
        ore.spawnsIn.values = [
            'darkerdepths:aridrock'
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:rhyolite_zinc_ore'
        ore.spawnsIn.values = [
            'darkerdepths:limestone'
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:shale_zinc_ore'
        ore.spawnsIn.values = [
            'darkerdepths:shale'
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:dolomite_zinc_ore'
        ore.spawnsIn.values = [
            'create:dolomite'
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:gabbro_zinc_ore'
        ore.spawnsIn.values = [
            'create:gabbro'
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:scoria_zinc_ore'
        ore.spawnsIn.values = [
            'create:natural_scoria',
            'chisel:basalt/raw'
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:weathered_limestone_zinc_ore'
        ore.spawnsIn.values = [
            'create:weathered_limestone'
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
        }),
    event.addOre(ore => {
        ore.block = 'momo:grimestone_zinc_ore'
        ore.spawnsIn.values = [
            'darkerdepths:grimestone',
            'darkerdepths:mossy_grimestone'
        ]
        ore.clusterMinSize = zinc_clusterMinSize
        ore.clusterMaxSize = zinc_clusterMaxSize
        ore.clusterCount = zinc_clusterCount
        ore.minHeight = zinc_minHeight
        ore.maxHeight = zinc_maxHeight
    }),


    //Coal
    event.addOre(ore => {
        ore.block = 'momo:deepslate_coal_ore'
        ore.spawnsIn.values = [
            'quark:deepslate',
        ]
        ore.clusterMinSize = coal_clusterMinSize
        ore.clusterMaxSize = coal_clusterMaxSize
        ore.clusterCount = coal_clusterCount
        ore.minHeight = coal_minHeight
        ore.maxHeight = coal_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:limestone_coal_ore'
        ore.spawnsIn.values = [
            'create:limestone',
        ]
        ore.clusterMinSize = coal_clusterMinSize
        ore.clusterMaxSize = coal_clusterMaxSize
        ore.clusterCount = coal_clusterCount
        ore.minHeight = coal_minHeight
        ore.maxHeight = coal_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:dolomite_coal_ore'
        ore.spawnsIn.values = [
            'create:dolomite'
        ]
        ore.clusterMinSize = coal_clusterMinSize
        ore.clusterMaxSize = coal_clusterMaxSize
        ore.clusterCount = coal_clusterCount
        ore.minHeight = coal_minHeight
        ore.maxHeight = coal_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:gabbro_coal_ore'
        ore.spawnsIn.values = [
            'create:gabbro'
        ]
        ore.clusterMinSize = coal_clusterMinSize
        ore.clusterMaxSize = coal_clusterMaxSize
        ore.clusterCount = coal_clusterCount
        ore.minHeight = coal_minHeight
        ore.maxHeight = coal_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:scoria_coal_ore'
        ore.spawnsIn.values = [
            'create:natural_scoria',
            'chisel:basalt/raw'
        ]
        ore.clusterMinSize = coal_clusterMinSize
        ore.clusterMaxSize = coal_clusterMaxSize
        ore.clusterCount = coal_clusterCount
        ore.minHeight = coal_minHeight
        ore.maxHeight = coal_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:weathered_limestone_coal_ore'
        ore.spawnsIn.values = [
            'create:weathered_limestone'
        ]
        ore.clusterMinSize = coal_clusterMinSize
        ore.clusterMaxSize = coal_clusterMaxSize
        ore.clusterCount = coal_clusterCount
        ore.minHeight = coal_minHeight
        ore.maxHeight = coal_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:grimestone_coal_ore'
        ore.spawnsIn.values = [
            'darkerdepths:grimestone',
            'darkerdepths:mossy_grimestone'
        ]
        ore.clusterMinSize = coal_clusterMinSize
        ore.clusterMaxSize = coal_clusterMaxSize
        ore.clusterCount = coal_clusterCount
        ore.minHeight = coal_minHeight
        ore.maxHeight = coal_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:shale_coal_ore'
        ore.spawnsIn.values = [
            'darkerdepths:shale'
        ]
        ore.clusterMinSize = coal_clusterMinSize
        ore.clusterMaxSize = coal_clusterMaxSize
        ore.clusterCount = coal_clusterCount
        ore.minHeight = coal_minHeight
        ore.maxHeight = coal_maxHeight
    }),

    
    //Diamond
    event.addOre(ore => {
        ore.block = 'momo:deepslate_diamond_ore'
        ore.spawnsIn.values = [
            'quark:deepslate',
        ]
        ore.clusterMinSize = diamond_clusterMinSize
        ore.clusterMaxSize = diamond_clusterMaxSize
        ore.clusterCount = diamond_clusterCount
        ore.minHeight = diamond_minHeight
        ore.maxHeight = diamond_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:limestone_diamond_ore'
        ore.spawnsIn.values = [
            'create:limestone',
        ]
        ore.clusterMinSize = diamond_clusterMinSize
        ore.clusterMaxSize = diamond_clusterMaxSize
        ore.clusterCount = diamond_clusterCount
        ore.minHeight = diamond_minHeight
        ore.maxHeight = diamond_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:dolomite_diamond_ore'
        ore.spawnsIn.values = [
            'create:dolomite'
        ]
        ore.clusterMinSize = diamond_clusterMinSize
        ore.clusterMaxSize = diamond_clusterMaxSize
        ore.clusterCount = diamond_clusterCount
        ore.minHeight = diamond_minHeight
        ore.maxHeight = 16
    }),
    event.addOre(ore => {
        ore.block = 'momo:gabbro_diamond_ore'
        ore.spawnsIn.values = [
            'create:gabbro'
        ]
        ore.clusterMinSize = diamond_clusterMinSize
        ore.clusterMaxSize = diamond_clusterMaxSize
        ore.clusterCount = diamond_clusterCount
        ore.minHeight = diamond_minHeight
        ore.maxHeight = diamond_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:scoria_diamond_ore'
        ore.spawnsIn.values = [
            'create:natural_scoria',
            'chisel:basalt/raw'
        ]
        ore.clusterMinSize = diamond_clusterMinSize
        ore.clusterMaxSize = diamond_clusterMaxSize
        ore.clusterCount = diamond_clusterCount
        ore.minHeight = diamond_minHeight
        ore.maxHeight = diamond_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:weathered_limestone_diamond_ore'
        ore.spawnsIn.values = [
            'create:weathered_limestone'
        ]
        ore.clusterMinSize = diamond_clusterMinSize
        ore.clusterMaxSize = diamond_clusterMaxSize
        ore.clusterCount = diamond_clusterCount
        ore.minHeight = diamond_minHeight
        ore.maxHeight = diamond_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:grimestone_diamond_ore'
        ore.spawnsIn.values = [
            'darkerdepths:grimestone',
            'darkerdepths:mossy_grimestone'
        ]
        ore.clusterMinSize = diamond_clusterMinSize
        ore.clusterMaxSize = diamond_clusterMaxSize
        ore.clusterCount = diamond_clusterCount
        ore.minHeight = diamond_minHeight
        ore.maxHeight = diamond_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:shale_diamond_ore'
        ore.spawnsIn.values = [
            'darkerdepths:shale'
        ]
        ore.clusterMinSize = diamond_clusterMinSize
        ore.clusterMaxSize = diamond_clusterMaxSize
        ore.clusterCount = diamond_clusterCount
        ore.minHeight = diamond_minHeight
        ore.maxHeight = diamond_maxHeight
    }),


    //Emerald
    event.addOre(ore => {
        ore.block = 'momo:deepslate_emerald_ore'
        ore.spawnsIn.values = [
            'quark:deepslate',
        ]
        ore.clusterMinSize = emerald_clusterMinSize
        ore.clusterMaxSize = emerald_clusterMaxSize
        ore.clusterCount = emerald_clusterCount
        ore.minHeight = emerald_minHeight
        ore.maxHeight = emerald_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:limestone_emerald_ore'
        ore.spawnsIn.values = [
            'create:limestone',
        ]
        ore.clusterMinSize = emerald_clusterMinSize
        ore.clusterMaxSize = emerald_clusterMaxSize
        ore.clusterCount = emerald_clusterCount
        ore.minHeight = emerald_minHeight
        ore.maxHeight = emerald_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:dolomite_emerald_ore'
        ore.spawnsIn.values = [
            'create:dolomite'
        ]
        ore.biomes.values = [
            '#extreme_hills'
        ]
        ore.clusterMinSize = emerald_clusterMinSize
        ore.clusterMaxSize = emerald_clusterMaxSize
        ore.clusterCount = emerald_clusterCount
        ore.minHeight = emerald_minHeight
        ore.maxHeight = emerald_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:gabbro_emerald_ore'
        ore.spawnsIn.values = [
            'create:gabbro'
        ]
        ore.biomes.values = [
            '#extreme_hills'
        ]
        ore.clusterMinSize = emerald_clusterMinSize
        ore.clusterMaxSize = emerald_clusterMaxSize
        ore.clusterCount = emerald_clusterCount
        ore.minHeight = emerald_minHeight
        ore.maxHeight = emerald_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:scoria_emerald_ore'
        ore.spawnsIn.values = [
            'create:natural_scoria',
            'chisel:basalt/raw'
        ]
        ore.biomes.values = [
            '#extreme_hills'
        ]
        ore.clusterMinSize = emerald_clusterMinSize
        ore.clusterMaxSize = emerald_clusterMaxSize
        ore.clusterCount = emerald_clusterCount
        ore.minHeight = emerald_minHeight
        ore.maxHeight = emerald_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:weathered_limestone_emerald_ore'
        ore.spawnsIn.values = [
            'create:weathered_limestone'
        ]
        ore.biomes.values = [
            '#extreme_hills'
        ]
        ore.clusterMinSize = emerald_clusterMinSize
        ore.clusterMaxSize = emerald_clusterMaxSize
        ore.clusterCount = emerald_clusterCount
        ore.minHeight = emerald_minHeight
        ore.maxHeight = emerald_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:grimestone_emerald_ore'
        ore.spawnsIn.values = [
            'darkerdepths:grimestone',
            'darkerdepths:mossy_grimestone'
        ]
        ore.clusterMinSize = emerald_clusterMinSize
        ore.clusterMaxSize = emerald_clusterMaxSize
        ore.clusterCount = emerald_clusterCount
        ore.minHeight = emerald_minHeight
        ore.maxHeight = emerald_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:shale_emerald_ore'
        ore.spawnsIn.values = [
            'darkerdepths:shale'
        ]
        ore.clusterMinSize = emerald_clusterMinSize
        ore.clusterMaxSize = emerald_clusterMaxSize
        ore.clusterCount = emerald_clusterCount
        ore.minHeight = emerald_minHeight
        ore.maxHeight = emerald_maxHeight
    }),


    //Gold
    event.addOre(ore => {
        ore.block = 'momo:deepslate_gold_ore'
        ore.spawnsIn.values = [
            'quark:deepslate',
        ]
        ore.clusterMinSize = gold_clusterMinSize
        ore.clusterMaxSize = gold_clusterMaxSize
        ore.clusterCount = gold_clusterCount
        ore.minHeight = gold_minHeight
        ore.maxHeight = gold_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:limestone_gold_ore'
        ore.spawnsIn.values = [
            'create:limestone',
        ]
        ore.clusterMinSize = gold_clusterMinSize
        ore.clusterMaxSize = gold_clusterMaxSize
        ore.clusterCount = gold_clusterCount
        ore.minHeight = gold_minHeight
        ore.maxHeight = gold_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:dolomite_gold_ore'
        ore.spawnsIn.values = [
            'create:dolomite'
        ]
        ore.clusterMinSize = gold_clusterMinSize
        ore.clusterMaxSize = gold_clusterMaxSize
        ore.clusterCount = gold_clusterCount
        ore.minHeight = gold_minHeight
        ore.maxHeight = gold_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:gabbro_gold_ore'
        ore.spawnsIn.values = [
            'create:gabbro'
        ]
        ore.clusterMinSize = gold_clusterMinSize
        ore.clusterMaxSize = gold_clusterMaxSize
        ore.clusterCount = gold_clusterCount
        ore.minHeight = gold_minHeight
        ore.maxHeight = gold_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:scoria_gold_ore'
        ore.spawnsIn.values = [
            'create:natural_scoria',
            'chisel:basalt/raw'
        ]
        ore.clusterMinSize = gold_clusterMinSize
        ore.clusterMaxSize = gold_clusterMaxSize
        ore.clusterCount = gold_clusterCount
        ore.minHeight = gold_minHeight
        ore.maxHeight = gold_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:weathered_limestone_gold_ore'
        ore.spawnsIn.values = [
            'create:weathered_limestone'
        ]
        ore.clusterMinSize = gold_clusterMinSize
        ore.clusterMaxSize = gold_clusterMaxSize
        ore.clusterCount = gold_clusterCount
        ore.minHeight = gold_minHeight
        ore.maxHeight = gold_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:grimestone_gold_ore'
        ore.spawnsIn.values = [
            'darkerdepths:grimestone',
            'darkerdepths:mossy_grimestone'
        ]
        ore.clusterMinSize = gold_clusterMinSize
        ore.clusterMaxSize = gold_clusterMaxSize
        ore.clusterCount = gold_clusterCount
        ore.minHeight = gold_minHeight
        ore.maxHeight = gold_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:shale_gold_ore'
        ore.spawnsIn.values = [
            'darkerdepths:shale'
        ]
        ore.clusterMinSize = gold_clusterMinSize
        ore.clusterMaxSize = gold_clusterMaxSize
        ore.clusterCount = gold_clusterCount
        ore.minHeight = gold_minHeight
        ore.maxHeight = gold_maxHeight
    }),


    //Iron
    event.addOre(ore => {
        ore.block = 'momo:deepslate_iron_ore'
        ore.spawnsIn.values = [
            'quark:deepslate',
        ]
        ore.clusterMinSize = iron_clusterMinSize
        ore.clusterMaxSize = iron_clusterMaxSize
        ore.clusterCount = iron_clusterCount
        ore.minHeight = iron_minHeight
        ore.maxHeight = iron_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:limestone_iron_ore'
        ore.spawnsIn.values = [
            'create:limestone',
        ]
        ore.clusterMinSize = iron_clusterMinSize
        ore.clusterMaxSize = iron_clusterMaxSize
        ore.clusterCount = iron_clusterCount
        ore.minHeight = iron_minHeight
        ore.maxHeight = iron_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:dolomite_iron_ore'
        ore.spawnsIn.values = [
            'create:dolomite'
        ]
        ore.clusterMinSize = iron_clusterMinSize
        ore.clusterMaxSize = iron_clusterMaxSize
        ore.clusterCount = iron_clusterCount
        ore.minHeight = iron_minHeight
        ore.maxHeight = iron_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:gabbro_iron_ore'
        ore.spawnsIn.values = [
            'create:gabbro'
        ]
        ore.clusterMinSize = iron_clusterMinSize
        ore.clusterMaxSize = iron_clusterMaxSize
        ore.clusterCount = iron_clusterCount
        ore.minHeight = iron_minHeight
        ore.maxHeight = iron_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:scoria_iron_ore'
        ore.spawnsIn.values = [
            'create:natural_scoria',
            'chisel:basalt/raw'
        ]
        ore.clusterMinSize = iron_clusterMinSize
        ore.clusterMaxSize = iron_clusterMaxSize
        ore.clusterCount = iron_clusterCount
        ore.minHeight = iron_minHeight
        ore.maxHeight = iron_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:weathered_limestone_iron_ore'
        ore.spawnsIn.values = [
            'create:weathered_limestone'
        ]
        ore.clusterMinSize = iron_clusterMinSize
        ore.clusterMaxSize = iron_clusterMaxSize
        ore.clusterCount = iron_clusterCount
        ore.minHeight = iron_minHeight
        ore.maxHeight = iron_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:grimestone_iron_ore'
        ore.spawnsIn.values = [
            'darkerdepths:grimestone',
            'darkerdepths:mossy_grimestone'
        ]
        ore.clusterMinSize = iron_clusterMinSize
        ore.clusterMaxSize = iron_clusterMaxSize
        ore.clusterCount = iron_clusterCount
        ore.minHeight = iron_minHeight
        ore.maxHeight = iron_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:shale_iron_ore'
        ore.spawnsIn.values = [
            'darkerdepths:shale'
        ]
        ore.clusterMinSize = iron_clusterMinSize
        ore.clusterMaxSize = iron_clusterMaxSize
        ore.clusterCount = iron_clusterCount
        ore.minHeight = iron_minHeight
        ore.maxHeight = iron_maxHeight
    }),


    //Lapis Lazuli
    event.addOre(ore => {
        ore.block = 'momo:deepslate_lapis_ore'
        ore.spawnsIn.values = [
            'quark:deepslate',
        ]
        ore.clusterMinSize = lapis_clusterMinSize
        ore.clusterMaxSize = lapis_clusterMaxSize
        ore.clusterCount = lapis_clusterCount
        ore.minHeight = lapis_minHeight
        ore.maxHeight = lapis_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:limestone_lapis_ore'
        ore.spawnsIn.values = [
            'create:limestone',
        ]
        ore.clusterMinSize = lapis_clusterMinSize
        ore.clusterMaxSize = lapis_clusterMaxSize
        ore.clusterCount = lapis_clusterCount
        ore.minHeight = lapis_minHeight
        ore.maxHeight = lapis_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:dolomite_lapis_ore'
        ore.spawnsIn.values = [
            'create:dolomite'
        ]
        ore.clusterMinSize = lapis_clusterMinSize
        ore.clusterMaxSize = lapis_clusterMaxSize
        ore.clusterCount = lapis_clusterCount
        ore.minHeight = lapis_minHeight
        ore.maxHeight = lapis_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:gabbro_lapis_ore'
        ore.spawnsIn.values = [
            'create:gabbro'
        ]
        ore.clusterMinSize = lapis_clusterMinSize
        ore.clusterMaxSize = lapis_clusterMaxSize
        ore.clusterCount = lapis_clusterCount
        ore.minHeight = lapis_minHeight
        ore.maxHeight = lapis_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:scoria_lapis_ore'
        ore.spawnsIn.values = [
            'create:natural_scoria',
            'chisel:basalt/raw'
        ]
        ore.clusterMinSize = lapis_clusterMinSize
        ore.clusterMaxSize = lapis_clusterMaxSize
        ore.clusterCount = lapis_clusterCount
        ore.minHeight = lapis_minHeight
        ore.maxHeight = lapis_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:weathered_limestone_lapis_ore'
        ore.spawnsIn.values = [
            'create:weathered_limestone'
        ]
        ore.clusterMinSize = lapis_clusterMinSize
        ore.clusterMaxSize = lapis_clusterMaxSize
        ore.clusterCount = lapis_clusterCount
        ore.minHeight = lapis_minHeight
        ore.maxHeight = lapis_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:grimestone_lapis_ore'
        ore.spawnsIn.values = [
            'darkerdepths:grimestone',
            'darkerdepths:mossy_grimestone'
        ]
        ore.clusterMinSize = lapis_clusterMinSize
        ore.clusterMaxSize = lapis_clusterMaxSize
        ore.clusterCount = lapis_clusterCount
        ore.minHeight = lapis_minHeight
        ore.maxHeight = lapis_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:shale_lapis_ore'
        ore.spawnsIn.values = [
            'darkerdepths:shale'
        ]
        ore.clusterMinSize = lapis_clusterMinSize
        ore.clusterMaxSize = lapis_clusterMaxSize
        ore.clusterCount = lapis_clusterCount
        ore.minHeight = lapis_minHeight
        ore.maxHeight = lapis_maxHeight
    }),


    //Redstone
    event.addOre(ore => {
        ore.block = 'momo:deepslate_redstone_ore'
        ore.spawnsIn.values = [
            'quark:deepslate',
        ]
        ore.clusterMinSize = redstone_clusterMinSize
        ore.clusterMaxSize = redstone_clusterMaxSize
        ore.clusterCount = redstone_clusterCount
        ore.minHeight = redstone_minHeight
        ore.maxHeight = redstone_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:limestone_redstone_ore'
        ore.spawnsIn.values = [
            'create:limestone',
        ]
        ore.clusterMinSize = redstone_clusterMinSize
        ore.clusterMaxSize = redstone_clusterMaxSize
        ore.clusterCount = redstone_clusterCount
        ore.minHeight = redstone_minHeight
        ore.maxHeight = redstone_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:dolomite_redstone_ore'
        ore.spawnsIn.values = [
            'create:dolomite'
        ]
        ore.clusterMinSize = redstone_clusterMinSize
        ore.clusterMaxSize = redstone_clusterMaxSize
        ore.clusterCount = redstone_clusterCount
        ore.minHeight = redstone_minHeight
        ore.maxHeight = redstone_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:gabbro_redstone_ore'
        ore.spawnsIn.values = [
            'create:gabbro'
        ]
        ore.clusterMinSize = redstone_clusterMinSize
        ore.clusterMaxSize = redstone_clusterMaxSize
        ore.clusterCount = redstone_clusterCount
        ore.minHeight = redstone_minHeight
        ore.maxHeight = redstone_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:scoria_redstone_ore'
        ore.spawnsIn.values = [
            'create:natural_scoria',
            'chisel:basalt/raw'
        ]
        ore.clusterMinSize = redstone_clusterMinSize
        ore.clusterMaxSize = redstone_clusterMaxSize
        ore.clusterCount = redstone_clusterCount
        ore.minHeight = redstone_minHeight
        ore.maxHeight = redstone_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:weathered_limestone_redstone_ore'
        ore.spawnsIn.values = [
            'create:weathered_limestone'
        ]
        ore.clusterMinSize = redstone_clusterMinSize
        ore.clusterMaxSize = redstone_clusterMaxSize
        ore.clusterCount = redstone_clusterCount
        ore.minHeight = redstone_minHeight
        ore.maxHeight = redstone_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:grimestone_redstone_ore'
        ore.spawnsIn.values = [
            'darkerdepths:grimestone',
            'darkerdepths:mossy_grimestone'
        ]
        ore.clusterMinSize = redstone_clusterMinSize
        ore.clusterMaxSize = redstone_clusterMaxSize
        ore.clusterCount = redstone_clusterCount
        ore.minHeight = redstone_minHeight
        ore.maxHeight = redstone_maxHeight
    }),
    event.addOre(ore => {
        ore.block = 'momo:shale_redstone_ore'
        ore.spawnsIn.values = [
            'darkerdepths:shale'
        ]
        ore.clusterMinSize = redstone_clusterMinSize
        ore.clusterMaxSize = redstone_clusterMaxSize
        ore.clusterCount = redstone_clusterCount
        ore.minHeight = redstone_minHeight
        ore.maxHeight = redstone_maxHeight
    })
});