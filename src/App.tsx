/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { WhatIDo } from "./components/sections/WhatIDo";
import { UpcomingEvents } from "./components/sections/UpcomingEvents";
import { Community } from "./components/sections/Community";
import { Recommendations } from "./components/sections/Recommendations";
import { VideoContent } from "./components/sections/VideoContent";
import { Testimonials } from "./components/sections/Testimonials";
import { Collaborations } from "./components/sections/Collaborations";
import { Newsletter } from "./components/sections/Newsletter";
import { Footer } from "./components/layout/Footer";
import { RegisterModal } from "./components/sections/RegisterModal";

export interface EventItem {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: string;
}

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const events: EventItem[] = [
    {
      title: "Saturday Reading Circle",
      date: "Oct 28, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "The Local Roasters, NY",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=600",
      type: "Offline Meetup"
    },
    {
      title: "Monthly Book Club Meetup",
      date: "Nov 05, 2023",
      time: "4:00 PM - 6:00 PM",
      location: "Google Meet",
      image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=600",
      type: "Virtual Event"
    },
    {
      title: "Author Discussion Session",
      date: "Nov 15, 2023",
      time: "7:00 PM - 8:30 PM",
      location: "Central Library, NY",
      image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=600",
      type: "Special Event"
    }
  ];

  const handleOpenRegister = (event?: EventItem) => {
    setSelectedEvent(event || events[0]);
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg-main antialiased selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero onRegisterClick={() => handleOpenRegister(events[0])} />
        <About />
        <WhatIDo />
        <UpcomingEvents events={events} onRegisterClick={handleOpenRegister} />
        <Community />
        <Recommendations />
        <VideoContent />
        <Testimonials />
        <Collaborations onRegisterClick={() => handleOpenRegister(events[0])} />
        <Newsletter />
      </main>
      <Footer />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        selectedEvent={selectedEvent}
        events={events}
      />
    </div>
  );
}

