# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "dist/assets/css"
sass_dir = "source/scss"
images_dir = "dist/assets/img_layout"
fonts_dir = "dist/assets/fonts"
javascripts_dir = "dist/assets/js"
add_import_path  "node_modules/foundation-sites/scss"
add_import_path "node_modules/motion-ui/src"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
                                        

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass .source/scss scss && rm -rf sass && mv scss sass


##mine
# Set enviroment == :development or :production
environment = :development 

if environment == :development
  line_comments = true
  output_style = :expanded
elsif environment == :production
  output_style = :compressed
end