db.Openairs.deleteOne({ _id: ObjectId('667970c0c5590bccf9667030') });

db.Songs.deleteMany({
    $or: [{ _id: ObjectId('667970bfc5590bccf9667026') }, { _id: ObjectId('667970bfc5590bccf9667027') }]
});