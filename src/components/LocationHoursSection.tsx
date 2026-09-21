import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Navigation, AlertCircle, CheckCircle2, Calendar } from 'lucide-react';
import { BUSINESS_INFO, TIMINGS_SCHEDULE } from '../data/restaurantData';

export default function LocationHoursSection() {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [currentStatusText, setCurrentStatusText] = useState<string>('Open Now for Service');

  useEffect(() => {
    // Check real-time opening status in IST timezone
    const checkOpenStatus = () => {
      const now = new Date();
      // IST is UTC + 5:30
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);

      const day = istDate.getDay(); // 0 = Sun, 3 = Wed
      const hour = istDate.getHours();
      const minute = istDate.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      // Wednesday after 12:00 PM is holiday
      if (day === 3 && timeInMinutes >= 720) {
        setIsOpenNow(false);
        setCurrentStatusText('Closed (Wednesday Weekly Holiday after 12:00 PM)');
        return;
      }

      // Slot 1: 7:30 AM (450m) to 12:00 PM (720m)
      const isBreakfast = timeInMinutes >= 450 && timeInMinutes <= 720;
      // Slot 2: 12:30 PM (750m) to 4:00 PM (960m)
      const isLunch = timeInMinutes >= 750 && timeInMinutes <= 960;
      // Slot 3: 7:00 PM (1140m) to 10:00 PM (1320m)
      const isDinner = timeInMinutes >= 1140 && timeInMinutes <= 1320;

      if (isBreakfast) {
        setIsOpenNow(true);
        setCurrentStatusText('Open Now — Morning Breakfast Hours (7:30 AM – 12:00 PM)');
      } else if (isLunch) {
        setIsOpenNow(true);
        setCurrentStatusText('Open Now — Lunch & Meals Service (12:30 PM – 4:00 PM)');
      } else if (isDinner) {
        setIsOpenNow(true);
        setCurrentStatusText('Open Now — Dinner Hours (7:00 PM – 10:00 PM)');
      } else {
        setIsOpenNow(false);
        if (timeInMinutes < 450) {
          setCurrentStatusText('Currently Closed — Opens for Breakfast at 7:30 AM');
        } else if (timeInMinutes > 720 && timeInMinutes < 750) {
          setCurrentStatusText('Kitchen Intermission — Lunch Service starts at 12:30 PM');
        } else if (timeInMinutes > 960 && timeInMinutes < 1140) {
          setCurrentStatusText('Afternoon Break — Dinner Service opens at 7:00 PM');
        } else {
          setCurrentStatusText('Closed for the Day — Reopens tomorrow at 7:30 AM');
        }
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="visitus" className="py-16 sm:py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            LOCATION & TIMINGS
          </span>
          <h2 className="font-serif-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 mt-3 tracking-tight">
            COME VISIT US
          </h2>
          <p className="text-stone-600 text-base mt-2">
            Centrally located in New Paccha Peth, Solapur. Ample street access and warm hospitality await you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Address & Hours Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Live Operational Status Pill */}
            <div
              className={`p-4 rounded-2xl border flex items-center gap-3 ${
                isOpenNow
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-amber-50 border-amber-300 text-amber-900'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full flex-shrink-0 ${
                  isOpenNow ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'
                }`}
              ></div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider block">
                  {isOpenNow ? 'Restaurant Open' : 'Kitchen Schedule'}
                </span>
                <span className="text-sm font-semibold leading-tight">
                  {currentStatusText}
                </span>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-stone-200">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-150">
                <Clock className="w-5 h-5 text-amber-800" />
                <h3 className="font-serif-heading font-extrabold text-lg text-stone-900">
                  Opening Hours
                </h3>
              </div>

              <div className="space-y-3">
                <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-150 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-950 block">BREAKFAST</span>
                    <span className="text-[11px] text-stone-500">Idli, Vada, Dosa, Upma & Coffee</span>
                  </div>
                  <span className="text-xs font-black text-amber-900">7:30 AM – 12:00 PM</span>
                </div>

                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">LUNCH</span>
                    <span className="text-[11px] text-stone-500">Meals, Andhra Thali & Rice Specialties</span>
                  </div>
                  <span className="text-xs font-black text-stone-800">12:30 PM – 4:00 PM</span>
                </div>

                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">DINNER</span>
                    <span className="text-[11px] text-stone-500">Hot Dosas, Light Tiffin & Dinner Items</span>
                  </div>
                  <span className="text-xs font-black text-stone-800">7:00 PM – 10:00 PM</span>
                </div>

                <div className="p-2.5 rounded-lg bg-red-50/70 border border-red-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-950 block">WEDNESDAY</span>
                    <span className="text-[11px] text-red-700">Weekly Holiday</span>
                  </div>
                  <span className="text-xs font-black text-red-800">After 12:00 PM Closed</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-500">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Timings may change on special occasions or festivals. Please call before visiting if needed.</span>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-stone-200">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-150">
                <MapPin className="w-5 h-5 text-amber-800" />
                <h3 className="font-serif-heading font-extrabold text-lg text-stone-900">
                  Address & Landmarks
                </h3>
              </div>

              <p className="text-sm font-semibold text-stone-800 leading-relaxed">
                {BUSINESS_INFO.address.fullFormatted}
              </p>

              <div className="mt-4 pt-4 border-t border-stone-150 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-get-directions-btn"
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  id="location-phone-btn"
                  className="py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-stone-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-800" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200">
              {/* Map Header */}
              <div className="p-4 bg-stone-900 text-white flex items-center justify-between">
                <div>
                  <h4 className="font-serif-heading font-bold text-base text-white">
                    Panchami Kitchen Idli Street Map
                  </h4>
                  <p className="text-xs text-stone-300">
                    New Paccha Peth, Sakhar Peth, Solapur, Maharashtra 413006
                  </p>
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open in App</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map iframe */}
              <div className="relative h-[420px] sm:h-[480px] w-full bg-stone-200">
                <iframe
                  title="Panchami Kitchen Idli Street Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.442999516629!2d75.9220556!3d17.6766667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db06c9a3b66d%3A0xb35a0928a6f30a91!2sPanchmi%20Kitchen%20Idli%20Street!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Quick Info Bar below map */}
              <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
                <span className="font-semibold text-stone-800">
                  Landmark: Near Shrikrishna Mangal Karyalaya & MIDC Road
                </span>
                <span className="text-amber-800 font-bold">
                  Curbside pickup & takeaway pre-orders welcome
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
