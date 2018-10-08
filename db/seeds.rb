# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.create!(description: 'A cool bench', lat: 37.796123, lng: -122.401947)
Bench.create!(
  description: 'App Academy couch',
  lat: 37.798684,
  lng: -122.401432
)
Bench.create!(description: 'Park bench', lat: 37.794903, lng: -122.402055)
