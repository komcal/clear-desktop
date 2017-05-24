cd
cd Desktop

echo "create folder $(date '+%d-%b-%Y-%m-%M-%S')"
mkdir $(date '+%d-%b-%Y-%m-%M-%S')
currDate="$(date '+%d-%b-%Y-%m-%M-%S')"
for file in * .* 
do
  test -f "$file" && mv "$file" ./"$currDate"/ && echo "moved file $file"
done
echo "move file completed"
