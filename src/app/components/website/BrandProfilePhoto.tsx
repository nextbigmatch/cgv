import { Download, Circle, Square } from 'lucide-react';

/**
 * Core Grow Vision Brand Profile Photo Component
 * 
 * A professional profile photo design for Zoom, Google Meet, and other platforms
 * incorporating the brand's circular "G" logo and brand colors
 * Available in both circular and square formats
 */

export default function BrandProfilePhoto() {
  // Download handlers for Design 1: Gradient Ring
  const downloadGradientRing = (size: number, shape: 'circle' | 'square') => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Create clipping path
    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
    }

    // Background - Black
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);

    // Orange gradient ring
    const accentSize = size * 0.75;
    const gradient = ctx.createLinearGradient(
      size / 2 - accentSize / 2,
      size / 2 - accentSize / 2,
      size / 2 + accentSize / 2,
      size / 2 + accentSize / 2
    );
    gradient.addColorStop(0, '#FF7029');
    gradient.addColorStop(1, '#FF9F0A');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, accentSize / 2, 0, Math.PI * 2);
    ctx.fill();

    // Inner black circle for the "G"
    const innerSize = size * 0.65;
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, innerSize / 2, 0, Math.PI * 2);
    ctx.fill();

    // Draw stylized "G" letter
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${size * 0.5}px "Afacad Flux", Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('G', size / 2, size / 2);

    // Download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `core-grow-vision-gradient-${shape}-${size}x${size}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  // Download handlers for Design 2: Solid Orange
  const downloadSolidOrange = (size: number, shape: 'circle' | 'square') => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
    }

    ctx.fillStyle = '#FF7029';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#000000';
    ctx.font = `bold ${size * 0.5}px "Afacad Flux", Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('G', size / 2, size / 2);

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `core-grow-vision-solid-${shape}-${size}x${size}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  // Download handlers for Design 3: Minimal Black
  const downloadMinimalBlack = (size: number, shape: 'circle' | 'square') => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
    }

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${size * 0.5}px "Afacad Flux", Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('G', size / 2, size / 2);

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `core-grow-vision-minimal-${shape}-${size}x${size}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  // Download handlers for Design 4: Professional Gray
  const downloadProfessionalGray = (size: number, shape: 'circle' | 'square') => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
    }

    ctx.fillStyle = '#1C1C1C';
    ctx.fillRect(0, 0, size, size);

    // Orange border ring
    ctx.strokeStyle = '#FF7029';
    ctx.lineWidth = size * 0.08;
    
    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - size * 0.04, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      // Square border
      const padding = size * 0.08;
      ctx.strokeRect(padding / 2, padding / 2, size - padding, size - padding);
    }

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${size * 0.5}px "Afacad Flux", Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('G', size / 2, size / 2);

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `core-grow-vision-gray-${shape}-${size}x${size}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  return (
    <div className="min-h-screen bg-black py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-[#FF7029]">
            Brand Profile Photos
          </h1>
          <p className="text-neutral-400 text-lg">
            Professional profile photos for Zoom, Google Meet, Teams, and other platforms
          </p>
          <p className="text-neutral-500 mt-2">
            Available in both circular and square formats for maximum flexibility
          </p>
        </div>

        {/* Profile Photo Designs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Design 1: Gradient Ring with G */}
          <div className="bg-[#1C1C1C] border border-neutral-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Gradient Ring Design</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Circular Preview */}
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-3 flex items-center gap-2">
                  <Circle className="w-4 h-4" />
                  Circular
                </p>
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 rounded-full bg-black overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF7029] to-[#FF9F0A] p-3">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <span className="text-white text-5xl sm:text-6xl font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
                          G
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Square Preview */}
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-3 flex items-center gap-2">
                  <Square className="w-4 h-4" />
                  Square
                </p>
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF7029] to-[#FF9F0A] p-3">
                      <div className="w-full h-full bg-black flex items-center justify-center">
                        <span className="text-white text-5xl sm:text-6xl font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
                          G
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => downloadGradientRing(512, 'circle')}
                  className="bg-[#FF7029] hover:bg-[#FF9F0A] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Circle className="w-4 h-4" />
                  512×512
                </button>
                <button
                  onClick={() => downloadGradientRing(512, 'square')}
                  className="bg-[#FF7029] hover:bg-[#FF9F0A] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Square className="w-4 h-4" />
                  512×512
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => downloadGradientRing(1024, 'circle')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Circle className="w-4 h-4" />
                  1024×1024
                </button>
                <button
                  onClick={() => downloadGradientRing(1024, 'square')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Square className="w-4 h-4" />
                  1024×1024
                </button>
              </div>
            </div>

            <p className="text-neutral-500 text-sm mt-4 text-center">
              Recommended for most platforms
            </p>
          </div>

          {/* Design 2: Solid Orange with G */}
          <div className="bg-[#1C1C1C] border border-neutral-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Solid Orange Design</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Circular Preview */}
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-3 flex items-center gap-2">
                  <Circle className="w-4 h-4" />
                  Circular
                </p>
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 rounded-full bg-[#FF7029] overflow-hidden flex items-center justify-center">
                    <span className="text-black text-5xl sm:text-6xl font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
                      G
                    </span>
                  </div>
                </div>
              </div>

              {/* Square Preview */}
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-3 flex items-center gap-2">
                  <Square className="w-4 h-4" />
                  Square
                </p>
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 bg-[#FF7029] overflow-hidden flex items-center justify-center">
                    <span className="text-black text-5xl sm:text-6xl font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
                      G
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => downloadSolidOrange(512, 'circle')}
                  className="bg-[#FF7029] hover:bg-[#FF9F0A] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Circle className="w-4 h-4" />
                  512×512
                </button>
                <button
                  onClick={() => downloadSolidOrange(512, 'square')}
                  className="bg-[#FF7029] hover:bg-[#FF9F0A] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Square className="w-4 h-4" />
                  512×512
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => downloadSolidOrange(1024, 'circle')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Circle className="w-4 h-4" />
                  1024×1024
                </button>
                <button
                  onClick={() => downloadSolidOrange(1024, 'square')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Square className="w-4 h-4" />
                  1024×1024
                </button>
              </div>
            </div>

            <p className="text-neutral-500 text-sm mt-4 text-center">
              Bold and vibrant variant
            </p>
          </div>

          {/* Design 3: Minimal White G on Black */}
          <div className="bg-[#1C1C1C] border border-neutral-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Minimal Black Design</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Circular Preview */}
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-3 flex items-center gap-2">
                  <Circle className="w-4 h-4" />
                  Circular
                </p>
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 rounded-full bg-black overflow-hidden flex items-center justify-center border-2 border-neutral-800">
                    <span className="text-white text-5xl sm:text-6xl font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
                      G
                    </span>
                  </div>
                </div>
              </div>

              {/* Square Preview */}
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-3 flex items-center gap-2">
                  <Square className="w-4 h-4" />
                  Square
                </p>
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center border-2 border-neutral-800">
                    <span className="text-white text-5xl sm:text-6xl font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
                      G
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => downloadMinimalBlack(512, 'circle')}
                  className="bg-[#FF7029] hover:bg-[#FF9F0A] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Circle className="w-4 h-4" />
                  512×512
                </button>
                <button
                  onClick={() => downloadMinimalBlack(512, 'square')}
                  className="bg-[#FF7029] hover:bg-[#FF9F0A] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Square className="w-4 h-4" />
                  512×512
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => downloadMinimalBlack(1024, 'circle')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Circle className="w-4 h-4" />
                  1024×1024
                </button>
                <button
                  onClick={() => downloadMinimalBlack(1024, 'square')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Square className="w-4 h-4" />
                  1024×1024
                </button>
              </div>
            </div>

            <p className="text-neutral-500 text-sm mt-4 text-center">
              Clean and professional
            </p>
          </div>

          {/* Design 4: Orange Ring on Dark Gray */}
          <div className="bg-[#1C1C1C] border border-neutral-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Professional Gray Design</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Circular Preview */}
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-3 flex items-center gap-2">
                  <Circle className="w-4 h-4" />
                  Circular
                </p>
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 rounded-full bg-[#1C1C1C] overflow-hidden">
                    <div className="absolute inset-0 rounded-full border-8 border-[#FF7029]">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white text-5xl sm:text-6xl font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
                          G
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Square Preview */}
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-sm mb-3 flex items-center gap-2">
                  <Square className="w-4 h-4" />
                  Square
                </p>
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 bg-[#1C1C1C] overflow-hidden border-8 border-[#FF7029]">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white text-5xl sm:text-6xl font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
                        G
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => downloadProfessionalGray(512, 'circle')}
                  className="bg-[#FF7029] hover:bg-[#FF9F0A] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Circle className="w-4 h-4" />
                  512×512
                </button>
                <button
                  onClick={() => downloadProfessionalGray(512, 'square')}
                  className="bg-[#FF7029] hover:bg-[#FF9F0A] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Square className="w-4 h-4" />
                  512×512
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => downloadProfessionalGray(1024, 'circle')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Circle className="w-4 h-4" />
                  1024×1024
                </button>
                <button
                  onClick={() => downloadProfessionalGray(1024, 'square')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Square className="w-4 h-4" />
                  1024×1024
                </button>
              </div>
            </div>

            <p className="text-neutral-500 text-sm mt-4 text-center">
              Subtle and sophisticated
            </p>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-[#1C1C1C] border border-neutral-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Usage Guidelines</h2>
          
          <div className="space-y-6 text-neutral-300">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Platform Requirements</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Zoom:</strong> Minimum 256×256, recommended 512×512 or 1024×1024 (circular or square)</li>
                <li><strong>Google Meet:</strong> Minimum 250×250, recommended 512×512 (circular preferred)</li>
                <li><strong>Microsoft Teams:</strong> Minimum 256×256, recommended 648×648 (square preferred)</li>
                <li><strong>Slack:</strong> Minimum 512×512, recommended 1024×1024 (square supported)</li>
                <li><strong>LinkedIn:</strong> 400×400 to 7680×4320 (square preferred)</li>
                <li><strong>Email Signatures:</strong> 180×180 to 300×300 (square or circular)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Shape Selection Guide</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Circular:</strong> Best for video conferencing platforms (Zoom, Meet, Webex) where avatars are displayed in circles</li>
                <li><strong>Square:</strong> Ideal for social media profiles, email signatures, and professional platforms like LinkedIn where square crops are standard</li>
                <li><strong>Both formats work universally</strong> - platforms will auto-crop if needed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Design Recommendations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Gradient Ring:</strong> Best for professional video calls and meetings - premium feel</li>
                <li><strong>Solid Orange:</strong> High visibility in crowded participant lists - bold presence</li>
                <li><strong>Minimal Black:</strong> Clean and understated for corporate settings - timeless elegance</li>
                <li><strong>Professional Gray:</strong> Balanced option for any context - versatile choice</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Brand Compliance</h3>
              <p className="mb-2">All designs follow Core Grow Vision's brand guidelines:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Brand Colors: Orange (#FF7029), Gold (#FF9F0A), Black (#000000), White (#FFFFFF)</li>
                <li>Typography: Afacad Flux font family</li>
                <li>Circular "G" logo element</li>
                <li>Minimalistic flat design - no shadows or 3D effects</li>
                <li>Consistent spacing and proportions across all formats</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
