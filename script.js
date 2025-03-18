// script.js

// Function to add a message to the chat history
function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender);
    messageDiv.textContent = content;
    document.getElementById('chat-history').appendChild(messageDiv);
    document.getElementById('chat-history').scrollTop = document.getElementById('chat-history').scrollHeight; // Scroll to the bottom
}

// Simulating AI Response
function aiResponse(userMessage) {
    let botMessage = '';

    // Basic response simulation
    if (userMessage.toLowerCase().includes("book")) {
        botMessage = "I can help you with booking. Please provide details like the date and destination.";
    } else if (userMessage.toLowerCase().includes("route") || userMessage.toLowerCase().includes("schedule")) {
        botMessage = "I can provide route and schedule information. What route are you interested in?";
    } else {
        botMessage = "Sorry, I didn't quite catch that. Could you please clarify?";
    }

    // Simulate delay for AI response
    setTimeout(() => {
        addMessage(botMessage, 'bot');
    }, 1000);
}

// Handling user input
document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value.trim();

    if (userInput !== '') {
        addMessage(userInput, 'user'); // Add user message
        document.getElementById('user-input').value = ''; // Clear input box
        aiResponse(userInput); // Get AI response
    }
});

// Allow pressing 'Enter' to send message
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});
