import React from 'react';
import {cekTahun,cekTanggal} from '../utils/waktu'

const Hello = () => {
    return (
    <>
    <p>Hello, Selamat datang di kelas Web Programming</p>
    <p>Tahun sekarang adalah {cekTahun()}</p>
    <p>Sekarang tanggal {cekTanggal()}</p>
    </>
    );
  };

export default Hello;