document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formMahasiswa');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('https://crudcrud.com/api/202134eb557c47cea7387612dfdc7ed0/mahasiswa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Data berhasil disimpan:', responseData);

                alert('Data berhasil disimpan!');
                form.reset();
            } else {
                console.error('Gagal menyimpan data:', response.statusText);
                alert('Gagal menyimpan data. Silakan coba lagi.');
            }
        } catch (error) {
            console.error('Gagal menyimpan data:', error.message);
            alert('Gagal menyimpan data. Silakan coba lagi.');
        }
    });
});



// js untuk menampikan datanya
document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('https://crudcrud.com/api/202134eb557c47cea7387612dfdc7ed0/mahasiswa');
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API');
        }

        const data = await response.json();
        const table = document.getElementById('dataMahasiswa');

        data.forEach(item => {
            const row = table.insertRow();
            const cellNama = row.insertCell(0);
            const cellNIM = row.insertCell(1);
            const cellJurusan = row.insertCell(2);
            const cellAngkatan = row.insertCell(3);

            cellNama.textContent = item.nama;
            cellNIM.textContent = item.nim;
            cellJurusan.textContent = item.jurusan;
            cellAngkatan.textContent = item.angkatan;
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        alert('Gagal memuat data. Silakan coba lagi.');
    }
});
