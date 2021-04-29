//Listen to player login event
events.listen('player.logged_in', function (event) {
    // Check if player doesn't have "starting_items" gamestage yet
    if (!event.hasGameStage('starting_items')) {
      // Add the gamestage
      event.addGameStage('starting_items')
      // Give some items to player
      event.player.give (Item.of('antiqueatlas:antique_atlas').enchant('soulbound:soulbound', 1))
      event.player.give (Item.of('quark:soul_compass').enchant('soulbound:soulbound', 1))
      event.player.give (Item.of('enigmaticlegacy:enigmatic_amulet').enchant('soulbound:soulbound', 1))
      event.player.give ('enigmaticlegacy:cursed_ring')
    }
  })


///give @p quark:soul_compass{Enchantments:[{id: 'soulbound:soulbound',lvl:1}]} 1
///give @p antiqueatlas:antique_atlas{Enchantments:[{id: 'soulbound:soulbound',lvl:1}]} 1