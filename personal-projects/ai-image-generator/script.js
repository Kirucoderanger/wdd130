const apiKey = 'YOUR_OPENAI_API_KEY';

async function generateImageFromText(prompt) {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'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'}`
        },
        body: JSON.stringify({
            prompt: prompt,
            n: 1,
            size: '1024x1024'
        })
    });

    const data = await response.json();
    return data.data[0].url;
}

document.getElementById('generateButton').addEventListener('click', async () => {
    const prompt = document.getElementById('promptInput').value;
    const imageUrl = await generateImageFromText(prompt);
    document.getElementById('resultImage').src = imageUrl;
});