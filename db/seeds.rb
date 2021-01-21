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

Community.create(
  name: 'Diabetes',
  image: '/images/diabetes-ribbon.jpeg',
  description: 'A group of metabolic disorders characterized by a high blood sugar level over a prolonged period of time',
)
Community.create(
  name: 'Pregnancy',
  image: '/images/pregnancy-ribbon.jpeg',
  description: 'The time during which one or more offspring develops inside a woman.',
)
Community.create(
  name: 'Cancer',
  image: '/images/cancer-ribbons.jpg',
  description: 'A group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.',
)
Community.create(
  name: 'Anemia',
  image: '/images/anemia-ribbon.jpeg',
  description: 'A decrease in the total amount of red blood cells (RBCs) or hemoglobin in the blood, or a lowered ability of the blood to carry oxygen.',
)
Community.create(
  name: 'Autism',
  image: '/images/autism-ribbon.jpeg',
  description: 'A developmental disorder characterized by difficulties with social interaction and communication, and by restricted and repetitive behavior.',
)
Community.create(
  name: "Chron's - Colitis",
  image: '/images/chrons-colitis-ribbon.png',
  description: "Crohn's disease is a type of inflammatory bowel disease (IBD) that may affect any segment of the gastrointestinal tract from the mouth to the anus. Colitis is an inflammation of the colon that may be acute and self-limited or long-term.",
)
Community.create(
  name: 'Autoimmune',
  image: '/images/autoimmune-ribbon.jpeg',
  description: 'A condition arising from an abnormal immune response to a functioning body part. There are at least 80 types of autoimmune diseases.',
)
Community.create(
  name: 'Migraine',
  image: '/images/migraine-ribbon.png',
  description: 'A primary headache disorder characterized by recurrent headaches that are moderate to severe.',
)
