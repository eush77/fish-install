set source_dir $argv[1]

if contains $source_dir $fish_function_path
  set --local __fish_function_path
  for path in $fish_function_path
    if test "$source_dir" != "$path"
      set __fish_function_path $__fish_function_path $path
    end
  end
  set --universal fish_function_path $__fish_function_path
  printf "- %s\n" $source_dir
end
