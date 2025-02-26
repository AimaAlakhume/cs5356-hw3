const fetchDogImage = async () => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        document.getElementById('dog-image').src = response.data.message;
        console.dir(response.data);
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
};

document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    document.body.style.backgroundColor = `rgb(${Math.floor(x * 255)}, ${Math.floor(y * 255)}, 150)`;
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dog-button').addEventListener('click', fetchDogImage);
    fetchDogImage();
});
