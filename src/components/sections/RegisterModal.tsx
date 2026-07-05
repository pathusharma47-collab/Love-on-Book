import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, MapPin, Check, Ticket, ArrowRight, User, Mail, Sparkles, BookOpen, Trash2 } from "lucide-react";
import { Button } from "../ui/Button";

interface EventItem {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: string;
}

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEvent: EventItem | null;
  events: EventItem[];
}

interface Registration {
  id: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  userName: string;
  userEmail: string;
  bookSuggestion: string;
  ticketCode: string;
}

export function RegisterModal({ isOpen, onClose, selectedEvent, events }: RegisterModalProps) {
  const [eventName, setEventName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [bookSuggestion, setBookSuggestion] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"register" | "my-tickets">("register");
  const [myRegistrations, setMyRegistrations] = useState<Registration[]>([]);
  const [newTicket, setNewTicket] = useState<Registration | null>(null);

  useEffect(() => {
    if (selectedEvent) {
      setEventName(selectedEvent.title);
    } else if (events.length > 0) {
      setEventName(events[0].title);
    }
  }, [selectedEvent, events]);

  // Load registrations from localStorage
  useEffect(() => {
    const loaded = localStorage.getItem("rupa_sri_registrations");
    if (loaded) {
      try {
        setMyRegistrations(JSON.parse(loaded));
      } catch (e) {
        console.error("Error parsing registrations", e);
      }
    }
  }, [isOpen]);

  const currentEventDetails = events.find(e => e.title === eventName) || selectedEvent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !eventName) return;

    const eventDetails = events.find(ev => ev.title === eventName) || selectedEvent || {
      date: "Upcoming Date",
      time: "TBD",
      location: "TBD",
    };

    const ticketCode = "RS-" + Math.floor(100000 + Math.random() * 900000);
    const registration: Registration = {
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
      eventName,
      eventDate: eventDetails.date,
      eventTime: eventDetails.time,
      eventLocation: eventDetails.location,
      userName,
      userEmail,
      bookSuggestion,
      ticketCode,
    };

    const updated = [registration, ...myRegistrations];
    setMyRegistrations(updated);
    localStorage.setItem("rupa_sri_registrations", JSON.stringify(updated));
    setNewTicket(registration);
    setIsSuccess(true);
  };

  const handleCancelRegistration = (id: string) => {
    const updated = myRegistrations.filter(reg => reg.id !== id);
    setMyRegistrations(updated);
    localStorage.setItem("rupa_sri_registrations", JSON.stringify(updated));
  };

  const handleResetForm = () => {
    setUserName("");
    setUserEmail("");
    setBookSuggestion("");
    setIsSuccess(false);
    setNewTicket(null);
    setActiveTab("my-tickets");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#F8F5F0] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/40 max-h-[90vh] flex flex-col"
        >
          {/* Header Tab Bar */}
          <div className="p-6 pb-0 flex border-b border-gray-100 items-center justify-between">
            <div className="flex gap-4">
              <button
                onClick={() => { setActiveTab("register"); setIsSuccess(false); }}
                className={`pb-4 px-2 text-sm font-semibold tracking-wider transition-all relative ${
                  activeTab === "register" ? "text-primary font-bold" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Register For Event
                {activeTab === "register" && (
                  <motion.div layoutId="modal-tab-line" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </button>
              <button
                onClick={() => { setActiveTab("my-tickets"); setIsSuccess(false); }}
                className={`pb-4 px-2 text-sm font-semibold tracking-wider transition-all relative flex items-center gap-2 ${
                  activeTab === "my-tickets" ? "text-primary font-bold" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                My Tickets
                {myRegistrations.length > 0 && (
                  <span className="bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {myRegistrations.length}
                  </span>
                )}
                {activeTab === "my-tickets" && (
                  <motion.div layoutId="modal-tab-line" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-text-main bg-white/60 hover:bg-white rounded-full transition-colors mb-4 border border-gray-100"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            {activeTab === "register" ? (
              !isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-3xl font-medium text-primary mb-2">Reserve Your Pass</h3>
                    <p className="text-sm text-gray-500">
                      Join Rupa Sri and community members for a soulful reading discussion.
                    </p>
                  </div>

                  {/* Select Event */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-400 tracking-wider block">Choose Event</label>
                    <select
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-text-main focus:outline-none focus:border-accent transition-colors font-medium text-sm"
                    >
                      {events.map((ev, idx) => (
                        <option key={idx} value={ev.title}>
                          {ev.title} ({ev.date})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Event quick details Card */}
                  {currentEventDetails && (
                    <div className="glass-card p-5 flex flex-col sm:flex-row gap-4 items-center border border-white/60">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                        <img
                          src={currentEventDetails.image}
                          alt={currentEventDetails.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h4 className="font-serif font-bold text-primary text-base">{currentEventDetails.title}</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center sm:justify-start text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1"><Calendar size={12} className="text-accent" />{currentEventDetails.date}</span>
                          <span className="flex items-center gap-1"><Clock size={12} className="text-accent" />{currentEventDetails.time}</span>
                          <span className="flex items-center gap-1"><MapPin size={12} className="text-accent" />{currentEventDetails.location}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Input Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-gray-400 tracking-wider block">Full Name</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><User size={16} /></span>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-accent transition-colors text-sm text-text-main"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-gray-400 tracking-wider block">Email Address</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Mail size={16} /></span>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-accent transition-colors text-sm text-text-main"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-400 tracking-wider block">What book are you currently reading? (Optional)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><BookOpen size={16} /></span>
                      <input
                        type="text"
                        placeholder="e.g. The Midnight Library"
                        value={bookSuggestion}
                        onChange={(e) => setBookSuggestion(e.target.value)}
                        className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-accent transition-colors text-sm text-text-main"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-12 gap-2 text-white">
                    Submit Registration & Get Ticket <ArrowRight size={18} />
                  </Button>
                </form>
              ) : (
                /* Success view with downloadable ticket design */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check size={32} />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-primary mb-2">Booking Confirmed!</h3>
                    <p className="text-sm text-gray-500">Your spot is reserved. We've sent details to <span className="font-bold text-primary">{userEmail}</span>.</p>
                  </div>

                  {/* Golden Ticket rendering */}
                  {newTicket && (
                    <div className="relative max-w-md mx-auto my-6 bg-primary text-white rounded-3xl overflow-hidden border border-accent/30 shadow-2xl flex flex-col">
                      {/* Ticket top border style */}
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-accent" />
                      
                      {/* Left and right notch effects */}
                      <div className="absolute top-[60%] -left-3 w-6 h-6 rounded-full bg-[#F8F5F0]" />
                      <div className="absolute top-[60%] -right-3 w-6 h-6 rounded-full bg-[#F8F5F0]" />

                      <div className="p-6 pb-4 border-b border-white/10 border-dashed relative">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Rupa Sri Book Club</span>
                            <h4 className="font-serif text-xl font-bold mt-1 text-white leading-tight">{newTicket.eventName}</h4>
                          </div>
                          <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-lg">
                            <Ticket size={14} className="text-accent" />
                            <span className="text-[10px] font-mono font-bold tracking-wider">{newTicket.ticketCode}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-left mt-6">
                          <div>
                            <span className="text-[9px] uppercase tracking-widest text-white/50 block">Date</span>
                            <span className="text-xs font-semibold">{newTicket.eventDate}</span>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase tracking-widest text-white/50 block">Time</span>
                            <span className="text-xs font-semibold">{newTicket.eventTime}</span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-[9px] uppercase tracking-widest text-white/50 block">Location</span>
                            <span className="text-xs font-semibold block truncate">{newTicket.eventLocation}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-white/5 flex items-center justify-between">
                        <div className="text-left">
                          <span className="text-[9px] uppercase tracking-widest text-white/50 block">Attendee</span>
                          <span className="text-sm font-bold text-accent">{newTicket.userName}</span>
                        </div>
                        
                        {/* Generates placeholder SVG barcode or QR structure for look & feel */}
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-16 h-16 bg-white p-1 rounded-md shrink-0" viewBox="0 0 100 100">
                            <rect x="5" y="5" width="20" height="20" fill="#222" />
                            <rect x="40" y="5" width="20" height="20" fill="#222" />
                            <rect x="75" y="5" width="20" height="20" fill="#222" />
                            <rect x="5" y="40" width="20" height="20" fill="#222" />
                            <rect x="75" y="40" width="20" height="20" fill="#222" />
                            <rect x="5" y="75" width="20" height="20" fill="#222" />
                            <rect x="40" y="75" width="20" height="20" fill="#222" />
                            <rect x="75" y="75" width="20" height="20" fill="#222" />
                            <rect x="40" y="40" width="10" height="10" fill="#222" />
                            <rect x="55" y="55" width="10" height="10" fill="#222" />
                          </svg>
                          <span className="text-[8px] font-mono opacity-60 tracking-widest">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 max-w-md mx-auto">
                    <Button variant="outline" className="flex-1" onClick={handleResetForm}>
                      Go to My Tickets
                    </Button>
                    <Button className="flex-1" onClick={onClose}>
                      Done
                    </Button>
                  </div>
                </motion.div>
              )
            ) : (
              /* My Tickets list view */
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-medium text-primary mb-2">My Bookings</h3>
                  <p className="text-sm text-gray-500">
                    Your active passes for Rupa Sri's meetups and discussions.
                  </p>
                </div>

                {myRegistrations.length === 0 ? (
                  <div className="text-center py-12 px-6 glass-card border border-white/50 rounded-2xl">
                    <Ticket size={48} className="text-accent/40 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">No registrations found.</p>
                    <p className="text-sm text-gray-400 mt-1">Book an event ticket in the "Register For Event" tab above.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {myRegistrations.map((ticket) => (
                      <div
                        key={ticket.id}
                        className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Pass ID: {ticket.ticketCode}</span>
                            <h4 className="font-serif text-xl font-bold text-primary mt-1">{ticket.eventName}</h4>
                            <div className="grid grid-cols-2 gap-4 mt-4 text-xs text-gray-500">
                              <div>
                                <span className="text-[9px] uppercase tracking-wider block font-bold">Date & Time</span>
                                <span className="font-medium">{ticket.eventDate} • {ticket.eventTime}</span>
                              </div>
                              <div>
                                <span className="text-[9px] uppercase tracking-wider block font-bold">Location</span>
                                <span className="font-medium truncate block">{ticket.eventLocation}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-3 justify-between h-full">
                            <button
                              onClick={() => handleCancelRegistration(ticket.id)}
                              className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
                              title="Cancel Ticket"
                            >
                              <Trash2 size={16} />
                            </button>
                            
                            <div className="flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-6">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                              Active Spot
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
