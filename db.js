// Realtime listener
db.collection('comments').onSnapshot((snapshot) => {
    //console.log(snapshot.docChanges())
    snapshot.docChanges().forEach(change =>{
        console.log(change);

    })
})