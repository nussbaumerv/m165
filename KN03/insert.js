const sponsor1 = db.Sponsors.insertOne({
  name: "Google Switzerland GMBH",
  industry: "Technology",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
  adsBudget: 50000000,
}).insertedId;

const sponsor2 = db.Sponsors.insertOne({
  name: "Swisscom",
  industry: "Technology",
  logoUrl: "https://upload.wikimedia.org/wikipedia/de/2/24/Logo_Swisscom.svg",
  adsBudget: 75000,
}).insertedId;

const sponsor3 = db.Sponsors.insertOne({
  name: "Migros",
  industry: "Supermarket",
  logoUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiw9WrIzljU2nQRc7yx-BYXTGcMiMIisS6hw&s",
  adsBudget: 90000,
}).insertedId;

const act1 = db.Acts.insertOne({
  name: "Pashanim",
  label: "Urban",
  fee: 10000,
  songs: [
    {
      _id: new ObjectId(),
      name: "Florenz",
      popularityIndex: 95,
      language: "German",
    },
    {
      _id: new ObjectId(),
      name: "Nokia 3310 - Bonus Track",
      popularityIndex: 89,
      language: "German",
    },
  ],
}).insertedId;

const act2 = db.Acts.insertOne({
  name: "Travis Scott",
  label: "Sony",
  fee: 5000000,
  songs: {
    _id: new ObjectId(),
    name: "goosebumps",
    popularityIndex: 100,
    language: "English",
  },
}).insertedId;

const act3 = db.Acts.insertOne({
  name: "reezy",
  label: "Universial",
  fee: 50000,
  songs: {
    _id: new ObjectId(),
    name: "MANCHESTER",
    popularityIndex: 90,
    language: "german",
  },
}).insertedId;

db.Openairs.insertMany([
  {
    name: "Openair Frauendfel",
    location: "Frauendfeld",
    date: ISODate("2024-07-15T00:00:00Z"),
    maxOccupancy: 500000,
    sponsors: [sponsor2, sponsor3],
    acts: [act1, act3],
  },
  {
    name: "Zurich Openair",
    location: "Zurich",
    date: ISODate("2024-08-15T00:00:00Z"),
    maxOccupancy: 50000,
    sponsors: [sponsor3],
    acts: [act3],
  },
  {
    name: "Rolling Loud",
    location: "Wien",
    date: ISODate("2024-06-15T00:00:00Z"),
    maxOccupancy: 5000000,
    sponsors: [sponsor1],
    acts: [act1, act2, act3],
  },
]);
