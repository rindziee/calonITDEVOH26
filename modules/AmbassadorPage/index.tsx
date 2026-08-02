"use client";

import { Button } from "@/components/ui/button";
import Countdown from "~/components/elements/Countdown"
import userIcon from "@/assetsforoh/li_user-2.png"
import searchIcon from "@/assetsforoh/li_search.png"
import bookIcon from "@/assetsforoh/li_book.png"
import maskotIcon from "@/assetsforoh/MC 3.png"
import layarIcon from "@/assetsforoh/Projector Final.png"
import foto1 from "@/assetsforoh/Group 9.png"
import foto2 from "@/assetsforoh/Group 11.png"
import foto3 from "@/assetsforoh/Group 3.png"
import foto4 from "@/assetsforoh/Group 8.png"
import foto5 from "@/assetsforoh/Group 5.png"
import tiang1 from "@/assetsforoh/Group 30.png"
import tiang2 from "@/assetsforoh/Group 35.png"
import glow1 from "@/assetsforoh/Group 28.png"
import glow2 from "@/assetsforoh/Group 32.png"

export default function LandingPage() {
  return (
    //kak aku kelanjur bikin level 2 dan 3 jadi aku commit nya dengan cara nge cut level 2 dan 3 ya
    <main className="bg-gradient-to-b from[#040F27] to-secondary-80">
      <img src={glow1.src} className="absolute top-[0px] left-[69px] z-0"/>
      <img src={glow2.src} className="absolute top-[63px] left-[289px] z-1"/>
      <img src={tiang1.src} className="absolute top-[0px] left-[0px] z-2"/>
      <img src={tiang2.src} className="absolute top-[0px] right-[0px] z-3"/>
      <div className="mt-[206px] flex flex-col items-center justify-center">
        <section className="gap-3 text-center text-neutral-100 max-w-[822px]">
          <h1 className="font-league-spartan font-bold text-h1">Open Recruitment Ambassador</h1>
          <h1 className="font-league-spartan font-bold text-h1">Open House Fasilkom UI 2026</h1>
          <h2 className="font-aileron font-bold text-s5 mt-2">
            Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas Ilmu Komputer Universitas Indonesia kepada masyarakat.
          </h2>
        </section>
        <section className="gap-8 text-center text-neutral-100">
          <Countdown targetDate={new Date('3 August 2026 23:59:59')}/>
          <p className="font-aileron font-regular text-b6 mt-8">Pendaftaran dibuka pada 22 Agustus 2026</p>
        </section>
        <section className="mt-8 mb-5">
          <Button variant="tertiary"
            className="bg-tertiary-60 font-aileron font-bold text-s7 text-neutral-100 w-[374px]"
          >
            <img src={userIcon.src}/>
            Register
          </Button>
        </section>
        <section className="flex flex-row gap-[19px] mb-40">
          <Button variant="ghost"
            className="font-aileron font-bold text-s7 text-tertiary-60 w-[177.5px]"
          >
            <img src={searchIcon.src}/>
            Detail
          </Button>
          <Button variant="ghost"
            className="font-aileron font-bold text-s7 text-tertiary-60 w-[177.5px]"
          >
            <img src={bookIcon.src}/>
            Guidebook
          </Button>
        </section>
      </div>
    </main>
  );
}
