"use client";
import localFont from "next/font/local";
import React, { useState } from 'react';
import Select from 'react-select';
import options from './options.json';
////////////////

///////////////////////
const Hsciifontpicker= () => {
///////////////////
const binarywenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/binarywenglosoftw8asc.woff2", display: "swap", });
const heksenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/heksenglosoftw8asc.woff2", display: "swap", });
//////~~~~~~~~~~~~~~
////////////////////////////// { englosoftw8 bilo <<<<<<<<<<<<<<<<<<<<
///////////////// nonindik englosoftw8asc bilo
const inglishenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/inglishenglosoftw8asc.woff2", display: "swap", });
const koreanenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/koreanenglosoftw8asc.woff2", display: "swap", });
const russianenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/russianenglosoftw8asc.woff2", display: "swap", });
///////////////// indik englosoftw8asc bilo
const hindienglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/hindienglosoftw8asc.woff2", display: "swap", });
const banglaenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/banglaenglosoftw8asc.woff2", display: "swap", });
const gurmukhienglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/gurmukhienglosoftw8asc.woff2", display: "swap", });
const guzratienglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/guzratienglosoftw8asc.woff2", display: "swap", });
const oriyaenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/oriyaenglosoftw8asc.woff2", display: "swap", });
const tamilenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/tamilenglosoftw8asc.woff2", display: "swap", });
const teluguenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/teluguenglosoftw8asc.woff2", display: "swap", });
const kannadaenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/kannadaenglosoftw8asc.woff2", display: "swap", });
const malayalamenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/malayalamenglosoftw8asc.woff2", display: "swap", });
const sinhalaenglosoftw8asc = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8asc/sinhalaenglosoftw8asc.woff2", display: "swap", });
//////////////////////////////englosoftw8 bilo
///////////////// nonindik englosoftw8mono bilo
const inglishenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/inglishenglosoftw8mono.woff2", display: "swap", });
const koreanenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/koreanenglosoftw8mono.woff2", display: "swap", });
const russianenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/russianenglosoftw8mono.woff2", display: "swap", });
///////////////// indik englosoftw8mono bilo
const hindienglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/hindienglosoftw8mono.woff2", display: "swap", });
const banglaenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/banglaenglosoftw8mono.woff2", display: "swap", });
const gurmukhienglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/gurmukhienglosoftw8mono.woff2", display: "swap", });
const guzratienglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/guzratienglosoftw8mono.woff2", display: "swap", });
const oriyaenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/oriyaenglosoftw8mono.woff2", display: "swap", });
const tamilenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/tamilenglosoftw8mono.woff2", display: "swap", });
const teluguenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/teluguenglosoftw8mono.woff2", display: "swap", });
const kannadaenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/kannadaenglosoftw8mono.woff2", display: "swap", });
const malayalamenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/malayalamenglosoftw8mono.woff2", display: "swap", });
const sinhalaenglosoftw8mono = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8mono/sinhalaenglosoftw8mono.woff2", display: "swap", });
///////////////// nonindik englosoftw8utf bilo
const inglishenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/inglishenglosoftw8utf.woff2", display: "swap", });
const koreanenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/koreanenglosoftw8utf.woff2", display: "swap", });
const russianenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/russianenglosoftw8utf.woff2", display: "swap", });
///////////////// indik englosoftw8utf bilo
const hindienglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/hindienglosoftw8utf.woff2", display: "swap", });
const banglaenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/banglaenglosoftw8utf.woff2", display: "swap", });
const gurmukhienglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/gurmukhienglosoftw8utf.woff2", display: "swap", });
const guzratienglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/guzratienglosoftw8utf.woff2", display: "swap", });
const oriyaenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/oriyaenglosoftw8utf.woff2", display: "swap", });
const tamilenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/tamilenglosoftw8utf.woff2", display: "swap", });
const teluguenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/teluguenglosoftw8utf.woff2", display: "swap", });
const kannadaenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/kannadaenglosoftw8utf.woff2", display: "swap", });
const malayalamenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/malayalamenglosoftw8utf.woff2", display: "swap", });
const sinhalaenglosoftw8utf = localFont({ src: "./fonts/hscii/englosoftw8/englosoftw8utf/sinhalaenglosoftw8utf.woff2", display: "swap", });
//////////////////////////////englosoftw8 up }>>>>>>>>>>>>>>>>>>>>
//////~~~~~~~~~~~~~~
////////////////////////////// { englodotw8 bilo <<<<<<<<<<<<<<<<<<<<
///////////////// nonindik englodotw8asc bilo
const inglishenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/inglishenglodotw8asc.woff2", display: "swap", });
const koreanenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/koreanenglodotw8asc.woff2", display: "swap", });
const russianenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/russianenglodotw8asc.woff2", display: "swap", });
///////////////// indik englodotw8asc bilo
const hindienglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/hindienglodotw8asc.woff2", display: "swap", });
const banglaenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/banglaenglodotw8asc.woff2", display: "swap", });
const gurmukhienglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/gurmukhienglodotw8asc.woff2", display: "swap", });
const guzratienglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/guzratienglodotw8asc.woff2", display: "swap", });
const oriyaenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/oriyaenglodotw8asc.woff2", display: "swap", });
const tamilenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/tamilenglodotw8asc.woff2", display: "swap", });
const teluguenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/teluguenglodotw8asc.woff2", display: "swap", });
const kannadaenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/kannadaenglodotw8asc.woff2", display: "swap", });
const malayalamenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/malayalamenglodotw8asc.woff2", display: "swap", });
const sinhalaenglodotw8asc = localFont({ src: "./fonts/hscii/englodotw8/englodotw8asc/sinhalaenglodotw8asc.woff2", display: "swap", });
//////////////////////////////englodotw8 bilo
///////////////// nonindik englodotw8mono bilo
const inglishenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/inglishenglodotw8mono.woff2", display: "swap", });
const koreanenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/koreanenglodotw8mono.woff2", display: "swap", });
const russianenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/russianenglodotw8mono.woff2", display: "swap", });
///////////////// indik englodotw8mono bilo
const hindienglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/hindienglodotw8mono.woff2", display: "swap", });
const banglaenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/banglaenglodotw8mono.woff2", display: "swap", });
const gurmukhienglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/gurmukhienglodotw8mono.woff2", display: "swap", });
const guzratienglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/guzratienglodotw8mono.woff2", display: "swap", });
const oriyaenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/oriyaenglodotw8mono.woff2", display: "swap", });
const tamilenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/tamilenglodotw8mono.woff2", display: "swap", });
const teluguenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/teluguenglodotw8mono.woff2", display: "swap", });
const kannadaenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/kannadaenglodotw8mono.woff2", display: "swap", });
const malayalamenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/malayalamenglodotw8mono.woff2", display: "swap", });
const sinhalaenglodotw8mono = localFont({ src: "./fonts/hscii/englodotw8/englodotw8mono/sinhalaenglodotw8mono.woff2", display: "swap", });
///////////////// nonindik englodotw8utf bilo
const inglishenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/inglishenglodotw8utf.woff2", display: "swap", });
const koreanenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/koreanenglodotw8utf.woff2", display: "swap", });
const russianenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/russianenglodotw8utf.woff2", display: "swap", });
///////////////// indik englodotw8utf bilo
const hindienglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/hindienglodotw8utf.woff2", display: "swap", });
const banglaenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/banglaenglodotw8utf.woff2", display: "swap", });
const gurmukhienglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/gurmukhienglodotw8utf.woff2", display: "swap", });
const guzratienglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/guzratienglodotw8utf.woff2", display: "swap", });
const oriyaenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/oriyaenglodotw8utf.woff2", display: "swap", });
const tamilenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/tamilenglodotw8utf.woff2", display: "swap", });
const teluguenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/teluguenglodotw8utf.woff2", display: "swap", });
const kannadaenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/kannadaenglodotw8utf.woff2", display: "swap", });
const malayalamenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/malayalamenglodotw8utf.woff2", display: "swap", });
const sinhalaenglodotw8utf = localFont({ src: "./fonts/hscii/englodotw8/englodotw8utf/sinhalaenglodotw8utf.woff2", display: "swap", });
//////////////////////////////englodotw8 up }>>>>>>>>>>>>>>>>>>>>
////////////////////////////// { onlyw8 bilo <<<<<<<<<<<<<<<<<<<<
///////////////// nonindik onlyw8asc bilo
const inglishonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/inglishonlyw8asc.woff2", display: "swap", });
const koreanonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/koreanonlyw8asc.woff2", display: "swap", });
const russianonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/russianonlyw8asc.woff2", display: "swap", });
///////////////// indik onlyw8asc bilo
const hindionlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/hindionlyw8asc.woff2", display: "swap", });
const banglaonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/banglaonlyw8asc.woff2", display: "swap", });
const gurmukhionlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/gurmukhionlyw8asc.woff2", display: "swap", });
const guzrationlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/guzrationlyw8asc.woff2", display: "swap", });
const oriyaonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/oriyaonlyw8asc.woff2", display: "swap", });
const tamilonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/tamilonlyw8asc.woff2", display: "swap", });
const teluguonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/teluguonlyw8asc.woff2", display: "swap", });
const kannadaonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/kannadaonlyw8asc.woff2", display: "swap", });
const malayalamonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/malayalamonlyw8asc.woff2", display: "swap", });
const sinhalaonlyw8asc = localFont({ src: "./fonts/hscii/onlyw8/onlyw8asc/sinhalaonlyw8asc.woff2", display: "swap", });
//////////////////////////////onlyw8 bilo
///////////////// nonindik onlyw8mono bilo
const inglishonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/inglishonlyw8mono.woff2", display: "swap", });
const koreanonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/koreanonlyw8mono.woff2", display: "swap", });
const russianonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/russianonlyw8mono.woff2", display: "swap", });
///////////////// indik onlyw8mono bilo
const hindionlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/hindionlyw8mono.woff2", display: "swap", });
const banglaonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/banglaonlyw8mono.woff2", display: "swap", });
const gurmukhionlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/gurmukhionlyw8mono.woff2", display: "swap", });
const guzrationlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/guzrationlyw8mono.woff2", display: "swap", });
const oriyaonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/oriyaonlyw8mono.woff2", display: "swap", });
const tamilonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/tamilonlyw8mono.woff2", display: "swap", });
const teluguonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/teluguonlyw8mono.woff2", display: "swap", });
const kannadaonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/kannadaonlyw8mono.woff2", display: "swap", });
const malayalamonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/malayalamonlyw8mono.woff2", display: "swap", });
const sinhalaonlyw8mono = localFont({ src: "./fonts/hscii/onlyw8/onlyw8mono/sinhalaonlyw8mono.woff2", display: "swap", });
///////////////// nonindik onlyw8utf bilo
const inglishonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/inglishonlyw8utf.woff2", display: "swap", });
const koreanonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/koreanonlyw8utf.woff2", display: "swap", });
const russianonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/russianonlyw8utf.woff2", display: "swap", });
///////////////// indik onlyw8utf bilo
const hindionlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/hindionlyw8utf.woff2", display: "swap", });
const banglaonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/banglaonlyw8utf.woff2", display: "swap", });
const gurmukhionlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/gurmukhionlyw8utf.woff2", display: "swap", });
const guzrationlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/guzrationlyw8utf.woff2", display: "swap", });
const oriyaonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/oriyaonlyw8utf.woff2", display: "swap", });
const tamilonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/tamilonlyw8utf.woff2", display: "swap", });
const teluguonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/teluguonlyw8utf.woff2", display: "swap", });
const kannadaonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/kannadaonlyw8utf.woff2", display: "swap", });
const malayalamonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/malayalamonlyw8utf.woff2", display: "swap", });
const sinhalaonlyw8utf = localFont({ src: "./fonts/hscii/onlyw8/onlyw8utf/sinhalaonlyw8utf.woff2", display: "swap", });
///////////////////
const hsciifont_classnames = {
      binarywenglosoftw8asc: binarywenglosoftw8asc.className,
      heksenglosoftw8asc: heksenglosoftw8asc.className,
//////~~~~~~~~~~~~~~englosoftw8 bilo
////////////////////////////// { englosoftw8 asc bilo <<<<<<<<<<<<<<<<<<<<
      koreanenglosoftw8asc: koreanenglosoftw8asc.className,
      russianenglosoftw8asc: russianenglosoftw8asc.className,
      inglishenglosoftw8asc: inglishenglosoftw8asc.className,
      
      hindienglosoftw8asc: hindienglosoftw8asc.className,
      banglaenglosoftw8asc: banglaenglosoftw8asc.className,
      oriyaenglosoftw8asc: oriyaenglosoftw8asc.className,
      gurmukhienglosoftw8asc: gurmukhienglosoftw8asc.className,
      guzratienglosoftw8asc: guzratienglosoftw8asc.className,
      
      sinhalaenglosoftw8asc: sinhalaenglosoftw8asc.className,
      tamilenglosoftw8asc: tamilenglosoftw8asc.className,
      kannadaenglosoftw8asc: kannadaenglosoftw8asc.className,
      malayalamenglosoftw8asc: malayalamenglosoftw8asc.className,
      teluguenglosoftw8asc: teluguenglosoftw8asc.className,
////////////////////////////// { englosoftw8 utf bilo <<<<<<<<<<<<<<<<<<<<
      koreanenglosoftw8utf: koreanenglosoftw8utf.className,
      russianenglosoftw8utf: russianenglosoftw8utf.className,
      inglishenglosoftw8utf: inglishenglosoftw8utf.className,
      
      hindienglosoftw8utf: hindienglosoftw8utf.className,
      banglaenglosoftw8utf: banglaenglosoftw8utf.className,
      oriyaenglosoftw8utf: oriyaenglosoftw8utf.className,
      gurmukhienglosoftw8utf: gurmukhienglosoftw8utf.className,
      guzratienglosoftw8utf: guzratienglosoftw8utf.className,
      
      sinhalaenglosoftw8utf: sinhalaenglosoftw8utf.className,
      tamilenglosoftw8utf: tamilenglosoftw8utf.className,
      kannadaenglosoftw8utf: kannadaenglosoftw8utf.className,
      malayalamenglosoftw8utf: malayalamenglosoftw8utf.className,
      teluguenglosoftw8utf: teluguenglosoftw8utf.className,
////////////////////////////// { englosoftw8 mono bilo <<<<<<<<<<<<<<<<<<<<
      koreanenglosoftw8mono: koreanenglosoftw8mono.className,
      russianenglosoftw8mono: russianenglosoftw8mono.className,
      inglishenglosoftw8mono: inglishenglosoftw8mono.className,
      
      hindienglosoftw8mono: hindienglosoftw8mono.className,
      banglaenglosoftw8mono: banglaenglosoftw8mono.className,
      oriyaenglosoftw8mono: oriyaenglosoftw8mono.className,
      gurmukhienglosoftw8mono: gurmukhienglosoftw8mono.className,
      guzratienglosoftw8mono: guzratienglosoftw8mono.className,
      
      sinhalaenglosoftw8mono: sinhalaenglosoftw8mono.className,
      tamilenglosoftw8mono: tamilenglosoftw8mono.className,
      kannadaenglosoftw8mono: kannadaenglosoftw8mono.className,
      malayalamenglosoftw8mono: malayalamenglosoftw8mono.className,
      teluguenglosoftw8mono: teluguenglosoftw8mono.className,
//////~~~~~~~~~~~~~~englodotw8 bilo
////////////////////////////// { englodotw8 asc bilo <<<<<<<<<<<<<<<<<<<<
      koreanenglodotw8asc: koreanenglodotw8asc.className,
      russianenglodotw8asc: russianenglodotw8asc.className,
      inglishenglodotw8asc: inglishenglodotw8asc.className,
      
      hindienglodotw8asc: hindienglodotw8asc.className,
      banglaenglodotw8asc: banglaenglodotw8asc.className,
      oriyaenglodotw8asc: oriyaenglodotw8asc.className,
      gurmukhienglodotw8asc: gurmukhienglodotw8asc.className,
      guzratienglodotw8asc: guzratienglodotw8asc.className,
      
      sinhalaenglodotw8asc: sinhalaenglodotw8asc.className,
      tamilenglodotw8asc: tamilenglodotw8asc.className,
      kannadaenglodotw8asc: kannadaenglodotw8asc.className,
      malayalamenglodotw8asc: malayalamenglodotw8asc.className,
      teluguenglodotw8asc: teluguenglodotw8asc.className,
////////////////////////////// { englodotw8 utf bilo <<<<<<<<<<<<<<<<<<<<
      koreanenglodotw8utf: koreanenglodotw8utf.className,
      russianenglodotw8utf: russianenglodotw8utf.className,
      inglishenglodotw8utf: inglishenglodotw8utf.className,
      
      hindienglodotw8utf: hindienglodotw8utf.className,
      banglaenglodotw8utf: banglaenglodotw8utf.className,
      oriyaenglodotw8utf: oriyaenglodotw8utf.className,
      gurmukhienglodotw8utf: gurmukhienglodotw8utf.className,
      guzratienglodotw8utf: guzratienglodotw8utf.className,
      
      sinhalaenglodotw8utf: sinhalaenglodotw8utf.className,
      tamilenglodotw8utf: tamilenglodotw8utf.className,
      kannadaenglodotw8utf: kannadaenglodotw8utf.className,
      malayalamenglodotw8utf: malayalamenglodotw8utf.className,
      teluguenglodotw8utf: teluguenglodotw8utf.className,
////////////////////////////// { englodotw8 mono bilo <<<<<<<<<<<<<<<<<<<<
      koreanenglodotw8mono: koreanenglodotw8mono.className,
      russianenglodotw8mono: russianenglodotw8mono.className,
      inglishenglodotw8mono: inglishenglodotw8mono.className,
      
      hindienglodotw8mono: hindienglodotw8mono.className,
      banglaenglodotw8mono: banglaenglodotw8mono.className,
      oriyaenglodotw8mono: oriyaenglodotw8mono.className,
      gurmukhienglodotw8mono: gurmukhienglodotw8mono.className,
      guzratienglodotw8mono: guzratienglodotw8mono.className,
      
      sinhalaenglodotw8mono: sinhalaenglodotw8mono.className,
      tamilenglodotw8mono: tamilenglodotw8mono.className,
      kannadaenglodotw8mono: kannadaenglodotw8mono.className,
      malayalamenglodotw8mono: malayalamenglodotw8mono.className,
      teluguenglodotw8mono: teluguenglodotw8mono.className,
//////~~~~~~~~~~~~~~onlyw8 bilo
////////////////////////////// { onlyw8 asc bilo <<<<<<<<<<<<<<<<<<<<
      koreanonlyw8asc: koreanonlyw8asc.className,
      russianonlyw8asc: russianonlyw8asc.className,
      inglishonlyw8asc: inglishonlyw8asc.className,
      
      hindionlyw8asc: hindionlyw8asc.className,
      banglaonlyw8asc: banglaonlyw8asc.className,
      oriyaonlyw8asc: oriyaonlyw8asc.className,
      gurmukhionlyw8asc: gurmukhionlyw8asc.className,
      guzrationlyw8asc: guzrationlyw8asc.className,
      
      sinhalaonlyw8asc: sinhalaonlyw8asc.className,
      tamilonlyw8asc: tamilonlyw8asc.className,
      kannadaonlyw8asc: kannadaonlyw8asc.className,
      malayalamonlyw8asc: malayalamonlyw8asc.className,
      teluguonlyw8asc: teluguonlyw8asc.className,
////////////////////////////// { onlyw8 utf bilo <<<<<<<<<<<<<<<<<<<<
      koreanonlyw8utf: koreanonlyw8utf.className,
      russianonlyw8utf: russianonlyw8utf.className,
      inglishonlyw8utf: inglishonlyw8utf.className,
      
      hindionlyw8utf: hindionlyw8utf.className,
      banglaonlyw8utf: banglaonlyw8utf.className,
      oriyaonlyw8utf: oriyaonlyw8utf.className,
      gurmukhionlyw8utf: gurmukhionlyw8utf.className,
      guzrationlyw8utf: guzrationlyw8utf.className,
      
      sinhalaonlyw8utf: sinhalaonlyw8utf.className,
      tamilonlyw8utf: tamilonlyw8utf.className,
      kannadaonlyw8utf: kannadaonlyw8utf.className,
      malayalamonlyw8utf: malayalamonlyw8utf.className,
      teluguonlyw8utf: teluguonlyw8utf.className,
////////////////////////////// { onlyw8 mono bilo <<<<<<<<<<<<<<<<<<<<
      koreanonlyw8mono: koreanonlyw8mono.className,
      russianonlyw8mono: russianonlyw8mono.className,
      inglishonlyw8mono: inglishonlyw8mono.className,
      
      hindionlyw8mono: hindionlyw8mono.className,
      banglaonlyw8mono: banglaonlyw8mono.className,
      oriyaonlyw8mono: oriyaonlyw8mono.className,
      gurmukhionlyw8mono: gurmukhionlyw8mono.className,
      guzrationlyw8mono: guzrationlyw8mono.className,
      
      sinhalaonlyw8mono: sinhalaonlyw8mono.className,
      tamilonlyw8mono: tamilonlyw8mono.className,
      kannadaonlyw8mono: kannadaonlyw8mono.className,
      malayalamonlyw8mono: malayalamonlyw8mono.className,
      teluguonlyw8mono: teluguonlyw8mono.className,
}

///////////////////
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);  
  let currfontcn = "";

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setSelectedItem(null); // Reset the second select
    if (selectedOption) { setBodyFont(selectedOption.value); }
  };

  const handleItemChange = (selectedOption) => {
    setSelectedItem(selectedOption);
    if (selectedOption) { setBodyFont(selectedOption.value); }
  };

  const setBodyFont = (selected_hsciifont_name) => {
	// alert(`currfontcn is ${currfontcn}. document.body.classList is ${document.body.classList}`);
	document.body.classList.value = document.body.classList.value.replaceAll(/__className_\w+\s+antialiased/g,"");
	document.body.classList.value = document.body.classList.value.replaceAll(/antialiased\s+__className_\w+/g,"");
	currfontcn = hsciifont_classnames[selected_hsciifont_name];
	document.body.classList.add(currfontcn);
	document.body.classList.add("antialiased");
  };
  const itemOptions = selectedCategory ? selectedCategory.children : [];

  return (
    <div style={{ width: 400, marginBottom: 20, color: 'black', backgroundColor: 'white' }} >
      <Select
        options={options}
        onChange={handleCategoryChange}
        value={selectedCategory}
        placeholder="8aiueohcg lxnguAge(bhαsα).select"
      />
      <Select
        options={itemOptions}
        onChange={handleItemChange}
        value={selectedItem}
        placeholder="8aiueohcg font.select"
        isDisabled={!selectedCategory}
      />

    </div>
  );
};
