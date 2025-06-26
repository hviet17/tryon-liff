import axios from 'axios';

export const generateImage = async (personFile, productFile) => {
    const formData = new FormData();
    formData.append('person', personFile);   // e.g., File from <input type="file">
    formData.append('product', productFile);

    try {
        const response = await axios.post(
            'https://gai-n8n.line-apps-beta.com/webhook/image/generate',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log(`Upload progress: ${percent}%`);
                },
            }
        );
        console.log('Server response:', response.data);
        return response.data.imageUrl;
    } catch (error) {
        if (error.response) {
            console.error('Server responded with error status:', error.response.status);
            console.error('Response data:', error.response.data);
        } else {
            console.error('Upload failed:', error.message);
        }
        return false;
    }
}
