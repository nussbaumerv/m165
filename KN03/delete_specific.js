db.Openairs.deleteOne({ _id: ObjectId('667970c0c5590bccf9667030') });

db.Acts.deleteMany({
    $or: [{ _id: ObjectId('66797e83c5590bccf966704e') }, { _id: ObjectId('66797e83c5590bccf9667050') }]
});