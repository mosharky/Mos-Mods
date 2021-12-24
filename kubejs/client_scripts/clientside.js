onEvent('jei.hide.items', event => {
	event.hide(global.fullRemovals)
})

onEvent('item.tooltip', tooltip => {
	tooltip.add('enigmaticlegacy:cursed_ring',
		text.red("YOU CANNOT TAKE IT OFF. IT IS TO REMAIN, ON YOUR FINGER, FORVER*"))
	tooltip.add('antiqueatlas:empty_antique_atlas',
		text.gray("Try it out, hold it in your hands"))
})

onEvent('jei.information', event => {
	event.add(global.fullRemovals, ['DISABLED'])
	event.add('betterendforge:crystal_shards', ['Obtained from the Crystal Mountains biome in the End'])
	event.add('enigmaticlegacy:astral_dust', ['Used to craft ultimate potions! More information in The Acknowledgement'])
	event.add('betterendforge:ender_shard', ['Obtained from End Cities'])
	event.add('dragonmounts:ender_dragon_egg', ['Obtained from End Cities'])
	event.add('dragonmounts:ghost_dragon_egg', ['Obtained from Woodland Mansion chests'])
	event.add('dragonmounts:water_dragon_egg', ['Obtained from Buried Treasure chests'])
	event.add('upgrade_aquatic:elder_eye', ['Dropped by Elder Guardians'])
})