#!/bin/bash
sfx_list=(
    "/home/Timi/.config/fish/glitch_sfx2.mp3" 
    "/home/Timi/.config/fish/glitch_sfx3.mp3"
)

rand_int="$(shuf -i 0-1 -n 1)"

echo "${sfx_list[rand_int]}"