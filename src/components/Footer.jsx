import React, { memo, Suspense } from "react";
import {
  arrowbl,
  arrowwh,
  instagram,
  instagramwh,
  linkedin,
  linkedinwh,
  tffooter,
  tffootersm,
} from "../assets";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { GOOGLE_CALENDAR_URL } from "../constants";

const ContactDialog = memo(() => (
  <AlertDialog>
    <AlertDialogTrigger>
      <div className="flex flex-row gap-1 justify-center items-center">
        <div className="text-[#1D1D1F] dark:text-black text-center font-spacemono text-[0.875rem] not-italic font-bold tracking-[0.35px] uppercase transition-colors">
          Contact
        </div>
        <img src={arrowbl} className="w-auto h-2 dark:hidden" alt="arrow" />
        <img src={arrowwh} className="w-auto h-2 hidden dark:block" alt="arrow" />
      </div>
    </AlertDialogTrigger>
    <AlertDialogContent className="w-auto max-w-[90%] sm:max-w-max opacity-100 bg-[#FFFFFF] dark:bg-neutral-900 border border-[#E6E6E3] dark:border-neutral-800 rounded-3xl">
      <AlertDialogHeader>
        <AlertDialogDescription>
          <div className="flex flex-col items-center gap-4 self-stretch sm:p-4">
            <div className="self-stretch text-[#1D1D1F] dark:text-white font-spacemono text-[2rem] not-italic font-medium leading-[-0.02rem]">
              Contact
            </div>
            <div className="flex flex-col items-start gap-[6px] self-stretch">
              <div className="self-stretch text-[#1D1D1F] dark:text-neutral-200 font-spacemono text-[1rem] sm:text-[1.5rem] not-italic font-light leading-[-0.015rem]">
                Work inquires:{" "}
                <span className="font-bold text-wrap">
                  technicalcouncil@pragyan.org
                </span>
              </div>
              <div className="self-stretch text-[#1D1D1F] dark:text-neutral-100 font-spacemono text-[0.825rem] sm:text-[1.125rem] not-italic font-bold leading-normal tracking-[-0.011rem]">
                Technical Council of NIT Trichy
              </div>
              <div className="self-stretch text-[#1D1D1F] dark:text-neutral-300 font-spacegrotesk text-[0.825rem] sm:text-[1.125rem] not-italic font-bold leading-normal tracking-[-0.011rem]">
                Vaibhav <span className="font-light">9141050129</span>
                <br />
                Ibrahim <span className="font-light">9384848353</span>
                <br />
                Hrishidev <span className="font-light">9446048442</span>
                <br />
              </div>
              <div className="sm:hidden flex justify-center items-center w-full">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex w-fit justify-center items-start gap-3">
                    <a
                      href="https://www.instagram.com/tc_nitt/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={instagram} className="max-w-none w-fit" alt="Instagram" />
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://in.linkedin.com/company/technical-council-nit-trichy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} className="max-w-none w-fit" alt="LinkedIn" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>
          <div className="flex flex-row gap-1 justify-center items-center border-solid border-[#E6E6E3] dark:border-white/20 border-2 p-2 rounded-3xl px-5 footer-links py-[6px] sm:px-3">
            <div className="text-[#1D1D1F] dark:text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
              Continue
            </div>
          </div>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
));

const FooterLink = memo(({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="flex px-[0.5rem] py-[0.63rem] sm:py-[6px] sm:px-3 justify-center items-center gap-[0.625rem] rounded-full border-[0.5px] sm:border border-solid border-[#E6E6E3] dark:border-white/20 footer-links hover:underline decoration-[#1D1D1F] dark:decoration-white leading-none my-0 transition-colors">
      <div className="flex flex-row gap-1 justify-center items-center">
        <div className="text-[#1D1D1F] dark:text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold sm:leading-5 tracking-[0.35px] uppercase">
          {text}
        </div>
        <img src={arrowbl} className="w-auto h-2 sm:max-w-none sm:w-fit dark:hidden" alt="arrow" />
        <img src={arrowwh} className="w-auto h-2 sm:max-w-none sm:w-fit hidden dark:block" alt="arrow" />
      </div>
    </div>
  </a>
));

const FooterMobile = memo(() => (
  <div className="block md:hidden mx-auto bg-[#FFFFFF] dark:bg-black max-w-full transition-colors duration-300">
    <div className="flex flex-col justify-center items-start flex-shrink-0 border-l border-r border-b border-l-edge border-r-edge border-b-edge w-[92%] mx-auto mb-4 py-4 px-2 gap-4">
      <div className="flex justify-center items-center self-stretch py-1 select-none pointer-events-none">
        <img src={tffootersm} className="dark:invert-0 invert transition-all duration-300 max-w-full h-auto" alt="Footer Logo" />
      </div>
      <div className="flex py-0 px-2 flex-col justify-center gap-4 self-stretch">
        <div className="flex w-full justify-between items-center gap-2">
          <div className="w-full h-auto flex flex-wrap justify-between items-center gap-2">
            <div className="inline-flex px-[0.5rem] py-[0.63rem] justify-center items-center gap-[0.625rem] rounded-full border-[0.5px] border-solid border-[#E6E6E3] dark:border-white/20 footer-links hover:underline decoration-[#1D1D1F] dark:decoration-white leading-none my-0">
              <ContactDialog />
            </div>
            <FooterLink
              href="https://maps.app.goo.gl/oqqeVqML8Fb2Pdr57"
              text="Locate Us"
            />
            <FooterLink
              href="https://drive.google.com/file/d/1kZ9JWKb0OFPmNv4avGa1OEcq8W6-FxjJ/view"
              text="Archive"
            />
            <FooterLink
              href={GOOGLE_CALENDAR_URL}
              text="Add to Calendar"
            />
          </div>
        </div>
        <div className="flex justify-center items-start pt-2">
          <div className="text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono text-[0.75rem] not-italic font-normal leading-normal tracking-[-0.0075rem] uppercase text-center transition-colors">
            © 2026 TRANSFINITTE. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
));

const FooterDesktop = memo(() => (
  <div className="hidden md:block mx-auto bg-[#FFFFFF] dark:bg-black max-w-[95%] xl:max-w-[93.194%] transition-colors duration-300">
    <div className="flex h-auto py-8 lg:py-12 px-0 flex-col items-start gap-8 lg:gap-10 border-r border-l border-r-edge border-l-edge bg-[#FFFFFF] dark:bg-black transition-colors">
      <div className="flex justify-center items-center self-stretch tf-footer select-none pointer-events-none px-4">
        <img src={tffooter} className="dark:invert-0 invert transition-all duration-300 max-w-5xl lg:max-w-6xl w-full h-auto" alt="Footer Logo" />
      </div>
      <div className="w-full flex flex-col lg:flex-row py-2 px-6 lg:px-[46px] justify-between items-center gap-4 self-stretch">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <div className="text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono text-[0.875rem] lg:text-[1rem] not-italic font-normal leading-normal tracking-[-0.01rem] uppercase transition-colors">
            © 2026 TRANSFINITTE. All Rights Reserved.
          </div>
          <div className="flex w-fit pb-1 justify-center items-start gap-3">
            <div>
              <a
                href="https://www.instagram.com/tc_nitt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramwh} className="max-w-none w-fit dark:invert-0 invert transition-all duration-300" alt="Instagram" />
              </a>
            </div>
            <div>
              <a
                href="https://in.linkedin.com/company/technical-council-nit-trichy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinwh} className="max-w-none w-fit dark:invert-0 invert transition-all duration-300" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
          <div className="flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-full border border-solid border-[#E6E6E3] dark:border-white/20 footer-links hover:underline decoration-[#1D1D1F] dark:decoration-white">
            <ContactDialog />
          </div>
          <FooterLink
            href="https://maps.app.goo.gl/oqqeVqML8Fb2Pdr57"
            text="Locate Us"
          />
          <FooterLink
            href="https://drive.google.com/file/d/1jjjwgRhEHz8pLegoh0GjU5KTq7Ni5zAs/view"
            text="Archive"
          />
          <FooterLink
            href={GOOGLE_CALENDAR_URL}
            text="Add to Calendar"
          />
        </div>
      </div>
    </div>
  </div>
));

const Footer = () => {
  return (
    <div className="max-w-full select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <FooterMobile />
        <FooterDesktop />
      </Suspense>
    </div>
  );
};

export default Footer;
