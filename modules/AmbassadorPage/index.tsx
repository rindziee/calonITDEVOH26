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
import glow3 from "@/assetsforoh/Group 33.png"
import glow4 from "@/assetsforoh/Group 34.png"
import glow5 from "@/assetsforoh/Group 31.png"
import glow6 from "@/assetsforoh/Group 1000007788.png"
import glow7 from "@/assetsforoh/Group 1000007787.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import maskotIcon2 from "@/assetsforoh/Group 10.png"
import crystal1 from "@/assetsforoh/Group 1000007742.png"
import crystal2 from "@/assetsforoh/Group 1000007743.png"
import ContactPerson from "~/components/elements/ContactPerson";
import maskotIcon3 from "@/assetsforoh/Group 102 crop.png"
import crystalHP1 from "@/assetsforoh/Group 1000007672.png"
import crystalHP2 from "@/assetsforoh/Group 30 (1).png"

export default function LandingPage() {
  return (
    //kak aku kelanjur bikin level 2 dan 3 jadi aku commit nya dengan cara nge cut level 2 dan 3 ya
    //KAK AKU BARU NYADAR YG FIX NYA TUH PAS EDIT LANDING PAGE MOBILE.. TERNYATA BG FIX NYA YG DIKIT ELEMENT2 DI BG NYA MAAF JADI RAME GT KAK (forgive me)
    <main>
      <div className="hidden md:block">
        <div className="bg-gradient-to-b from[#040F27] via-secondary-80 to-primary-70">
          <div className="z-0 pointer-events-none">
            <img src={glow1.src} className="absolute top-[0px] left-[69px]"/>
            <img src={glow2.src} className="absolute top-[63px] left-[289px]"/>
            <img src={glow3.src} className="absolute top-[853px] left-[0px]"/>
            <img src={glow4.src} className="absolute top-[957px] right-[0px]"/>
            <img src={glow5.src} className="absolute top-[356px] left-[0px]"/>
            <img src={glow6.src} className="absolute top-[1611px] left-[720px]"/>
            <img src={glow7.src} className="absolute top-[1385px] left-[0px]"/>
            <img src={tiang1.src} className="absolute top-[0px] left-[0px]"/>
            <img src={tiang2.src} className="absolute top-[0px] right-[0px]"/>
            <img src={crystal1.src} className="absolute top-[2942px] right-[0px]"/>
            <img src={crystal2.src} className="absolute top-[2948px] left-[0px]"/>
          </div>
          <div className="mt-[206px] flex flex-col items-center justify-center z-10">
            <section className="gap-3 text-center text-neutral-100 max-w-[822px] mx-auto">
              <h1 className="font-league-spartan font-bold text-h1">Open Recruitment Ambassador</h1>
              <h1 className="font-league-spartan font-bold text-h1">Open House Fasilkom UI 2026</h1>
              <h2 className="font-aileron font-bold text-s5 mt-2">
                Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas Ilmu Komputer Universitas Indonesia kepada masyarakat.
              </h2>
            </section>
            <section className="gap-8 text-center text-neutral-100">
              <Countdown targetDate={new Date('21 August 2026 23:59:59')}/>
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
          <div className="flex flex-col items-center justify-center max-w-[1273px] mx-auto relative z-10">
            <section className="gap-4 text-center text-neutral-100 mb-15">
              <h1 className="font-league-spartan font-bold text-h1">Apa itu Ambassador</h1>
              <h1 className="font-league-spartan font-bold text-h1">Open House Fasilkom UI?</h1>
            </section>
            <section className="flex flex-row mb-[200px]">
              <img src={layarIcon.src} className="mr-[13.6px]"/>
              <img src={maskotIcon.src} className="mt-[100.95px] h-[333.5px] flex-shrink-0"/>
            </section>
          </div>
        </div>
        <div className="bg-gradient-to-b from-primary-70 from-25% via-secondary-30 via-90% to-secondary-20">
          <div className="relative flex flex-col max-w-[1221.2px] items-center justify-center mx-auto">
              <h1 className="font-league-spartan text-center text-neutral-100 font-bold text-h1 mb-[60px]">Ambassador 2025’s Archive</h1>
          </div>
          <div className="relative w-[1221.2px] h-[800px] mx-auto">
            <img src={foto1.src} className="absolute top-[380px] left-[537px] z-1"/>
            <img src={foto2.src} className="absolute top-[50.8px] left-[746.6px] z-2"/>
            <img src={foto3.src} className="absolute top-[0px] left-[407px] z-3"/>
            <img src={foto4.src} className="absolute top-[132px] left-[0px] z-4"/>
            <img src={foto5.src} className="absolute top-[384px] left-[165px] z-5"/>
          </div>
          <div className="mt-[305.1px] flex flex-col items-center justify-center text-center text-neutral-100 mx-auto">
            <h1 className="font-league-spartan font-bold text-h1 mb-[24px]">Need More Help?</h1>
            <h2 className="font-league-spartan font-bold text-s4 mb-[60px]"> “Temukan berbagai pertanyaan serta jawaban seputar ambassador di sini!”</h2>
          </div>
          <div className="max-w-[1204px] flex flex-row">
            <section className="w-[737px] ml-[118px]">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Apa aja benefit daftar Ambassador?</AccordionTrigger>
                  <AccordionContent>Sebagai Ambassador, kamu akan terlibat langsung dalam promosi OH Fasilkom, berkesempatan membangun relasi dengan teman-teman dari seluruh Indonesia, mendapatkan akses ke program eksklusif seperti webinar dan mentoring, serta memperluas wawasan seputar teknologi, bisnis digital, dan masa depan industri IT.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Bagaimana jika aku memiliki kesibukan lain dan ingin mendaftar?</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Berapa lama program Ambassador ini berjalan?</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Harus bisa ngedit video gak kak??</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Aku dari luar Jabodetabek, bisa ikut juga gak?</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Apakah program ini berbayar?</AccordionTrigger>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Harus terkenal ya kak?</AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </section>
            <img src={maskotIcon2.src} className="ml-[103px]"/>
          </div>
          <div className="relative mt-[201px] flex flex-col items-center justify-center text-center text-neutral-100 mx-auto">
            <section>
              <h1 className="text-h1 font-bold font-league-spartan mb-[24px]">Butuh bantuan atau punya pertanyaan lain?</h1>
              <h2 className="text-s4 font-bold font-aileron mb-[64px]">Kamu dapat hubungi kontak di bawah ini untuk informasi lebih lnajut ya!</h2>           
            </section>
            <section>
              <img src={maskotIcon3.src}/>
              <div className="mb-40">
                <ContactPerson
                  firstContactUrl="https://wa.me/6289504139150"
                  secondContactUrl="https://wa.me/6289504139150"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <section>
          <img src={crystalHP1.src} className="absolute top-[0px] right-[0px]"/>
          <img src={crystalHP2.src} className="absolute top-[0px] left-[0px]"/>
        </section>
        <div className="flex flex-col justify-center items-center text-center text-neutral-100 bg-gradient-to-b from[#040F27] via-secondary-80 to-primary-70">
          <section className="max-w-[357.26px] mt-[190px]">
            <section className="font-league-spartan font-bold">
              <h1 className="text-h4">Open Recruitment</h1>
              <h1 className="text-h4">Ambassador</h1>
              <h2 className="text-h5 mb-8">Open House FASILKOM UI 2026</h2>
            </section>
            <section>
              <Countdown targetDate={new Date('21 August 2026 23:59:59')}/>
              <p className="font-aileron font-regular text-b9 mb-6 mt-8">Pendaftaran dibuka pada 22 Agustus 2026</p>
              <Button variant="tertiary"
                className="bg-tertiary-60 font-aileron font-bold text-s9 text-neutral-100 w-[249px] mb-3"
              >
                <img src={userIcon.src}/>
                Register
              </Button>
            </section>
            <section className="flex flex-row items-center justify-center gap-3 mb-[253.58px] w-[249px] mx-auto">
              <Button variant="ghost"
                className="font-aileron font-bold text-s9 text-tertiary-60"
              >
                <img src={searchIcon.src}/>
                Detail
              </Button>
              <Button variant="ghost"
                className="font-aileron font-bold text-s9 text-tertiary-60"
              >
                <img src={bookIcon.src}/>
                Guidebook
              </Button>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
