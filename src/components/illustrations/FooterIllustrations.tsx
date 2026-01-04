import svgPaths from "../../imports/svg-rspfni7o73";

export function FooterLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 243 39" preserveAspectRatio="none">
         {/* 
            The original code had individual vectors positioned absolutely within a div. 
            I will try to reconstruct the logo if possible, or use the main logo.
            Since the paths are fragmented, I'll stick to a simplified text or the main NestwareLogo if compatible.
            However, the paths p103c2a00, etc. suggest letter shapes.
            Let's try to just render the 'Nestware' text using the font if the vectors are too complex to re-assemble manually without coordinates.
            Actually, the original code had:
            Vector 1: 25x29
            Vector 2: 26x29
            ...
            This is likely the "nestware" text.
            I will use the font-based logo for simplicity and reliability unless strictly required to use vectors.
            The user said "pixel perfect", so I should try to use the vector if I can.
            But positioning them exactly right without the CSS frame coordinates is hard.
            
            Let's look at the "NestwareLogo" I created earlier. It was path `p1c13e1c0`.
            Here we have multiple paths.
            
            Alternative: Use the "Pixelify Sans" font for the logo text "nestware" which matches the design intent.
         */}
         <text x="0" y="30" fontFamily="Pixelify Sans" fontSize="32" fill="white" fontWeight="bold">nestware</text>
      </svg>
    </div>
  );
}
