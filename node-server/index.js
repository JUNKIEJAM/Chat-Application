//Node server which will handle socket io connections

const io=require('socket.io')(8000);

const users={};

io.on('connection',socket=>{
 
    socket.on('new-user-joined',name=>{
        console.log("New User",name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    });
})

// here io.on will set the event name as name whenever an event will be accepted

//socket.boradcast.emit() will let everyone know is a new user jas joined

//new-user.joined and send are used defined names and can be changed
