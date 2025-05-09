import React from "react";

export default function Aboutsection(){
    return(
        <div className="row d-flex flex-column mt-5 about">
            <div className="col p-2 mt-2">
             <h4>About</h4>
            </div>
            <div className="col p-2 mt-2">
            <p>DepokApart Property adalah agen properti terpercaya yang fokus pada jual beli dan sewa apartemen di Depok dan sekitarnya. Kami hadir untuk membantu Anda menemukan unit apartemen ideal, baik untuk hunian pribadi maupun investasi jangka panjang.
            Kami mengutamakan pelayanan profesional, transaksi aman, dan proses yang cepat. Berbasis di Kota Depok, kami menyediakan berbagai pilihan Unit apartemen yang strategis di area dekat pusat kota,serta akses transportasi umum seperti stasiun KRL. Kami melayani pembeli, penyewa,secara profesional dan efektif.</p>
            </div>
            <div className="col mt-5">
                    <div class="row align-items-center d-flex gap-5">
                        <div class="col about-card">
                            <div className="col d-flex gap-2 align-items-center card-about ">
                            <img src="/img/bersih.png" alt="" srcset="" className="img-icon" />
                            <h5 className="text-card-about">Kebersihan Unit Yang Terjamin</h5>
                            </div>
                            <hr />
                            <p className="text-card-deskripsi">Setiap unit apartemen kami bersih, higienis, dan siap huni. 
                                Kebersihan adalah prioritas utama sebelum dipasarkan. Unit disterilkan secara berkala oleh tenaga profesional. 
                                Kami menjamin unit bebas debu, kuman, dan bau tidak sedap. 
                                Lingkungan apartemen terawat agar tetap aman dan nyaman.</p>
                                <hr />
                        </div>
                        <div class="col about-card">
                       <div className="col d-flex gap-2 align-items-center card-about ">
                            <img src="/img/facility.png" alt="" srcset="" className="img-icon" />
                            <h5 className="text-card-about">Fasilitas Yang Lengkap</h5>
                            </div>
                            <hr />
                            <p className="text-card-deskripsi">Nikmati fasilitas lengkap seperti kolam renang, parkir luas, keamanan 24 jam, internet cepat, dan CCTV. Tersedia juga taman hijau, minimarket, food court, dan mall di dalam kawasan apartemen, Ideal untuk keluarga, mahasiswa, dan profesional muda yang mengutamakan kenyamanan.</p>
                         <hr />
                         </div>
                        <div class="col about-card">
                        <div className="col d-flex gap-2 align-items-center card-about">
                            <img src="/img/guard.png" alt="" srcset="" className="img-icon" />
                            <h5 className="text-card-about">Keamanan Dan Ketentraman Yang terjamin</h5>
                            </div>
                            <hr />
                            <p className="text-card-deskripsi">Setiap sudut apartemen dijaga untuk menciptakan lingkungan aman dan nyaman. Sistem keamanan ketat memberikan ketenangan untuk aktivitas sehari-hari. Akses kontrol menjaga privasi dan kenyamanan Anda. Nikmati hidup tenang di lingkungan yang aman dan terlindungi.</p>
                        <hr />
                        </div>
                    </div>
                    </div>
            </div>
        
    )
}