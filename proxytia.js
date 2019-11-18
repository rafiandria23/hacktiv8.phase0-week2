var nama = '';
var peran = '';

// var nama = 'Mikael';
// var peran = '';

// var nama = 'Nina';
// var peran = 'Ksatria';

// var nama = 'Danu';
// var peran = 'Tabib';

// var nama = 'Zero';
// var peran = 'Penyihir';

if (nama === '' && peran === '') {
    console.log('Nama harus diisi!');
} 
else if (nama === 'Mikael' && peran === '') {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}
else if (nama === 'Nina' && peran === 'Ksatria') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
}
else if (nama === 'Danu' && peran === 'Tabib') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);
}
else if (nama === 'Zero' && peran === 'Penyihir') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
}
else {
    console.log('Selamat datang di Proxytia!');
}