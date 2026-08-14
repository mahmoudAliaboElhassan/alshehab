// src/utils/pixel.js
// Helper لإرسال TikTok Pixel events

export function trackContact(method = "whatsapp") {
  if (typeof window !== "undefined" && window.ttq) {
    window.ttq.track("Contact", {
      content_name: "تواصل مع الشهاب للمكيفات",
      content_category: "contact",
      description: method, // 'whatsapp' أو 'call'
    })
  }
  console.log("tracked")
}
