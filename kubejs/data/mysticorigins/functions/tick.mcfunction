execute unless score #creatorloggedin mysticdata matches 1 run tellraw @a[name="Bluestone_Bot"] [{"text": "Hello ","color": "yellow"}, {"text": "Bluestone_Bot","color": "aqua"}, {"text": ", this server has the Mystic Origins datapack version: ","color": "yellow"}, {"score": {"name": "#version","objective": "mysticdata"}, "color": "light_purple"}]
execute unless score #creatorloggedin mysticdata matches 1 run tellraw @a[name="Bluestone_Bot"] [{"text": "Total runtime since version 00.12.00 until current version: ","color": "yellow"}, {"score": {"name": "#pre_hour","objective": "mysticdata"}, "color": "gray"}, {"text": ":","color": "white"}, {"score": {"name": "#pre_minute","objective": "mysticdata"},"color": "gray"}, {"text": ":","color": "white"}, {"score": {"name": "#pre_second","objective": "mysticdata"},"color": "gray"}]
execute unless score #creatorloggedin mysticdata matches 1 run tellraw @a[name="Bluestone_Bot"] [{"text": "Runtime since current version: ","color": "yellow"}, {"score": {"name": "#hour","objective": "mysticdata"}, "color": "gray"}, {"text": ":","color": "white"}, {"score": {"name": "#minute","objective": "mysticdata"},"color": "gray"}, {"text": ":","color": "white"}, {"score": {"name": "#second","objective": "mysticdata"},"color": "gray"}]
execute unless score #creatorloggedin mysticdata matches 1 run tellraw @a[name="Bluestone_Bot"] [{"text": "[Disable this message being shown after every login.]","color": "red","clickEvent": {"action": "run_command","value": "/scoreboard players set #creator_always_welcome_msg mysticdata 1"}}]
execute unless score #creatorloggedin mysticdata matches 1 run tellraw @a[name="Bluestone_Bot"] [{"text": "[Enable this message being shown after every login.]","color": "green","clickEvent": {"action": "run_command","value": "/scoreboard players set #creator_always_welcome_msg mysticdata 0"}}]
execute unless score #creator_always_welcome_msg mysticdata matches 1 unless entity @r[name="Blluestone_Bot"] run scoreboard players set #creatorloggedin mysticdata 0
execute if entity @r[name="Bluestone_Bot"] run scoreboard players set #creatorloggedin mysticdata 1

# Updating the runtime.

scoreboard players add #tick mysticdata 1
execute if score #tick mysticdata matches 20 run scoreboard players add #second mysticdata 1
execute if score #tick mysticdata matches 20 run scoreboard players reset #tick mysticdata
execute if score #second mysticdata matches 60 run scoreboard players add #minute mysticdata 1
execute if score #second mysticdata matches 60 run scoreboard players reset #second mysticdata
execute if score #minute mysticdata matches 60 run scoreboard players add #hour mysticdata 1
execute if score #minute mysticdata matches 60 run scoreboard players reset #minute mysticdata
