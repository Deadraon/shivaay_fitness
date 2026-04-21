import { Phone } from 'lucide-react';
import { contactDetails } from '../config/contact';
import WhatsAppIcon from './WhatsAppIcon';

const FloatingContactButtons = () => {
  return (
    <div className="sticky-cta" aria-label="Quick contact actions">
      <a
        href={contactDetails.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title={`Chat on WhatsApp: ${contactDetails.whatsappDisplay}`}
        aria-label={`Chat on WhatsApp: ${contactDetails.whatsappDisplay}`}
      >
        <WhatsAppIcon size={30} />
      </a>
      <a
        href={contactDetails.phoneHref}
        className="call-btn"
        title={`Call ${contactDetails.phoneDisplay}`}
        aria-label={`Call ${contactDetails.phoneDisplay}`}
      >
        <Phone size={30} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
