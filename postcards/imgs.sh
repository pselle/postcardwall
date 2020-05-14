
name="$1"

convert ${name}_back.jpg -resize 800x800 ${name}_back-800w.jpeg
convert ${name}_front.jpg -resize 800x800 ${name}_front-800w.jpeg
convert ${name}_back.jpg -resize 480x480 ${name}_back-480w.jpeg
convert ${name}_front.jpg -resize 480x480 ${name}_front-480w.jpeg
