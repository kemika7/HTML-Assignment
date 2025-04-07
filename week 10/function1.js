function deleteMessage(message, delay, callback) {
    console.log("Message:", message); // Display message

    setTimeout(() => {
        console.log("Message deleted"); // Indicate deletion
        if (callback) callback(); // Call the callback if provided
    }, delay);
}

// Example usage
deleteMessage("Hello, this message will be deleted.", 3000, () => {
    console.log("Callback executed after deletion.");
});
