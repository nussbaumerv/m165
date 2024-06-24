use OpenairDB;

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