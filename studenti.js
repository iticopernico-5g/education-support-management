document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("cercaStudente");
    const tableBody = document.getElementById("studentiTableBody");
    
    if (searchInput && tableBody) {
        const tableRows = tableBody.querySelectorAll("tr");

        searchInput.addEventListener("keyup", function() {
            const termineRicerca = this.value.toLowerCase();
            tableRows.forEach(row => {
                const testoRiga = row.textContent.toLowerCase();

                if (testoRiga.includes(termineRicerca)) {
                    row.style.display = ""; 
                } else {
                    row.style.display = "none";
                }
            });
        });
    }
});