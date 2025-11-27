# DepremApp - PWA Kurulum Talimatları

## 🎉 PWA Özelliği Eklendi!

Uygulamayı artık telefon veya bilgisayara **gerçek bir uygulama gibi kurabilirsiniz**!

## 📱 Telefona Nasıl Kurulur?

### Android (Chrome):
1. Tarayıcıda **`http://localhost:5173`** aç
2. Sağ üst menüden (⋮) **"Ana ekrana ekle"** seç
3. Uygulama ismi çıkacak, **"Ekle"** butonuna bas
4. ✅ Artık ana ekranında bir uygulama simgesi var!

### iPhone (Safari):
1. Safari'de **`http://localhost:5173`** aç
2. Orta alttaki **Paylaş** butonuna (⬆️) bas
3. **"Ana Ekrana Ekle"** seç
4. İsmi düzenle ve **"Ekle"** butonuna bas
5. ✅ Ana ekranında uygulama simgesi görünür!

## 💻 Bilgisayara Nasıl Kurulur?

### Windows/Mac (Chrome/Edge):
1. Tarayıcıda **`http://localhost:5173`** aç
2. Adres çubuğunun sağında **"Kur"** (Install) ikonu çıkacak
3. İkona tıkla ve **"Kur"** deyin
4. ✅ Masaüstünde bir uygulama gibi açılır!

## 🚀 Özellikler

- ✅ **Offline çalışma** - İnternet olmadan da açılır
- ✅ **Harita önbelleği** - Harita karoları 30 gün saklanır
- ✅ **Tam ekran** - Tarayıcı çubukları yok
- ✅ **Push bildirimler** (gelecekte eklenebilir)
- ✅ **Otomatik güncellemeler** - Yeni sürümler otomatik yüklenir

## 🌐 İnternete Yayınlama (Herkesle Paylaş)

Şu an sadece senin bilgisayarında çalışıyor (`localhost`). Herkesle paylaşmak için:

### Seçenek 1: Vercel (Ücretsiz, En Kolay)
```bash
npm run build
npx vercel
```
Link alırsın → Herkese gönder!

### Seçenek 2: Netlify (Ücretsiz)
```bash
npm run build
npx netlify deploy
```

## 🔧 Teknik Detaylar

**Eklenen PWA Özellikleri:**
- Service Worker (offline çalışma)
- Web App Manifest (kurulum)
- App Icons (192x192, 512x512)
- Cache stratejileri (harita karoları)
- Tema rengi (#ef4444 - kırmızı)
- Standalone mod (tam ekran)

**Yapılandırma Dosyaları:**
- `vite.config.js` - PWA ayarları
- `index.html` - Meta taglar
- `public/icon-*.png` - Uygulama simgeleri
