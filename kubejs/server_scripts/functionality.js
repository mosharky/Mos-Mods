onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give(global.akashictome)
    }

    if (!event.player.stages.has('antique_atlas')) {
        event.player.stages.add('antique_atlas')
        event.player.give('antiqueatlas:empty_antique_atlas')
    }
});