# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

 Epic.destroy_all
 Story.destroy_all

scotland = Epic.create(title: "My Awesome Scotland Trip!", name: "Snorlax McDuff", summary: "It was awesome!", img_url: "http://www.studyacrossthepond.com/sites/default/files/styles/panopoly_image_featured/public/scotland.jpg?itok=bJet87Ob" )
africa = Epic.create(title: "African Safari!", name: "Jorp Jorpson", summary: "I bless the rainnssss down in Affricaaaa", img_url: "http://www.fodors.com/wire/African-Safari-Elephants-Kilimanjaro.jpg" )

Story.create(title: "Went to awesome castle", map_loc: "www.google.com", media_url: "http://www.goruralscotland.com/image_uploading/blueimp/server/php/files/507da6148057c.jpg", summary: "It was so awesome!", epic: scotland)
Story.create(title: "Went to awesome pub", map_loc: "www.google.com", media_url: "http://www.scottishpub.ro/fundal/scottish-pub2.jpg", summary: "Drank much beer.", epic: scotland)
Story.create(title: "Elephants!", map_loc: "www.google.com", media_url: "http://assets.worldwildlife.org/photos/885/images/carousel_small/African_Elephant_7.27.2012_whytheymatter_HI_58709.jpg?1345580947", summary: "ELEPHANTS!", epic: africa)
Story.create(title: "Food!", map_loc: "www.google.com", media_url: "http://www.africanfoods.co.uk/images/rice-and-chicken-the-African-way.jpg", summary: "Food so yummy!", epic: africa)
