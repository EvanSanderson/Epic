# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

 Epic.destroy_all

Epic.create(title: "My Awesome Scotland Trip!", name: "Snorlax McDuff", summary: "It was awesome!", img_url: "http://www.studyacrossthepond.com/sites/default/files/styles/panopoly_image_featured/public/scotland.jpg?itok=bJet87Ob" )
Epic.create(title: "African Safari!", name: "Jorp Jorpson", summary: "I bless the rainnssss down in Affricaaaa", img_url: "http://www.fodors.com/wire/African-Safari-Elephants-Kilimanjaro.jpg" )
