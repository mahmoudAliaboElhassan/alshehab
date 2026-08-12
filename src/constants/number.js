const PHONE_NUMBER = "9660542218340" // ← حط رقمك هنا
const WHATSAPP_NUMBER = "9660542218340" // ← حط رقمك هنا
export const WA_MESSAGE = "السلام عليكم، أبي أعرف كم تسوى مكيفاتي."

export const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`
export const callLink = `tel:+${PHONE_NUMBER}`
