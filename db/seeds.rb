# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  name: 'Brandon',
  email: 'testing@gmail.com',
  password: 'testing',
  height: 167,
  weight: 85,
  age: 33,
  systolic: 125,
  diastolic: 84,
  pulse: 74,
  temperature: 37,
  blood_sugar: 5.03
)
