
tellraw @s {"text": "Work In Progress"}

scoreboard players set #100 mysticdata 100
scoreboard players set #20 mysticdata 20
scoreboard players set #60 mysticdata 60
scoreboard players set #24 mysticdata 24
scoreboard players operation #tick mysticdata = #calc_tick mysticdata

scoreboard players operation #calc_tick mysticdata *= #100 mysticdata
scoreboard players operation #calc_tick mysticdata /= #20 mysticdata
scoreboard players operation #calc_tick mysticdata = #calc_second mysticdata
scoreboard players operation #calc_second mysticdata /= #100 mysticdata
scoreboard players operation #calc_second mysticdata *= #100 mysticdata
