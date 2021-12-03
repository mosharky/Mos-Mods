onEvent('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = [
            'comfortable_nether:iron_rich_basalt', 
            'comfortable_nether:ancient_netherrack', 
            'eidolon:lead_ore', 
            'darkerdepths:aridrock_silver_ore', 
            'darkerdepths:limestone_silver_ore', 
            'darkerdepths:silver_ore', 
            'chisel:basalt/raw', 
            'chisel:limestone/raw', 
            'chisel:marble/raw',
            'betterendforge:ender_ore',
            'betterendforge:thallasium_ore'
        ];
    });
});
