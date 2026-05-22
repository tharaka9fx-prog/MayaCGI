import wa from "../assets/wa.png";
import fb from "../assets/fb.png";
import yt from "../assets/yt.png";

const socialLinks = [
  {
    icon: wa,
    label: "Whatsapp",
    href: "https://wa.me/your-number",
    alt: "WhatsApp",
  },
  {
    icon: fb,
    label: "Facebook",
    href: "https://facebook.com/your-page",
    alt: "Facebook",
  },
  {
    icon: yt,
    label: "YouTube",
    href: "https://youtube.com/your-channel",
    alt: "YouTube",
  },
];

export default function Banner() {
  return (
    <div className="w-full rounded-2xl border border-[#2a1a1f] bg-gradient-to-br from-[#150508] via-[#1e0a10] to-[#111] px-6 sm:px-10 py-7 sm:py-8 flex flex-col items-center gap-5 shadow-2xl shadow-[#FF0555]/5">
      {/* Logo + Tagline */}
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-white font-extrabold tracking-[0.3em] text-xl sm:text-2xl uppercase">
          MAYACGI
        </span>
        <span className="text-gray-400 tracking-[0.18em] text-xs sm:text-sm font-light uppercase">
          Transforming Moments Into Masterpieces
        </span>
        {/* Accent line */}
        <div className="mt-2 w-16 h-0.5 rounded-full bg-[#FF0555]" />
      </div>

      {/* Social Buttons */}
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {socialLinks.map(({ icon, label, href, alt }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#3a1a25] bg-[#1a0a10] hover:bg-[#FF0555]/10 hover:border-[#FF0555]/60 text-white text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#FF0555]/10"
          >
            <img src={icon} alt={alt} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
            <span className="tracking-wide font-medium">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
