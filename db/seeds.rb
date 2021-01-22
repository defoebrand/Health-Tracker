# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or find_or_created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.find_or_create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.find_or_create(name: 'Luke', movie: movies.first)

User.find_or_create(
  name: 'Brandon',
  email: 'user@user.com',
  password: 'user',
  height: '',
  weight: '',
  age: '',
  systolic: '',
  diastolic: '',
  pulse: '',
  temperature: '',
  blood_sugar: ''
)

Community.find_or_create(
  name: 'Diabetes',
  image: '/images/diabetes-ribbon.jpeg',
  description: 'A group of metabolic disorders characterized by a high blood sugar level over a prolonged period of time',
)
Community.find_or_create(
  name: 'Pregnancy',
  image: '/images/pregnancy-ribbon.jpeg',
  description: 'The time during which one or more offspring develops inside a woman.',
)
Community.find_or_create(
  name: 'Cancer',
  image: '/images/cancer-ribbons.jpg',
  description: 'A group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.',
)
Community.find_or_create(
  name: 'Anemia',
  image: '/images/anemia-ribbon.jpeg',
  description: 'A decrease in the total amount of red blood cells (RBCs) or hemoglobin in the blood, or a lowered ability of the blood to carry oxygen.',
)
Community.find_or_create(
  name: 'Autism',
  image: '/images/autism-ribbon.jpeg',
  description: 'A developmental disorder characterized by difficulties with social interaction and communication, and by restricted and repetitive behavior.',
)
Community.find_or_create(
  name: "Chron's - Colitis",
  image: '/images/chrons-colitis-ribbon.png',
  description: "Crohn's disease is a type of inflammatory bowel disease (IBD) that may affect any segment of the gastrointestinal tract from the mouth to the anus. Colitis is an inflammation of the colon that may be acute and self-limited or long-term.",
)
Community.find_or_create(
  name: 'Autoimmune',
  image: '/images/autoimmune-ribbon.jpeg',
  description: 'A condition arising from an abnormal immune response to a functioning body part. There are at least 80 types of autoimmune diseases.',
)
Community.find_or_create(
  name: 'Migraine',
  image: '/images/migraine-ribbon.png',
  description: 'A primary headache disorder characterized by recurrent headaches that are moderate to severe.',
)
