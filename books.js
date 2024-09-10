document.addEventListener('DOMContentLoaded', function() {
    const booksList = document.getElementById('books-list');

    // Simular la lista de PDFs (en una implementación real, esto podría venir de una API o similar)
    const pdfs = [
            {file:'Codigo Civil.pdf', thumbnail:'CC.jpg'},
            {file:'Codigo de Ingenios.pdf', thumbnail:'CodigoIngenios.png'},
            {file:'Codigo del Trabajo.pdf', thumbnail:'COTA.png'},
            {file: 'COIP.pdf', thumbnail: 'COIP.png'},
            {file:'CRE.pdf', thumbnail:'CRE.jpg'}
    ];

    // Crear elementos para cada PDF
    pdfs.forEach(pdf => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-item');

        const thumbnail = document.createElement('img');
        thumbnail.src = `thumbnails/${pdf.thumbnail}`;
        thumbnail.alt = `Miniatura de ${pdf}`;
        thumbnail.classList.add('thumbnail');

        const title = document.createElement('h3');
        title.textContent = pdf.file;

        const readButton = document.createElement('b');
        readButton.textContent = 'Leer';
        readButton.onclick = () => openPdf(pdf.file);
        readButton.classList.add('btn');

        const downloadButton = document.createElement('a');
        downloadButton.textContent = 'Descargar';
        downloadButton.href = `pdfs/${pdf.file}`;
        downloadButton.download = pdf;
        downloadButton.classList.add('btn');

        bookDiv.appendChild(thumbnail);
        bookDiv.appendChild(title);
        bookDiv.appendChild(readButton);
        bookDiv.appendChild(downloadButton);
        booksList.appendChild(bookDiv);
    });

    // Función para abrir PDF en una nueva ventana
    function openPdf(pdf) {
        window.open(`pdfs/${pdf}`, '_blank');
    }
});
