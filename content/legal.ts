import { PRIVACY_EMAIL, SUPPORT_EMAIL, type Locale } from '@/lib/site';

/** A string is a paragraph, an array is a bullet list. */
export type DocSection = { h: string; blocks: (string | string[])[] };
type Doc = { title: string; updatedLabel: string; intro: string; sections: DocSection[] };

export const privacy: Record<Locale, Doc> = {
  tr: {
    title: 'Gizlilik Politikası',
    updatedLabel: 'Son güncelleme',
    intro: `Bu politika, FridgeChef iOS uygulamasının hangi verileri neden işlediğini ve kimlerle paylaştığını anlatır. Veri sorumlusu, uygulamayı App Store'da yayımlayan Mustafa Bek'tir. Sorularını ${PRIVACY_EMAIL} adresine yazabilirsin.`,
    sections: [
      {
        h: 'Topladığımız veriler',
        blocks: [
          [
            'Hesap: e-posta adresi, şifre (e-postayla girişte, özetlenmiş olarak) ve Google ya da Apple ile girişte bu hizmetlerin paylaştığı bilgiler; Apple seçimine bağlı olarak adını da paylaşabilir.',
            'Profil ve hedefler: cinsiyet, doğum yılı, boy, kilo, aktivite düzeyi, hedef, kalori ve makro hedefleri, saat dilimi ve dil.',
            'Diyet planı cevapları: yaş, hedef kilo, bel ölçüsü, egzersiz günleri, alerjiler, sevmediğin yiyecekler, beslenme tercihleri, odak bölgeleri, bütçe; ayrıca hamilelik veya emzirme, yeme bozukluğu öyküsü, kan şekerini düşüren ilaç kullanımı ve böbrek rahatsızlığına ilişkin cevaplar.',
            'Haftalık kontroller: kilo, bel ölçüsü ve nasıl hissettiğin.',
            'Öğün günlüğü: kaydettiğin yemekler, gramajlar, zamanları ve fotoğraf analizi sonuçları.',
            'Tarif verileri: yazdığın ya da söylediğin malzemeler, önerilen tarifler, filtreler, alışveriş listen.',
            'Kullanım kayıtları: istek türü, harcanan hak ve hata bilgisi.',
            'Satın alma: abonelik planı, ürün kimliği ve bitiş tarihi. Kart bilgilerin bize ulaşmaz; ödemeyi Apple alır.',
          ],
        ],
      },
      {
        h: 'Fotoğraflar ve ses',
        blocks: [
          'Buzdolabı ve öğün fotoğrafları analiz için yapay zekâ sağlayıcılarına gönderilir. Uygulama bu fotoğrafları FridgeChef sunucularında saklamaz; yalnızca analiz sonucunu (ör. yemek adı ve gramaj) ve kaç fotoğraf kullanıldığını kaydeder.',
          'Sesli girişte konuşman, cihazının konuşma tanıma hizmetiyle metne çevrilir. Biz ses kaydı almayız, yalnızca oluşan metni kullanırız.',
        ],
      },
      {
        h: 'Verileri neden işliyoruz',
        blocks: [
          [
            'Tarif önermek, öğünleri analiz etmek ve diyet planını kurmak.',
            'Kalori ve besin hedeflerini hesaplamak, planın güvenlik kurallarını uygulamak.',
            'Hakları ve abonelikleri yönetmek, hataları gidermek, kötüye kullanımı önlemek.',
            'Destek taleplerini yanıtlamak.',
          ],
          'Uygulamada reklam veya analiz yazılımı yoktur; verilerini satmayız ve sağlık bilgilerini reklam için kullanmayız.',
        ],
      },
      {
        h: 'Verileri kimlerle paylaşıyoruz',
        blocks: [
          [
            'Supabase: kimlik doğrulama ve veritabanı.',
            'OpenRouter ve Google (Gemini): fotoğraflar, malzemeler, hedefin, filtrelerin ve varsa o gün kalan kalori ile protein; tarif ve öğün analizi için.',
            'OpenRouter ve Anthropic (Claude): diyet planında kalori ve protein hedefleri, öğün stratejisi, bütçe ve öğün listeleri. Yaşın, kilon ve sağlık cevapların bu isteğe eklenmez.',
            'RevenueCat: abonelik işlemleri için kullanıcı kimliği ve satın alma olayları.',
            'Apple: giriş, abonelik ödemeleri ve konuşma tanıma.',
            'Google: Google ile giriş.',
          ],
          'Bu sağlayıcılar veriyi kendi koşullarına göre işler. Yasal bir yükümlülük olduğunda yetkili mercilerle de paylaşabiliriz.',
        ],
      },
      {
        h: 'Yurt dışına aktarım',
        blocks: [
          'Sağlayıcılarımız Türkiye dışında bulunduğu için verilerin yurt dışındaki sunucularda işlenebilir.',
        ],
      },
      {
        h: 'Saklama süresi',
        blocks: [
          'Verilerin, hesabın açık olduğu sürece saklanır. Hesabın silindiğinde hesabına bağlı veriler de silinir. Diyet planı cevapları plan kaydınla birlikte saklanır; planı oluşturmadan önceki taslak yalnızca cihazında durur.',
        ],
      },
      {
        h: 'Hakların',
        blocks: [
          'Yürürlükteki veri koruma mevzuatı (KVKK ve uygulanabildiği ölçüde GDPR) kapsamında verilerine erişmeyi, düzeltilmesini ve silinmesini istemeyi, işlenmesine itiraz etmeyi talep edebilirsin. Talebini kayıtlı e-posta adresinden gönder.',
          `Hesap ve veri silme dahil tüm talepler için: ${PRIVACY_EMAIL}. Hesabını silmek aboneliği iptal etmez; aboneliği Apple üzerinden iptal etmelisin.`,
        ],
      },
      {
        h: 'Güvenlik',
        blocks: [
          'Veriler aktarım sırasında HTTPS ile korunur, veritabanında satır düzeyinde erişim kuralları uygulanır ve yapay zekâ çağrıları sunucu tarafında yapılır. Hiçbir yöntem mutlak güvenlik sağlamaz.',
        ],
      },
      {
        h: 'Çocuklar ve yaş sınırı',
        blocks: [
          'FridgeChef 13 yaşın altındaki çocuklara yönelik değildir. Diyet planı yalnızca 18 yaş ve üzeri içindir.',
        ],
      },
      {
        h: 'Bu web sitesi',
        blocks: [
          'Bu site çerez veya analiz aracı kullanmaz. Tema tercihin yalnızca tarayıcında saklanır. Barındırma sağlayıcısı teknik sunucu kayıtları tutabilir.',
        ],
      },
      {
        h: 'Değişiklikler',
        blocks: ['Bu politikayı güncellediğimizde yukarıdaki tarihi değiştiririz. Önemli değişiklikleri ayrıca duyururuz.'],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updatedLabel: 'Last updated',
    intro: `This policy explains what data the FridgeChef iOS app processes, why, and who receives it. The data controller is Mustafa Bek, who publishes the app on the App Store. You can send questions to ${PRIVACY_EMAIL}.`,
    sections: [
      {
        h: 'Data we collect',
        blocks: [
          [
            'Account: email address, password (for email sign-in, stored hashed), and what Google or Apple share when you sign in with them; Apple may share your name, depending on your choice.',
            'Profile and goals: sex, birth year, height, weight, activity level, goal, calorie and macro targets, time zone and language.',
            'Diet plan answers: age, target weight, waist, exercise days, allergies, disliked foods, dietary preferences, focus areas and budget, plus answers about pregnancy or breastfeeding, a history of eating disorders, glucose-lowering medication and kidney disease.',
            'Weekly check-ins: weight, waist and how you feel.',
            'Meal journal: foods you log, amounts, times and photo analysis results.',
            'Recipe data: ingredients you type or say, suggested recipes, filters and your shopping list.',
            'Usage logs: request type, credits used and error details.',
            'Purchases: subscription plan, product id and expiry date. Your card details never reach us, because Apple takes the payment.',
          ],
        ],
      },
      {
        h: 'Photos and voice',
        blocks: [
          'Fridge and meal photos are sent to AI providers for analysis. The app doesn’t store these photos on FridgeChef servers. It saves only the analysis result (such as food name and amount) and how many photos were used.',
          'With voice input, your speech is converted to text by your device’s speech recognition service. We don’t receive audio, only the resulting text.',
        ],
      },
      {
        h: 'Why we process data',
        blocks: [
          [
            'To suggest recipes, analyse meals and build your diet plan.',
            'To calculate calorie and nutrient targets and apply the plan’s safety rules.',
            'To manage credits and subscriptions, fix errors and prevent abuse.',
            'To answer support requests.',
          ],
          'The app contains no advertising or analytics software. We don’t sell your data or use your health information for advertising.',
        ],
      },
      {
        h: 'Who receives data',
        blocks: [
          [
            'Supabase: authentication and database.',
            'OpenRouter and Google (Gemini): photos, ingredients, your goal, filters and, where available, the calories and protein left that day, for recipes and meal analysis.',
            'OpenRouter and Anthropic (Claude): calorie and protein targets, meal strategy, budget and meal lists for diet plans. Your age, weight and health answers aren’t included in this request.',
            'RevenueCat: user id and purchase events, for subscriptions.',
            'Apple: sign-in, subscription payments and speech recognition.',
            'Google: sign-in with Google.',
          ],
          'These providers process data under their own terms. We may also share data with authorities where the law requires it.',
        ],
      },
      {
        h: 'International transfers',
        blocks: ['Our providers are based outside Türkiye, so your data may be processed on servers abroad.'],
      },
      {
        h: 'Retention',
        blocks: [
          'Your data is kept while your account is open. When your account is deleted, the data linked to it is deleted too. Diet plan answers are stored with your plan; the draft before a plan is created stays only on your device.',
        ],
      },
      {
        h: 'Your rights',
        blocks: [
          'Under applicable data protection law (KVKK and, where it applies, GDPR) you can ask to access, correct or delete your data, and object to its processing. Please send requests from your registered email address.',
          `For all requests, including account and data deletion: ${PRIVACY_EMAIL}. Deleting your account doesn’t cancel a subscription; cancel it through Apple.`,
        ],
      },
      {
        h: 'Security',
        blocks: [
          'Data is protected in transit with HTTPS, the database applies row-level access rules, and AI calls are made server-side. No method guarantees absolute security.',
        ],
      },
      {
        h: 'Children and age limits',
        blocks: ['FridgeChef is not intended for children under 13. The diet plan is for people aged 18 and over only.'],
      },
      {
        h: 'This website',
        blocks: [
          'This site uses no cookies or analytics tools. Your theme choice is stored only in your browser. The hosting provider may keep technical server logs.',
        ],
      },
      {
        h: 'Changes',
        blocks: ['When we update this policy we change the date above, and we announce significant changes separately.'],
      },
    ],
  },
};

export const terms: Record<Locale, Doc> = {
  tr: {
    title: 'Kullanım Koşulları',
    updatedLabel: 'Son güncelleme',
    intro: 'FridgeChef uygulamasını kullanarak bu koşulları kabul etmiş olursun. Apple Standart Son Kullanıcı Lisans Sözleşmesi de geçerlidir.',
    sections: [
      {
        h: 'Hizmet',
        blocks: [
          'FridgeChef; fotoğraf, yazı veya sesle girdiğin malzemelere göre tarif önerir, kalori günlüğü tutmana yardım eder ve diyet planı oluşturur. Öneriler yapay zekâ ile üretildiği için hatalı veya eksik olabilir. Malzemeleri, alerjenleri ve pişirme güvenliğini kendin kontrol etmelisin.',
        ],
      },
      {
        h: 'Sağlık uyarısı',
        blocks: [
          'FridgeChef, sağlıklı yetişkinler için genel beslenme ve tarif bilgisi sunar. Tıbbi tavsiye değildir; herhangi bir hastalığı teşhis, tedavi veya önleme amacı taşımaz. Kalori ve besin hedefleri tahminidir. Özellikle bir sağlık sorunun varsa veya ilaç kullanıyorsan, beslenmeni değiştirmeden önce bir doktora veya diyetisyene danış. Alerji filtreleri tam güvence sağlamaz. Sonuçlar kişiden kişiye değişir ve belirli bir sonuç garanti edilmez.',
        ],
      },
      {
        h: 'Hesap',
        blocks: [
          'Uygulamayı kullanmak için hesap gerekir. Hesabının güvenliğinden sen sorumlusun. En az 13 yaşında olmalısın; diyet planı yalnızca 18 yaş ve üzeri içindir.',
        ],
      },
      {
        h: 'Haklar',
        blocks: [
          'Yapay zekâ özellikleri günlük haklarla çalışır: buzdolabı fotoğrafı 1, öğün fotoğrafı 1, yazılı veya sesli tarif 0,5, diyet planı haftası oluşturma 1 hak. Haklar her gün yenilenir ve devredilmez. Başarısız isteklerde hak iade edilir. Bu değerler zaman içinde değişebilir.',
        ],
      },
      {
        h: 'Abonelikler',
        blocks: [
          'Premium ve Pro aylık otomatik yenilenen aboneliklerdir ve ücreti Apple hesabından alınır. Dönem bitmeden en az 24 saat önce iptal etmezsen yenilenir. Aboneliğini App Store hesap ayarlarından yönetebilir veya iptal edebilirsin. İadeler Apple’ın kurallarına tabidir. Hesabını silmek aboneliği iptal etmez.',
        ],
      },
      {
        h: 'Kabul edilebilir kullanım',
        blocks: [
          'Uygulamayı yasalara aykırı biçimde kullanamaz, başkasına ait içerik yükleyemez, hizmeti otomatik araçlarla zorlayamaz veya sınırları aşmaya çalışamazsın. Bu durumlarda hesabını askıya alabiliriz.',
        ],
      },
      {
        h: 'Fikrî mülkiyet',
        blocks: [
          'Uygulamanın adı, tasarımı ve yazılımı bize aittir. Yüklediğin içerik sana aittir; hizmeti sunabilmemiz için işlenmesine izin verirsin.',
        ],
      },
      {
        h: 'Sorumluluk',
        blocks: [
          'Hizmet “olduğu gibi” sunulur. Yürürlükteki hukukun izin verdiği ölçüde, önerilerin kullanımından doğan dolaylı zararlardan sorumlu değiliz. Tüketici olarak sahip olduğun yasal haklar saklıdır.',
        ],
      },
      {
        h: 'Değişiklik ve iletişim',
        blocks: [`Koşulları güncelleyebiliriz; güncel metin bu sayfadadır. Sorular için: ${SUPPORT_EMAIL}.`],
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    updatedLabel: 'Last updated',
    intro: 'By using the FridgeChef app you accept these terms. The Apple Standard End User License Agreement also applies.',
    sections: [
      {
        h: 'The service',
        blocks: [
          'FridgeChef suggests recipes from ingredients you enter by photo, text or voice, helps you keep a calorie journal and builds diet plans. Suggestions are generated by AI and may be wrong or incomplete. You must check ingredients, allergens and cooking safety yourself.',
        ],
      },
      {
        h: 'Health notice',
        blocks: [
          'FridgeChef provides general nutrition and recipe information for healthy adults. It is not medical advice and does not diagnose, treat, or prevent any condition. Calorie and nutrient targets are estimates. Consult a doctor or registered dietitian before changing your diet, especially if you have a medical condition or take medication. Allergy filters are not a guarantee. Results vary from person to person, and no specific result is guaranteed.',
        ],
      },
      {
        h: 'Your account',
        blocks: [
          'You need an account to use the app, and you are responsible for keeping it secure. You must be at least 13; the diet plan is for people aged 18 and over only.',
        ],
      },
      {
        h: 'Credits',
        blocks: [
          'AI features run on daily credits: fridge photo 1, meal photo 1, typed or spoken recipe 0.5, generating a diet plan week 1. Credits refresh daily and don’t roll over. Failed requests are refunded. These values may change over time.',
        ],
      },
      {
        h: 'Subscriptions',
        blocks: [
          'Premium and Pro are monthly auto-renewing subscriptions charged to your Apple account. They renew unless cancelled at least 24 hours before the period ends. Manage or cancel anytime in your App Store account settings. Refunds follow Apple’s rules. Deleting your account doesn’t cancel a subscription.',
        ],
      },
      {
        h: 'Acceptable use',
        blocks: [
          'You may not use the app unlawfully, upload content that belongs to someone else, stress the service with automated tools or try to get around its limits. We may suspend accounts that do.',
        ],
      },
      {
        h: 'Intellectual property',
        blocks: [
          'The app’s name, design and software belong to us. Content you upload stays yours, and you allow us to process it to provide the service.',
        ],
      },
      {
        h: 'Liability',
        blocks: [
          'The service is provided “as is”. To the extent the law allows, we aren’t liable for indirect damage arising from the use of suggestions. Your statutory rights as a consumer are not affected.',
        ],
      },
      {
        h: 'Changes and contact',
        blocks: [`We may update these terms, and the current text is on this page. Questions: ${SUPPORT_EMAIL}.`],
      },
    ],
  },
};

/**
 * Account deletion page. Google Play requires a public link where users can ask for their account
 * and data to be deleted, naming the app and the developer shown on the store listing.
 */
export const deleteAccount: Record<Locale, Doc> = {
  tr: {
    title: 'Hesabını sil',
    updatedLabel: 'Son güncelleme',
    intro: `Bu sayfa, Mustafa Bek tarafından geliştirilen FridgeChef uygulaması (iOS ve Android) içindir. FridgeChef hesabını ve hesabına bağlı verileri silmemizi buradan isteyebilirsin.`,
    sections: [
      {
        h: 'Silme talebi nasıl gönderilir',
        blocks: [
          [
            `FridgeChef'e giriş yaptığın e-posta adresinden ${PRIVACY_EMAIL} adresine bir e-posta gönder.`,
            'Konu satırına "Hesap silme talebi" yaz.',
            'Google veya Apple ile giriş yaptıysan, o hesabın e-posta adresinden yaz. Apple ile girişte e-postanı gizlediysen, uygulamadaki Profil ekranında görünen e-posta adresini belirt.',
          ],
          'Talebin bize ulaştığında hesabın sana ait olduğunu doğrularız; gerekirse e-postayla ek bilgi isteriz. Silme işlemi en geç 30 gün içinde tamamlanır ve sana e-postayla bildirilir.',
        ],
      },
      {
        h: 'Silinen veriler',
        blocks: [
          [
            'Hesap ve iletişim bilgilerin: e-posta adresi, giriş bilgileri, adın, telefon numaran ve izin tercihlerin.',
            'Profil ve hedeflerin: boy, kilo, aktivite, kalori ve makro hedefleri.',
            'Diyet planların, plan cevapların ve haftalık kontrollerin.',
            'Öğün günlüğün ve fotoğraf analizi sonuçları.',
            'Tarif geçmişin ve alışveriş listen.',
            'Hak bakiyen ve kullanım kayıtların.',
          ],
          'Fotoğrafları zaten sunucularımızda saklamıyoruz. Silme tamamlandığında bu veriler geri getirilemez.',
        ],
      },
      {
        h: 'Saklanabilecek veriler',
        blocks: [
          [
            'Satın alma kayıtları: abonelik ödemelerine ait kayıtlar Apple, Google ve RevenueCat tarafından, kendi kuralları ve yasal yükümlülükleri gereğince saklanır.',
            'Silme talebine ait yazışma: talebi işlediğimizi gösterebilmek için en fazla 1 yıl saklanır.',
            'Yasal bir yükümlülük olduğunda, yalnızca o yükümlülüğün gerektirdiği veriler ve süre boyunca.',
          ],
        ],
      },
      {
        h: 'Aboneliğin',
        blocks: [
          'Hesabını silmek aboneliği iptal etmez. Ücretlendirilmeye devam etmemek için aboneliğini önce iPhone\'da App Store abonelik ayarlarından ya da Android\'de Google Play > Abonelikler bölümünden iptal et.',
        ],
      },
      {
        h: 'Hesabını silmeden yalnızca verilerini sildirmek',
        blocks: [
          `Hesabın açık kalsın ama belirli verilerin (ör. öğün günlüğün veya diyet planların) silinsin istiyorsan, ${PRIVACY_EMAIL} adresine hangi verilerin silinmesini istediğini yaz.`,
        ],
      },
    ],
  },
  en: {
    title: 'Delete your account',
    updatedLabel: 'Last updated',
    intro: `This page is for the FridgeChef app (iOS and Android), developed by Mustafa Bek. You can ask us here to delete your FridgeChef account and the data linked to it.`,
    sections: [
      {
        h: 'How to request deletion',
        blocks: [
          [
            `Send an email to ${PRIVACY_EMAIL} from the email address you use to sign in to FridgeChef.`,
            'Use the subject line "Account deletion request".',
            'If you signed in with Google or Apple, write from that account\'s email address. If you hid your email when signing in with Apple, include the email address shown on the Profile screen in the app.',
          ],
          'When we receive your request we confirm the account is yours, and may ask for more details by email. Deletion is completed within 30 days at the latest, and we let you know by email.',
        ],
      },
      {
        h: 'Data that is deleted',
        blocks: [
          [
            'Your account and contact details: email address, sign-in details, name, phone number and consent choices.',
            'Your profile and goals: height, weight, activity, calorie and macro targets.',
            'Your diet plans, plan answers and weekly check-ins.',
            'Your meal log and photo analysis results.',
            'Your recipe history and shopping list.',
            'Your token balance and usage records.',
          ],
          'We don\'t store your photos on our servers in the first place. Once deletion is complete, this data can\'t be recovered.',
        ],
      },
      {
        h: 'Data that may be kept',
        blocks: [
          [
            'Purchase records: records of subscription payments are kept by Apple, Google and RevenueCat under their own rules and legal obligations.',
            'Correspondence about your deletion request: kept for up to 1 year so we can show the request was handled.',
            'Where the law requires it, only the data and for only as long as that obligation requires.',
          ],
        ],
      },
      {
        h: 'Your subscription',
        blocks: [
          'Deleting your account doesn\'t cancel a subscription. To stop being charged, first cancel it in the App Store subscription settings on iPhone, or under Google Play > Subscriptions on Android.',
        ],
      },
      {
        h: 'Deleting only some of your data',
        blocks: [
          `If you want to keep your account but have specific data deleted (for example your meal log or diet plans), email ${PRIVACY_EMAIL} saying which data you want deleted.`,
        ],
      },
    ],
  },
};
