events.listen('worldgen.add', (event) => {
    var data = {
        stones: [
            {
                block: 'create:natural_scoria',
                clusterMinSize: 128,
                clusterMaxSize: 128,
                minHeight: 0,
                maxHeight: 1,
                clusterCount: 1
            }
        ]
    };
    let i = 1;
    data.stones.forEach((stone) => {
        let minHeight = i * 8 - 4;
        let maxHeight = i * 8 + 4;
        event.addOre((ore) => {
            ore.block = stone.block;
            ore.clusterMinSize = stone.clusterMinSize;
            ore.clusterMaxSize = stone.clusterMaxSize;
            ore.minHeight = minHeight;
            ore.maxHeight = maxHeight;
            ore.clusterCount = stone.clusterCount;
            ore.worldgenLayer = 'local_modifications';
        });
        i++;
    });
});