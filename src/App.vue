<script setup>
import QrcodeVue from 'qrcode.vue'

// ⚠️ Remplacez par l'URL réelle une fois la page hébergée.
// C'est cette adresse que le QR code encode.
const hubUrl = 'https://polycliniquedesspecialistes.ga'

// Réseaux sociaux
const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1BVMvnt5XL/?mibextid=wwXIfr',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/polyclinique_des_specialistes?igsh=YWg1azI5Nm1vajdh&utm_source=qr',
    icon: 'instagram',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/24105198080',
    icon: 'whatsapp',
  },
]

// Coordonnées
const contacts = [
  { icon: 'phone', href: 'tel:+24165198080', text: '06 51 98 080 · 07 41 98 080' },
  { icon: 'mail', href: 'mailto:Polycliniquedesspecialistes@gmail.com', text: 'Polycliniquedesspecialistes@gmail.com', break: true },
  { icon: 'pin', href: 'https://www.google.com/maps/search/?api=1&query=Polyclinique+des+Sp%C3%A9cialistes+Libreville', text: 'London, Libreville — Gabon' },
]

// Services
const services = [
  'OPHTALMOLOGIE NV', 'STOMATOLOGIE (DENTAIRE)', 'KINÉSITHÉRAPIE NV', 'PÉDIATRIE',
  'RHUMATOLOGIE', 'GYNÉCOLOGIE', 'SAGE-FEMME', 'PSYCHOLOGIE NV', 'GASTROLOGIE',
  'CARDIOLOGIE', 'DERMATOLOGIE', 'ORL', 'NEUROLOGIE', 'ENDOCRINOLOGIE',
  'ORTHOPÉDIE & TRAUMATOLOGIE', 'MÉDECINE ESTHÉTIQUE', 'CHIRURGIE GÉNÉRALE & ESTHÉTIQUE',
  'URGENCE 24H/24', 'SERVICE LABORATOIRE',
]
</script>

<template>
  <div class="page">
    <div class="card">

      <!-- En-tête -->
      <header class="head">
        <img class="logo" src="/logo.png" alt="Polyclinique des Spécialistes" />
        <h1 class="title">Polyclinique des Spécialistes</h1>
        <p class="subtitle">London, Libreville · Gabon</p>
      </header>

      <!-- Réseaux sociaux -->
      <nav class="socials">
        <a
          v-for="(s, i) in socials"
          :key="s.label"
          class="social"
          :class="s.icon"
          :style="{ animationDelay: `${i * 90}ms` }"
          :href="s.href"
          target="_blank"
          rel="noopener"
        >
          <span class="sicon">
            <!-- Facebook -->
            <svg v-if="s.icon === 'facebook'" width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>
            <!-- Instagram -->
            <svg v-else-if="s.icon === 'instagram'" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5.2"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none"/></svg>
            <!-- WhatsApp -->
            <svg v-else width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2.9a9.1 9.1 0 0 0-7.74 13.8L3 21.5l4.93-1.29a9.1 9.1 0 1 0 4.11-17.31zm0 16.6a7.5 7.5 0 0 1-3.83-1.05l-.27-.16-2.85.75.76-2.78-.18-.29a7.5 7.5 0 1 1 6.37 3.53z"/></svg>
          </span>
          <span>{{ s.label }}</span>
          <span class="chevron">›</span>
        </a>
      </nav>

      <!-- Coordonnées -->
      <div class="contacts">
        <a v-for="(c, i) in contacts" :key="i" class="contact" :class="{ brk: c.break }" :href="c.href" :target="c.icon === 'pin' ? '_blank' : null" :rel="c.icon === 'pin' ? 'noopener' : null">
          <span class="cicon">
            <svg v-if="c.icon === 'phone'" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <svg v-else-if="c.icon === 'mail'" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="2" y="4" width="20" height="16" rx="2.2"/><path d="m22 6-10 7L2 6"/></svg>
            <svg v-else width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </span>
          <span>{{ c.text }}</span>
        </a>
      </div>

      <!-- Services -->
      <section class="services">
        <h2 class="section-title">Nos services</h2>
        <div class="services-grid">
          <div
            v-for="(svc, i) in services"
            :key="svc"
            class="service"
            :style="{ animationDelay: `${i * 45}ms` }"
          >
            <span class="bullet"></span>
            <span>{{ svc }}</span>
          </div>
        </div>
      </section>

      <!-- QR code -->
      <div class="qr-box">
        <div class="qr-frame">
          <QrcodeVue :value="hubUrl" :size="98" level="M" />
        </div>
        <div>
          <div class="qr-title">Partager cette page</div>
          <p class="qr-text">Faites scanner ce code pour transmettre nos coordonnées.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 24px 16px 40px;
}
.card {
  width: 100%;
  max-width: 430px;
  background: #fff;
  border-radius: 26px;
  box-shadow: 0 10px 40px rgba(20, 30, 60, .14);
  overflow: hidden;
}

/* En-tête */
.head { padding: 40px 30px 22px; text-align: center; }
.logo { width: 150px; height: 150px; object-fit: contain; border-radius: 50%; }
.title {
  margin: 10px 0 0;
  font: 800 22px/1.1 'Archivo', sans-serif;
  letter-spacing: -.015em;
  color: #141414;
}
.subtitle {
  margin: 7px 0 0;
  font: 600 12px/1.3 'Public Sans', sans-serif;
  color: #23366C;
  letter-spacing: .08em;
  text-transform: uppercase;
}

/* Réseaux */
.socials { display: flex; flex-direction: column; gap: 11px; padding: 6px 30px 4px; }
.social {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  background: #23366C;
  color: #fff;
  border-radius: 15px;
  text-decoration: none;
  font: 600 15px/1 'Public Sans', sans-serif;
  transition: background .28s ease, transform .2s ease, box-shadow .28s ease;
  opacity: 0;
  animation: social-in .5s ease forwards;
}
.social:hover,
.social:focus-visible {
  transform: translateY(-2px) scale(1.015);
}
.social:active { transform: translateY(0) scale(.99); }

.social.facebook:hover { background: #1877F2; box-shadow: 0 8px 20px rgba(24, 119, 242, .38); }
.social.whatsapp:hover { background: #25D366; box-shadow: 0 8px 20px rgba(37, 211, 102, .38); }
.social.instagram:hover {
  background: linear-gradient(45deg, #FEDA75 0%, #FA7E1E 20%, #D62976 55%, #962FBF 78%, #4F5BD5 100%);
  box-shadow: 0 8px 20px rgba(214, 41, 118, .35);
}

.sicon { display: flex; transition: transform .35s cubic-bezier(.34, 1.56, .64, 1); }
.social:hover .sicon { transform: scale(1.18) rotate(-6deg); }

.chevron { margin-left: auto; opacity: .55; font-size: 18px; transition: transform .25s ease; }
.social:hover .chevron { transform: translateX(3px); opacity: .9; }

@keyframes social-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Coordonnées */
.contacts { display: flex; flex-direction: column; gap: 2px; padding: 16px 30px 4px; }
.contact {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  color: #33384a;
  text-decoration: none;
  font: 500 13px/1.2 'Public Sans', sans-serif;
  border-bottom: 1px solid #eef0f4;
}
.contact:last-child { border-bottom: none; }
.contact.brk { word-break: break-all; }
.cicon { color: #23366C; display: flex; flex: none; }

/* Services */
.services { padding: 20px 30px 6px; }
.section-title {
  margin: 0 0 14px;
  font: 700 11px/1 'Archivo', sans-serif;
  letter-spacing: .16em;
  color: #23366C;
  text-transform: uppercase;
}
.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 9px 18px; }
.service {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 6px;
  margin: -4px -6px;
  border-radius: 8px;
  font: 500 12.5px/1.3 'Public Sans', sans-serif;
  color: #1d2027;
  cursor: default;
  transition: background .2s ease, color .2s ease, transform .2s ease;
  opacity: 0;
  animation: service-in .45s ease forwards;
}
.service:hover {
  background: #eef2fa;
  color: #23366C;
  transform: translateX(2px);
}
.bullet {
  flex: none;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #23366C;
  margin-top: 6px;
  transition: transform .25s ease, background .2s ease;
}
.service:hover .bullet { transform: scale(1.6); background: #4a63a3; }

@keyframes service-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* QR */
.qr-box {
  margin: 22px 30px 30px;
  padding: 18px;
  border: 1.5px solid #e4e7ee;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fbfbfd;
}
.qr-frame {
  flex: none;
  width: 106px;
  height: 106px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #edeff4;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.qr-title { font: 700 14px/1.2 'Archivo', sans-serif; color: #141414; }
.qr-text { margin: 5px 0 0; font: 500 12px/1.45 'Public Sans', sans-serif; color: #5a6070; }
</style>
