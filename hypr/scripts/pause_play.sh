status=$(playerctl -p spotify status)

if [ $status = 'Paused' ]; then
    echo "󰏤"
else
    echo "󰐊"
fi