#
# Adding the necessary scoreboards.
#
scoreboard objectives add mysticdata dummy

scoreboard players set #load mysticdata 0

#
# Setting the Version.
#

# Version given in parts.

scoreboard players set #ver1 mysticdata 00
scoreboard players set #ver2 mysticdata 13
scoreboard players set #ver3 mysticdata 02

# Preparing calculation data.

scoreboard players reset #version mysticdata
scoreboard players set #10000 mysticdata 10000
scoreboard players set #100 mysticdata 100

scoreboard players operation #calc_ver1 mysticdata = #ver1 mysticdata
scoreboard players operation #calc_ver2 mysticdata = #ver2 mysticdata

# Calculating version.

scoreboard players operation #calc_ver1 mysticdata *= #10000 mysticdata
scoreboard players operation #calc_ver2 mysticdata *= #100 mysticdata

scoreboard players operation #version mysticdata += #calc_ver1 mysticdata
scoreboard players operation #version mysticdata += #calc_ver2 mysticdata
scoreboard players operation #version mysticdata += #ver3 mysticdata

#

execute unless score #version mysticdata = #preversion mysticdata run scoreboard players set #creatorloggedin mysticdata 0

#
# Runtime calculations.
#

# Adding the old runtime to the total runtime if a new version is found.

execute unless score #version mysticdata = #preversion mysticdata run scoreboard players operation #pre_second mysticdata += #second mysticdata
execute unless score #version mysticdata = #preversion mysticdata run scoreboard players operation #pre_minute mysticdata += #minute mysticdata
execute unless score #version mysticdata = #preversion mysticdata run scoreboard players operation #pre_hour mysticdata += #hour mysticdata
execute unless score #version mysticdata = #preversion mysticdata run scoreboard players operation #pre_day mysticdata += #day mysticdata

# Reseting the old runtime if a new version is found.

execute unless score #version mysticdata = #preversion mysticdata run scoreboard players reset #second mysticdata
execute unless score #version mysticdata = #preversion mysticdata run scoreboard players reset #minute mysticdata
execute unless score #version mysticdata = #preversion mysticdata run scoreboard players reset #hour mysticdata
execute unless score #version mysticdata = #preversion mysticdata run scoreboard players reset #day mysticdata

# Setting runtime values that are below 0 to 0

execute unless score #second mysticdata matches 0.. run scoreboard players set #second mysticdata 0
execute unless score #minute mysticdata matches 0.. run scoreboard players set #minute mysticdata 0
execute unless score #hour mysticdata matches 0.. run scoreboard players set #hour mysticdata 0
execute unless score #day mysticdata matches 0.. run scoreboard players set #day mysticdata 0

execute unless score #pre_second mysticdata matches 0.. run scoreboard players set #pre_second mysticdata 0
execute unless score #pre_minute mysticdata matches 0.. run scoreboard players set #pre_minute mysticdata 0
execute unless score #pre_hour mysticdata matches 0.. run scoreboard players set #pre_hour mysticdata 0
execute unless score #pre_day mysticdata matches 0.. run scoreboard players set #pre_day mysticdata 0

# Saving the current version as the new preversion.

scoreboard players operation #preversion mysticdata = #version mysticdata

#
# Last steps.
#

# Checking if the Reload message should be shown.

scoreboard players set #loadmsg mysticdata 0
execute if score #loadmsgcheck mysticdata matches 1 run scoreboard players set #loadmsg mysticdata 1
execute if score #loadmsgcheck mysticdata matches ..0 run scoreboard players set loadmsgcheck mysticdata 0

# Reload message.

execute unless score #loadmsg mysticdata matches 1 run tellraw @a { "text": "--------------------------------"}
execute unless score #loadmsg mysticdata matches 1 run tellraw @a [{ "text": "Mystic Origins ", "color": "light_purple", "hoverEvent": { "action": "show_text","value": "https://www.curseforge.com/minecraft/mc-addons/mystic-origins"}, "clickEvent": { "action":  "open_url","value": "https://www.curseforge.com/minecraft/mc-addons/mystic-origins"}}, { "text":"Datapack succesfully loaded.", "color": "yellow"}]
execute unless score #loadmsg mysticdata matches 1 run tellraw @a { "text": " "}
execute unless score #loadmsg mysticdata matches 1 run tellraw @a [{ "text": "Version: ", "color": "white"}, { "text": "beta", "color": "light_purple"}, { "text": ".", "color": "gray"}, { "score": {"name": "#ver1", "objective":"mysticdata"}, "color": "light_purple"}, { "text": ".", "color": "gray"}, { "score": {"name": "#ver2", "objective":"mysticdata"}, "color": "light_purple"}, { "text": ".", "color": "gray"}, { "score": {"name": "#ver3", "objective":"mysticdata"}, "color": "light_purple"} ]
execute unless score #loadmsg mysticdata matches 1 run tellraw @a { "text": " "}
execute unless score #loadmsg mysticdata matches 1 run tellraw @a [{ "text": "Creator: ", "color": "white"}, { "text": "Bluestone_Bot", "color": "aqua"}]
execute unless score #loadmsg mysticdata matches 1 run tellraw @a { "text": " "}
execute unless score #loadmsg mysticdata matches 1 run tellraw @a [{ "text": "Note: ", "color": "#FF9D0A"}, { "text": "To update any Origins or Powers you have to replace the old file with the new one and then resart the server or relog into your world.", "color": "white"}]
execute unless score #loadmsg mysticdata matches 1 run tellraw @a [{ "text": "To disable this message upon further restarts", "color": "yellow"}]
execute unless score #loadmsg mysticdata matches 1 run tellraw @a [{ "text": "click ", "color": "yellow"}, { "text": "[Here]", "color": "white", "hoverEvent": { "action": "show_text","value": "/scoreboard players set #loadmsgcheck mysticdata 1"}, "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #loadmsgcheck mysticdata 1"}}]
execute unless score #loadmsg mysticdata matches 1 run tellraw @a { "text": "--------------------------------"}

scoreboard players set #load mysticdata 1