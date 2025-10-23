import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '6282210119007' // ganti nomor kamu
  const message = 'Halo, saya ingin bertanya mengenai layanan Anda.'
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center z-50">
      <span className="mb-1 text-sm font-medium text-white bg-green-600 px-3 py-1 rounded-full shadow-md">
        Contact Me
      </span>
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}

export default WhatsAppButton
