import React from "react";

// Global CSS: fonts, resets, reveal animations, responsive nav,
// focus-visible rings and reduced-motion support.
export default function Style() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,900&family=Spline+Sans:wght@400;500;600&family=Tiro+Devanagari+Hindi&display=swap');
      * { margin:0; padding:0; box-sizing:border-box; }
      html { scroll-behavior:smooth; }
      body { background:#0a0907; }
      ::selection { background:#FF9933; color:#0a0907; }

      a, button { -webkit-tap-highlight-color: transparent; }
      :focus-visible { outline: 2px solid #FF9933; outline-offset: 3px; border-radius: 4px; }

      .reveal { opacity:0; transform:translateY(28px); transition:opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1); }
      .reveal.in, header .reveal { opacity:1; transform:none; }
      header .reveal { animation:rise .9s cubic-bezier(.2,.7,.2,1) backwards; }
      header .d1{animation-delay:.1s}.d2{animation-delay:.25s}.d3{animation-delay:.4s}.d4{animation-delay:.55s}
      @keyframes rise { from{opacity:0;transform:translateY(34px)} to{opacity:1;transform:none} }
      @keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }

      /* responsive nav */
      .soch-menu-btn { display:none !important; }
      @media (max-width: 640px) {
        .soch-nav-links { display:none !important; }
        .soch-menu-btn { display:inline-flex !important; align-items:center; justify-content:center; }
      }

      /* respect reduced motion */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
        .reveal { opacity:1 !important; transform:none !important; }
      }
    `}</style>
  );
}
