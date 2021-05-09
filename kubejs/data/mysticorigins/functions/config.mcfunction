tellraw @s { "text": "--------------------------------"}
tellraw @s [{ "text": "Mystic Origins ", "color": "light_purple", "hoverEvent": { "action": "show_text","value": "https://www.curseforge.com/minecraft/mc-addons/mystic-origins"}, "clickEvent": { "action":  "open_url","value": "https://www.curseforge.com/minecraft/mc-addons/mystic-origins"}}, {"text": " Config","color": "yellow"}]
tellraw @s { "text": " "}
tellraw @s [{"text": "Reload Message ","color": "white"}, {"text": "[on]","color": "green", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #loadmsgcheck mysticdata 0"}}, {"text": "/","color": "white"}, {"text": "[off]","color": "red", "clickEvent": {"action": "suggest_command","value": "/scoreboard players set #loadmsgcheck mysticdata 1"}}]
tellraw @s { "text": " "}
tellraw @s { "text": "--------------------------------"}