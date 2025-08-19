// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up event listeners...');
    
    // Get elements
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    const imageSection = document.querySelector('.image-section');
    const btnPredict = document.getElementById('btn-predict');
    
    console.log('Elements found:', {
        imageUpload: !!imageUpload,
        imagePreview: !!imagePreview,
        imageSection: !!imageSection,
        btnPredict: !!btnPredict
    });
    
    // Image upload functionality
    if (imageUpload) {
        imageUpload.addEventListener('change', function(e) {
            console.log('File selected:', e.target.files[0]);
            const file = e.target.files[0];
            
            // Update debug info
            const debugInfo = document.getElementById('debug-info');
            if (debugInfo) {
                debugInfo.innerHTML = `File selected: ${file ? file.name : 'None'}`;
            }
            
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    console.log('File read successfully');
                    imagePreview.src = e.target.result;
                    imageSection.style.display = 'block';
                    console.log('Image section displayed');
                    
                    // Update debug info
                    if (debugInfo) {
                        debugInfo.innerHTML = `File loaded: ${file.name} | Image section displayed`;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Prediction button functionality
    if (btnPredict) {
        btnPredict.addEventListener('click', function() {
            console.log('Predict button clicked');
            const fileInput = document.getElementById('imageUpload');
            if (fileInput.files.length > 0) {
                const formData = new FormData();
                formData.append('file', fileInput.files[0]);
                
                document.querySelector('.loader').style.display = 'block';
                document.getElementById('result').innerHTML = '';
                
                fetch('/predict', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(result => {
                    document.querySelector('.loader').style.display = 'none';
                    
                    // Check if result contains positive or negative indicators
                    const resultText = result.toLowerCase();
                    let resultClass = 'result-success';
                    let textClass = '';
                    
                    if (resultText.includes('no') || resultText.includes('negative') || resultText.includes('no tumor')) {
                        // NO TUMOR - Show GREEN (result-success)
                        resultClass = 'result-success';
                        textClass = 'positive-text';
                    } else if (resultText.includes('positive') || resultText.includes('tumor') || resultText.includes('yes')) {
                        // TUMOR DETECTED - Show RED (result-error)
                        resultClass = 'result-error';
                        textClass = 'negative-text';
                    }
                    
                    document.getElementById('result').innerHTML = `
                        <div class="${resultClass}">
                            <h3>🔬 Analysis Result</h3>
                            <p class="${textClass}">${result}</p>
                        </div>
                    `;
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.querySelector('.loader').style.display = 'none';
                    document.getElementById('result').innerHTML = `
                        <div class="result-error">
                            <h3>Error:</h3>
                            <p>Failed to process image. Please try again.</p>
                        </div>
                    `;
                });
            } else {
                alert('Please select an image first!');
            }
        });
    }
    
    console.log('Event listeners set up complete');
});
