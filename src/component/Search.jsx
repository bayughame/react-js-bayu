import React from 'react'

export default function Search() {
    return (
        <section id="search">
            <div className="">
                <div className='position-relative'>
                    <div className="card position-absolute top-0 start-50 translate-middle">
                        <div className="card-body">
                            <form className="container g-3 justify-content-center">
                                <div className='row'>
                                    <div className="col">
                                        <label className='mb-2' for="form-label">Tipe Driver</label>
                                        <select className="form-select" id="tipe driver" aria-label="Default select example">
                                            <option value="Dengan Supir">Dengan Supir</option>
                                            <option value="Lepas Kunci">Tanpa Supir(Lepas Kunci)</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Tanggal</label>
                                        <input type="date" id="tanggal" className="form-control" placeholder="Pilih Tanggal" />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Waktu / Jam Jemput</label>
                                        <input type="time" id="jam" className="form-control" placeholder="Pilih Waktu" />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Jumlah Penumpang</label>
                                        <input type="number" id="penumpang" className="form-control" placeholder="Jumlah Penumpang" />
                                    </div>
                                    <div className="col">
                                        <button type="button" id="cari" className="btn btn-success">Cari Mobil</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section >


    )
}
