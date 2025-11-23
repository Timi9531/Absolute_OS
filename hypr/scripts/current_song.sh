song=$(playerctl -p spotify metadata --format '  {{artist}} - {{title}}')

if [ $? -eq 0 ]; then
    echo "$song"
else
    echo "  No active music"
fi
