onEvent('item.tooltip', tooltip => {
    //tooltip.add(['quark:backpack', 'quark:magnet', 'quark:crate'], 'Added by Quark Oddities')
    //Acacia Blossom
    tooltip.add('alexsmobs:acacia_blossom',
      text.gray("Elephant food!"))
    //Echolocator
    tooltip.add('alexsmobs:echolocator',
      text.gray("Locates the nearest cave"))
    //Banana Dropping Leaves
    tooltip.add(['minecraft:jungle_leaves', 'atmospheric:rosewood_leaves', 'atmospheric:morado_leaves', 'atmospheric:flowering_morado_leaves'],
      text.gray("Drops bananas for your favorite primates!"))
    //Crystal Shards
    tooltip.add('betterendforge:crystal_shards',
      text.gray("Dropped from Aurora Crystals in The End"))
    //Shadow Steel
    tooltip.add('create:refined_radiance',
      text.gray("Obtained by throwing Chromatic Compound into a beacon's beam"))
    //Refined Radiance
    tooltip.add('create:shadow_steel',
      text.gray("Obtained by throwing Chromatic Compound into the void"))
    //Forgotten Nugget
    tooltip.add('undergarden:forgotten_nugget',
      text.gray("Obtained by killing the Forgotten Guardian in the Catacombs of the Undergarden"))
    //Cursed Ring
    tooltip.add('undergarden:forgotten_nugget',
      text.red("WARNING: PLEASE READ DESCRIPTION (HOLD SHIFT). VERY DANGEROUS ITEM."))
})
  