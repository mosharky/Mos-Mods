//Buried Treasure Loot Table
onEvent('chest.loot_tables', event => {
  event.modify('minecraft:buried_treasure', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('minecraft:heart_of_the_sea', 80)
    }),
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('dragonmounts:water_dragon_egg', 20)
        pool.addItem('create:copper_ingot', 100)
      })
  })
  event.modify('minecraft:simple_dungeon', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('enigmaticlegacy:recall_potion', 20)
      pool.addItem('create:copper_ingot', 50)
    })
  })
})

//Armor shard loot tables
onEvent('generic.loot_tables', event => {
  event.modify('twilightforest:structures/stronghold_room', table => {
    table.addPool(pool => {
      pool.rolls = 3
      pool.addItem('twilightforest:armor_shard')
    })
  })
})

//Straw loot tables
onEvent('block.loot_tables', event => {
  //Straw from Giant Grass
  event.modify('environmental:giant_tall_grass', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:item',
          conditions: [
            {
              condition: 'minecraft:block_state_property',
              block: 'environmental:giant_tall_grass',
            },
            {
              condition: 'minecraft:match_tool',
              predicate: {
                tag: 'farmersdelight:straw_harvesters'
              }
            },
            {
              condition: 'minecraft:random_chance',
              chance: 0.5
            }
          ],
          name: 'farmersdelight:straw'
        }
      )
    })
  })
  //Straw from Beachgrass
  event.modify('upgrade_aquatic:beachgrass', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:item',
          conditions: [
            {
              condition: 'minecraft:block_state_property',
              block: 'upgrade_aquatic:beachgrass',
            },
            {
              condition: 'minecraft:match_tool',
              predicate: {
                tag: 'farmersdelight:straw_harvesters'
              }
            },
            {
              condition: 'minecraft:random_chance',
              chance: 0.8
            }
          ],
          name: 'farmersdelight:straw'
        }
      )
    })
  })
})




//Ore stuff
onEvent('block.loot_tables', event => {
  event.addSimpleBlock(/.*copper_ore/, 'momo:raw_copper')
  event.addSimpleBlock(/.*gold_ore/, 'momo:raw_gold')
  event.addSimpleBlock(/.*iron_ore/, 'momo:raw_iron')
  event.addSimpleBlock(/.*zinc_ore/, 'momo:raw_zinc')
  event.addSimpleBlock('comfortable_nether:withered_remains', '2x minecraft:coal')
  event.addSimpleBlock('chisel:basalt/raw', 'create:scoria')

  //Coal Ore Drops
  event.addBlock(/.*coal_ore/, table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:alternatives',
          children: [
            {
              type: 'minecraft:item',
              conditions: [
                {
                  condition: 'minecraft:match_tool',
                  predicate: {
                    enchantments: [
                      {
                        enchantment: 'minecraft:silk_touch',
                        levels: {
                          min: 1
                        }
                      }
                    ]
                  }
                }
              ],
              name: 'momo:raw_coal'
            },
            {
              type: 'minecraft:item',
              functions: [
                {
                  function: 'minecraft:apply_bonus',
                  enchantment: 'minecraft:fortune',
                  formula: 'minecraft:ore_drops'
                },
                {
                  function: 'minecraft:explosion_decay'
                }
              ],
              name: 'minecraft:coal'
            }
          ]
        }
      )
    })
  })



  //Diamond Ore Drops
  event.addBlock(/.*diamond_ore/, table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:alternatives',
          children: [
            {
              type: 'minecraft:item',
              conditions: [
                {
                  condition: 'minecraft:match_tool',
                  predicate: {
                    enchantments: [
                      {
                        enchantment: 'minecraft:silk_touch',
                        levels: {
                          min: 1
                        }
                      }
                    ]
                  }
                }
              ],
              name: 'momo:raw_diamond'
            },
            {
              type: 'minecraft:item',
              functions: [
                {
                  function: 'minecraft:apply_bonus',
                  enchantment: 'minecraft:fortune',
                  formula: 'minecraft:ore_drops'
                },
                {
                  function: 'minecraft:explosion_decay'
                }
              ],
              name: 'minecraft:diamond'
            }
          ]
        }
      )
    })
  })



  //Emerald Ore Drops
  event.addBlock(/.*emerald_ore/, table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:alternatives',
          children: [
            {
              type: 'minecraft:item',
              conditions: [
                {
                  condition: 'minecraft:match_tool',
                  predicate: {
                    enchantments: [
                      {
                        enchantment: 'minecraft:silk_touch',
                        levels: {
                          min: 1
                        }
                      }
                    ]
                  }
                }
              ],
              name: 'momo:raw_emerald'
            },
            {
              type: 'minecraft:item',
              functions: [
                {
                  function: 'minecraft:apply_bonus',
                  enchantment: 'minecraft:fortune',
                  formula: 'minecraft:ore_drops'
                },
                {
                  function: 'minecraft:explosion_decay'
                }
              ],
              name: 'minecraft:emerald'
            }
          ]
        }
      )
    })
  })



  //Nether Gold Ore Drops
  event.addBlock('minecraft:nether_gold_ore', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:alternatives',
          children: [
            {
              type: 'minecraft:item',
              conditions: [
                {
                  condition: 'minecraft:match_tool',
                  predicate: {
                    enchantments: [
                      {
                        enchantment: 'minecraft:silk_touch',
                        levels: {
                          min: 1
                        }
                      }
                    ]
                  }
                }
              ],
              name: 'momo:raw_gold'
            },
            {
              type: 'minecraft:item',
              functions: [
                {
                  function: 'minecraft:set_count',
                  count: {
                    type: 'minecraft:uniform',
                    min: 2.0,
                    max: 6.0
                  },
                  add: false
                },
                {
                  function: 'minecraft:apply_bonus',
                  enchantment: 'minecraft:fortune',
                  formula: 'minecraft:ore_drops'
                },
                {
                  function: 'minecraft:explosion_decay'
                }
              ],
              name: 'minecraft:gold_nugget'
            }
          ]
        }
      )
    })
  })



  //Iron Rich Basalt Drops
  event.addBlock('comfortable_nether:iron_rich_basalt', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:alternatives',
          children: [
            {
              type: 'minecraft:item',
              conditions: [
                {
                  condition: 'minecraft:match_tool',
                  predicate: {
                    enchantments: [
                      {
                        enchantment: 'minecraft:silk_touch',
                        levels: {
                          min: 1
                        }
                      }
                    ]
                  }
                }
              ],
              name: 'momo:raw_iron'
            },
            {
              type: 'minecraft:item',
              functions: [
                {
                  function: 'minecraft:set_count',
                  count: {
                    type: 'minecraft:uniform',
                    min: 6.0,
                    max: 12.0
                  },
                  add: false
                },
                {
                  function: 'minecraft:apply_bonus',
                  enchantment: 'minecraft:fortune',
                  formula: 'minecraft:ore_drops'
                },
                {
                  function: 'minecraft:explosion_decay'
                }
              ],
              name: 'minecraft:iron_nugget'
            }
          ]
        }
      )
    })
  })

  //Bassalt Iron Ore drops
  event.addBlock('infernalexp:basalt_iron_ore', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:alternatives',
          children: [
            {
              type: 'minecraft:item',
              conditions: [
                {
                  condition: 'minecraft:match_tool',
                  predicate: {
                    enchantments: [
                      {
                        enchantment: 'minecraft:silk_touch',
                        levels: {
                          min: 1
                        }
                      }
                    ]
                  }
                }
              ],
              name: 'momo:raw_iron'
            },
            {
              type: 'minecraft:item',
              functions: [
                {
                  function: 'minecraft:set_count',
                  count: {
                    type: 'minecraft:uniform',
                    min: 6.0,
                    max: 12.0
                  },
                  add: false
                },
                {
                  function: 'minecraft:apply_bonus',
                  enchantment: 'minecraft:fortune',
                  formula: 'minecraft:ore_drops'
                },
                {
                  function: 'minecraft:explosion_decay'
                }
              ],
              name: 'minecraft:iron_nugget'
            }
          ]
        }
      )
    })
  })



  //Lapis Ore Drops
  event.addBlock(/.*lapis_ore/, table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:alternatives',
          children: [
            {
              type: 'minecraft:item',
              conditions: [
                {
                  condition: 'minecraft:match_tool',
                  predicate: {
                    enchantments: [
                      {
                        enchantment: 'minecraft:silk_touch',
                        levels: {
                          min: 1
                        }
                      }
                    ]
                  }
                }
              ],
              name: 'momo:raw_lapis'
            },
            {
              type: 'minecraft:item',
              functions: [
                {
                  function: 'minecraft:set_count',
                  count: {
                    type: 'minecraft:uniform',
                    min: 4.0,
                    max: 9.0
                  },
                  add: false
                },
                {
                  function: 'minecraft:apply_bonus',
                  enchantment: 'minecraft:fortune',
                  formula: 'minecraft:ore_drops'
                },
                {
                  function: 'minecraft:explosion_decay'
                }
              ],
              name: 'minecraft:lapis_lazuli'
            }
          ]
        }
      )
    })
  })



  //Redstone Ore Drops
  event.addBlock(/.*redstone_ore/, table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:alternatives',
          children: [
            {
              type: 'minecraft:item',
              conditions: [
                {
                  condition: 'minecraft:match_tool',
                  predicate: {
                    enchantments: [
                      {
                        enchantment: 'minecraft:silk_touch',
                        levels: {
                          min: 1
                        }
                      }
                    ]
                  }
                }
              ],
              name: 'momo:raw_redstone'
            },
            {
              type: 'minecraft:item',
              functions: [
                {
                  function: 'minecraft:set_count',
                  count: {
                    type: 'minecraft:uniform',
                    min: 4.0,
                    max: 5.0
                  },
                  add: false
                },
                {
                  function: 'minecraft:apply_bonus',
                  enchantment: 'minecraft:fortune',
                  formula: 'minecraft:uniform_bonus_count',
                  parameters: {
                    bonusMultiplier: 1
                  }
                },
                {
                  function: 'minecraft:explosion_decay'
                }
              ],
              name: 'minecraft:redstone'
            }
          ]
        }
      )
    })
  })
})