async function generateImage() {
    const apiKey = "YOUR_API_KEY"; // Replace with your API key
    const prompt = document.getElementById("textInput").value;
    const outputImage = document.getElementById("outputImage");
    const status = document.getElementById("status");

    if (!prompt) {
        alert("Please enter a prompt.");
        return;
    }

    status.textContent = "Generating image... Please wait.";
    outputImage.style.display = "none";

    try {
        const response = await fetch("https://api.deepai.org/api/text2img", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key":"afe409338-e706-41cf-96c5-2b42c2823fdb"
            },
            body: JSON.stringify({ text: prompt })
        });

        const data = await response.json();

        if (data.output_url) {
            outputImage.src = data.output_url;
            outputImage.style.display = "block";
            status.textContent = "Image generated successfully!";
        } else {
            status.textContent = "Error generating image. Try again.";
        }
    } catch (error) {
        console.error(error);
        status.textContent = "Failed to connect to the API.";
    }
}
