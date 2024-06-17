use OpenairDB;

db.createCollection("Songs", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "popularityIndex", "language"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                popularityIndex: {
                    bsonType: "int",
                    description: "must be an integer and is required"
                },
                language: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }
            }
        }
    }
});

db.createCollection("Sponsors", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "industry", "logoUrl", "adsBudget"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                industry: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                logoUrl: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                adsBudget: {
                    bsonType: "int",
                    description: "must be an integer and is required"
                }
            }
        }
    }
});

db.createCollection("Acts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "label", "fee", "songs"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                label: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                fee: {
                    bsonType: "int",
                    description: "must be an integer and is required"
                },
                songs: {
                    bsonType: "array",
                    items: {
                        bsonType: "objectId"
                    },
                    description: "must be an array of ObjectIds"
                }
            }
        }
    }
});

db.createCollection("Openairs", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "location", "date", "maxOccupancy", "sponsors", "musicGenreId"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                location: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                date: {
                    bsonType: "date",
                    description: "must be a date and is required"
                },
                maxOccupancy: {
                    bsonType: "int",
                    description: "must be an integer and is required"
                },
                sponsors: {
                    bsonType: "array",
                    items: {
                        bsonType: "objectId"
                    },
                    description: "must be an array of ObjectIds"
                },
                acts: {
                    bsonType: "array",
                    items: {
                        bsonType: "objectId"
                    },
                    description: "must be an array of ObjectIds"
                },
            }
        }
    }
});

const song1 = db.Songs.insertOne({
    name: "Florenz",
    popularityIndex: 95,
    language: "German"
}).insertedId;

const song2 = db.Songs.insertOne({
    name: "Nokia 3310 - Bonus Track",
    popularityIndex: 89,
    language: "German"
}).insertedId;

const sponsor1 = db.Sponsors.insertOne({
    name: "Google Switzerland GMBH",
    industry: "Technology",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
    adsBudget: 50000000
}).insertedId;

const sponsor2 = db.Sponsors.insertOne({
    name: "Swisscom",
    industry: "Technology",
    logoUrl: "https://upload.wikimedia.org/wikipedia/de/2/24/Logo_Swisscom.svg",
    adsBudget: 75000
}).insertedId;

const act1 = db.Acts.insertOne({
    name: "Pashanim",
    label: "Urban",
    fee: 10000,
    songs: [song1, song2]
}).insertedId;


const openair1 = db.Openairs.insertOne({
    name: "Openair Frauendfel",
    location: "Frauendfeld",
    date: ISODate("2024-07-15T00:00:00Z"),
    maxOccupancy: 500000,
    sponsors: [sponsor1, sponsor2],
    acts: [act1]
});
