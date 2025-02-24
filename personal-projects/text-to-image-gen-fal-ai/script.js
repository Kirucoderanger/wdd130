const API_URL = "https://fal.run/fal-ai/fast-text-to-image";
//const API_URL = "https://fal-ai/fast-lightning-sdxl";
//const API_URL = "https://fal-ai/flux-pro/v1.1-ultra";






//const API_URL = "https://fal-ai/imagen3/fast";


const API_KEY = "9caf983d-8208-4e4d-b07e-d12c0ea2d53d:ed52601cc8b24e2752a5a40a334c0599"; // Replace with your Fal.ai API Key

async function generateImage() {
    const prompt = document.getElementById("prompt").value;
    const statusText = document.getElementById("status");
    const imageElement = document.getElementById("image");

    if (!prompt) {
        statusText.innerText = "Please enter a text prompt!";
        return;
    }

    statusText.innerText = "Generating image...";
    imageElement.src = ""; // Clear previous image

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        const data = await response.json();

        if (data && data.image_url) {
            imageElement.src = data.image_url;
            statusText.innerText = "Image generated successfully!";
        } else {
            statusText.innerText = "Failed to generate image.";
        }
    } catch (error) {
        statusText.innerText = "Error: " + error.message;
    }
}