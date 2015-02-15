set source_dir $argv[1]

if not contains $source_dir $fish_function_path
  set --universal fish_function_path $fish_function_path $source_dir
  printf "+ %s\n" $source_dir
else
  printf "- %s (already installed)\n" $source_dir
end
