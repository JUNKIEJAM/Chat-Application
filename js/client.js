const socket=io('http://localhost:8000');

const form=document.getElementById('send-container');
const messageInp=document.getElementById('messageInp');
const messageContainer=document.querySelector(".container")

const append=(message,position)=>{

    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);

}

form.addEventListener('submit',(e)=>{
e.preventDefault();
const message=messageInp.value;

append(`You: ${message}`,right);
socket.emit('send',message);
messageInp.value='';
})
const myName=prompt("Enter Your Name to join");
socket.emit('new-user-joined',myName);

socket.on('user-joined', myName=>{

    append(`${myName} joined the chat`,'right')
});


socket.on('receive', data=>{
    append(`${data.user}: ${data.message}`,'left')
});
