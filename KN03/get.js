db.Songs.find(
    {name: { $regex: /^MAN/ } },
    { _id: 0}   
)

db.Songs.find({
    $or: [{ language: "German" }, { language: "german" }] 
})

db.Sponsors.find({
    industry: "Technology"
})

db.Acts.find({
    fee: { $gt: 10000 } 
})

db.Openairs.find({
    location: "Zurich" 
})

db.Openairs.find({
    $and: [
        { maxOccupancy: { $gt: 50000 } },
        { date: { $gte: new Date("2024-06-15") } }
    ]
})
