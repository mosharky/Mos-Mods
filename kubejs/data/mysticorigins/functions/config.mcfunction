
# Config Message

tellraw @s { "text": "--------------------------------"}
tellraw @s [{ "text": "Mystic Origins ", "color": "light_purple", "hoverEvent": { "action": "show_text","value": "https://www.curseforge.com/minecraft/mc-addons/mystic-origins"}, "clickEvent": { "action":  "open_url","value": "https://www.curseforge.com/minecraft/mc-addons/mystic-origins"}}, {"text": " Config","color": "yellow"}]
tellraw @s { "text": " "}
execute if score #loadmsgcheck mysticdata matches 0 run tellraw @s [{"text": "[ ✔ ] ","color": "green"}, {"text": "Reload Message: ","color": "white"}, {"text": "[on]","color": "green", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #loadmsgcheck mysticdata 0"}}, {"text": "/","color": "white"}, {"text": "[off]","color": "red", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #loadmsgcheck mysticdata 1"}}]
execute if score #loadmsgcheck mysticdata matches 1 run tellraw @s [{"text": "[ ❌ ] ","color": "red"}, {"text": "Reload Message: ","color": "white"}, {"text": "[on]","color": "green", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #loadmsgcheck mysticdata 0"}}, {"text": "/","color": "white"}, {"text": "[off]","color": "red", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #loadmsgcheck mysticdata 1"}}]
execute if score #performance mysticdata matches 11 run tellraw @s [{"text": "[ ✔ ] ","color": "green"}, {"text": "Low Performance mode: ","color": "white"}, {"text": "[on]","color": "green", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #performance mysticdata 1"}}, {"text": "/","color": "white"}, {"text": "[off]","color": "red", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #performance mysticdata 0"}}]
execute if score #performance mysticdata matches 10 run tellraw @s [{"text": "[ ❌ ] ","color": "red"}, {"text": "Low Performance mode: ","color": "white"}, {"text": "[on]","color": "green", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #performance mysticdata 1"}}, {"text": "/","color": "white"}, {"text": "[off]","color": "red", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #performance mysticdata 0"}}]
tellraw @s { "text": " "}
tellraw @s { "text": "--------------------------------"}
