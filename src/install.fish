set source_dir $argv[1]


set fish_error (fish -c true ^&1 >/dev/null)
if test -n "$fish_error"
  set_color red
  printf "\nFish is unable to start correctly due to downgraded privileges.\n"
  printf "Please install fish-install globally and run:\n"
  printf "  > fish-install $FISH_INSTALL_PATH\n"
  set_color normal
  exit 0
end


if not contains $source_dir $fish_function_path
  set --universal fish_function_path $source_dir $fish_function_path
  printf "+ %s\n" $source_dir
else
  printf "- %s (already installed)\n" $source_dir
end
