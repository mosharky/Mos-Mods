
# Running the runtime calculate function if low performance mode is active

execute if score #performance mysticdata matches 11 run function mysticorigins:calc1

# Runtime Message

tellraw @s { "text": "--------------------------------"}
tellraw @s [{"text": "Mystic Origins ","color": "light_purple"}, {"text": "Statistics","color": "yellow"}]
tellraw @s { "text": " "}
tellraw @s [{"text": "Total runtime since version 00.12.00 until current version: ","color": "yellow"}, {"score": {"name": "#pre_day","objective": "mysticdata"}, "color": "gray"}, {"text": " days ","color": "white"},{"score": {"name": "#pre_hour","objective": "mysticdata"}, "color": "gray"}, {"text": " hours ","color": "white"}, {"score": {"name": "#pre_minute","objective": "mysticdata"},"color": "gray"}, {"text": " minutes ","color": "white"}, {"score": {"name": "#pre_second","objective": "mysticdata"},"color": "gray"}, {"text": " seconds","color": "white"}]
tellraw @s { "text": " "}
tellraw @s [{"text": "Runtime since current version: ","color": "yellow"}, {"score": {"name": "#day","objective": "mysticdata"}, "color": "gray"}, {"text": " days ","color": "white"},{"score": {"name": "#hour","objective": "mysticdata"}, "color": "gray"}, {"text": " hours ","color": "white"}, {"score": {"name": "#minute","objective": "mysticdata"},"color": "gray"}, {"text": " minutes ","color": "white"}, {"score": {"name": "#second","objective": "mysticdata"},"color": "gray"}, {"text": " seconds","color": "white"}]
tellraw @s { "text": " "}
tellraw @s { "text": "--------------------------------"}
