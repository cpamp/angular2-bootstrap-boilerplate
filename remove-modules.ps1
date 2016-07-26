ls node_modules | foreach {
echo $("Deleting module..." + $_.Name)
& npm rm $_.Name
}
Read-Host -Prompt "Press Enter to continue"