//Listen to player login event
events.listen('player.logged_in', function (event) {
    // Check if player doesn't have "starting_items" gamestage yet
    if (!event.hasGameStage('starting_items')) {
      // Add the gamestage
      event.addGameStage('starting_items')
      // Give some items to player
      event.player.give (Item.of('enigmaticlegacy:enigmatic_amulet', {"quark:RuneAttached":1,Enchantments:[{lvl:1,id:"soulbound:soulbound"}],"quark:RuneColor":{id:"quark:black_rune",Count:1}}))
      event.player.give (Item.of('enigmaticlegacy:cursed_ring', {"quark:RuneAttached":1,Enchantments:[{lvl:1,id:"soulbound:soulbound"}],"quark:RuneColor":{id:"quark:black_rune",Count:1}}))
    }
  })