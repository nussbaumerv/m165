db.Sponsors.updateOne(
  { _id: ObjectId("66797efac5590bccf9667056") },
  { $set: { adsBudget: 60000000 } }
);

db.Acts.updateMany(
  {
    $or: [
      { fee: { $gt: 1000000 } },
      { label: "Urban" },
      { "songs.popularityIndex": { $gt: 90 } },
      { label: "Universial" },
    ],
  },
  { $set: { fee: 12345, label: "Updated Label" } }
);

db.Openairs.replaceOne(
  { name: "Zurich Openair" },
  {
    name: "Zurich Openair",
    location: "Zurich",
    date: ISODate("2024-08-15T00:00:00Z"),
    maxOccupancy: 75000, // Veränderte maxOccupancy
    sponsors: [sponsor3],
    acts: [act3],
  }
);
