
# name="$1"

for i in $(ls ./*_back.jpg); do
  name=${i:2}
  name=${name%%_back.jpg}
  if [ ! -f ${name}_front-800w.jpeg ]; then
    echo "Converted file not found! Doing a conversion"
    convert ${name}_back.jpg -resize 800x800 ${name}_back-800w.jpeg
    convert ${name}_front.jpg -resize 800x800 ${name}_front-800w.jpeg
    convert ${name}_back.jpg -resize 480x480 ${name}_back-480w.jpeg
    convert ${name}_front.jpg -resize 480x480 ${name}_front-480w.jpeg
    echo "Converted $name"
  fi
done
