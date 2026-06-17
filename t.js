{
    "seq_cod_anti_gagal": {
        "name": "Follow-Up Order COD (Anti Gagal)",
        "category": "E-Commerce",
        "sequenceData": [
            { 
                "id": 1, 
                "timeVal": 15, 
                "timeUnit": "Menit", 
                "msg": "Halo [Nama Penerima],\n\nTerima kasih sudah order produk kami via COD. Paket akan segera kami proses ya kak! \n\nTotal tagihan kakak adalah: *[Total_Tagihan]*\n\nMohon siapkan uang tunainya saat kurir datang. Terima kasih! 🙏", 
                "stopIfPaid": true 
            },
            { 
                "id": 2, 
                "timeVal": 1, 
                "timeUnit": "Hari", 
                "msg": "Halo kak [Nama Penerima],\n\nPaket kakak sudah dibawa oleh kurir dan sedang dalam perjalanan. Jangan lupa siapkan uang pas sebesar *[Total_Tagihan]* agar proses COD lebih cepat.\n\nSemoga selamat sampai tujuan! 🚚", 
                "stopIfPaid": true 
            },
            { 
                "id": 3, 
                "timeVal": 3, 
                "timeUnit": "Hari", 
                "msg": "Halo kak,\n\nApakah paketnya sudah sampai dan sesuai pesanan?\nJika ada pertanyaan atau kendala terkait produk, jangan ragu untuk balas pesan ini ya kak. Kami siap membantu! 😊", 
                "stopIfPaid": false 
            }
        ]
    },

    "seq_webinar_reminder": {
        "name": "Reminder Webinar & Event",
        "category": "Event & Webinar",
        "sequenceData": [
            { 
                "id": 1, 
                "timeVal": 5, 
                "timeUnit": "Menit", 
                "msg": "Halo [Nama Lengkap],\n\nYeay! Pendaftaran webinar Anda berhasil kami terima! 🎉\n\nAgar tidak ketinggalan info penting, silakan bergabung ke grup WhatsApp khusus peserta melalui link berikut:\nhttps://chat.whatsapp.com/contohlink\n\nSampai jumpa di grup!", 
                "stopIfPaid": false 
            },
            { 
                "id": 2, 
                "timeVal": 1, 
                "timeUnit": "Hari", 
                "msg": "Reminder! ⏰\n\nHalo [Nama Lengkap], Webinar kita akan dimulai BESOK.\n\nPastikan aplikasi Zoom Anda sudah siap digunakan ya. Link Zoom akan kami bagikan 1 jam sebelum acara dimulai di dalam grup WhatsApp.", 
                "stopIfPaid": false 
            }
        ]
    }
}
