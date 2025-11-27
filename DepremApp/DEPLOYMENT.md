# DepremApp - İnternete Yayınlama Rehberi

## ✅ PWA Hazır!
Uygulaman şu an **kurulabilir** durumda. Son adım: **İnternete yüklemek** ki herkesle paylaşabilesin.

## 🚀 Yayınlama Seçenekleri

### Seçenek 1: Vercel (Önerilen)
**Neden:** En hızlı, ücretsiz, otomatik SSL

**Adımlar:**
1. [vercel.com](https://vercel.com) → **Sign Up** yap (GitHub/Email ile)
2. Terminalden:
   ```bash
   npx vercel --prod
   ```
3. Login linkine tıkla → Tarayıcıda onayla
4. Sorular:
   - Project name: `depremapp` (Enter)
   - Directory: `dist` (Enter)
   - Build command: Boş bırak (Enter)
5. **Link alırsın!** → `https://depremapp-xyz.vercel.app`

### Seçenek 2: Netlify
**Adımlar:**
1. [netlify.com](https://netlify.com) → **Sign Up**
2. Terminalden:
   ```bash
   npx netlify deploy --prod
   ```
3. Login yap → Klasör seç: `dist`
4. Link alırsın!

### Seçenek 3: GitHub Pages (Manuel)
1. GitHub'a repository oluştur
2. `dist` klasörünü push et
3. Settings → Pages → Enable

## 📱 Yayınlandıktan Sonra

**Aldığın linki** (örn: `depremapp.vercel.app`) **paylaş!**

**Kullanıcılar:**
1. Linke tıklarlar
2. Chrome'da → Menü → **"Ana ekrana ekle"**
3. ✅ Telefona uygulama kuruldu!

## 🔧 Build Bilgileri
- **Build Size:** 132 KB (çok hafif!)
- **PWA:** Aktif ✅
- **Offline:** Çalışıyor ✅
- **Icons:** 192x192, 512x512 ✅

## ⚡ Hızlı Başlangıç

```bash
# 1. Vercel'e üye ol
# 2. Terminalde:
npx vercel --prod

# 3. Login linkine tıkla
# 4. Link'i kopyala ve paylaş!
```

**Not:** GitHub hesabın varsa direkt GitHub ile sign up yapabilirsin, daha hızlı!
