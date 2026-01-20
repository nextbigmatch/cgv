// SVG Brand Logos for Our Clients Section
import TinderLogo from '@/imports/Group12';
import BloombarLogo from '@/imports/Group10-81-432';
import CoinbaseLogo from '@/imports/Group13';
import AtlassianLogo from '@/imports/LogosAtlassian';
import SlackLogo from '@/imports/Group10';
import WhatsAppLogo from '@/imports/Group8';
import ZoomLogo from '@/imports/Group7';
import GitHubLogo from '@/imports/Group6-50-1255';
import AWSBoatsLogoImg from '../../../assets/f64e5c98c9ccddcfcc3f5c683ac75b63836131b8.png';
import HyatusLogoImg from '../../../assets/6fdc72501fd939864200f2990cce2d089ceb5628.png';
import HyatusHeroImg from '../../../assets/cfd9119e3aad236893ad8e58cf716d1cfbfb3d75.png';
import RealRecoveryTalkLogoImg from '../../../assets/b91702f400a41d9d7021c9a174f67a24c79f0be1.png';
import GoldKioskLogoImg from '../../../assets/55544b625c96df3d99666ac4487901393fe65cc9.png';
import GoldKioskHeroImg from '../../../assets/663d77d5f03bc2e7fa5710a47a8c7ef4368566d8.png';
import HubSpotLogo from '@/imports/Group4';
import StripeLogo from '@/imports/Group3';
import AdobeLogo from '@/imports/LogosAdobe';
import MailchimpSVG from '@/imports/Group15';
import UberSVG from '@/imports/Group14';
import AtrinetLogoImg from '../../../assets/282af3afa17f8bbe5a913d5ad8871049d9a1be34.png';
import OrangeCountyLogoImg from '../../../assets/66dd380ea1c0b86326250361a0d7447e0832c302.png';

interface LogoProps {
  className?: string;
}

export const NexoraLogo = ({ className }: LogoProps) => (
  <div className={className} style={{ '--fill-0': '#ffffff' } as React.CSSProperties}>
    <BloombarLogo />
  </div>
);

export const QuantumLabsLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <CoinbaseLogo />
  </div>
);

export const HyatusLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <img 
      src={HyatusLogoImg} 
      alt="Hyatus" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const PixelforgeLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <AtlassianLogo />
  </div>
);

export const SynergyLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <img 
      src={RealRecoveryTalkLogoImg} 
      alt="Real Recovery Talk" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const ApexDigitalLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <WhatsAppLogo />
  </div>
);

export const VelocityLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <img 
      src={GoldKioskLogoImg} 
      alt="GoldKiosk" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const ZenithLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <img 
      src={AWSBoatsLogoImg} 
      alt="AWS Boats" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const FusionTechLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <HubSpotLogo />
  </div>
);

export const AWSBoatsLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <img src={AWSBoatsLogoImg} alt="AWS Boats Logo" />
  </div>
);

export const StripeLogoComponent = ({ className }: LogoProps) => (
  <div className={className}>
    <StripeLogo />
  </div>
);

export const AdobeLogoComponent = ({ className }: LogoProps) => (
  <div className={className}>
    <AdobeLogo />
  </div>
);

export const MailchimpLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <MailchimpSVG />
  </div>
);

export const UberLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <UberSVG />
  </div>
);

export const AtrinetLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <img 
      src={AtrinetLogoImg} 
      alt="Atrinet" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const OrangeCountyLogo = ({ className }: LogoProps) => (
  <div className={className}>
    <img 
      src={OrangeCountyLogoImg} 
      alt="Orange County" 
      className="w-full h-full object-contain"
    />
  </div>
);

// Export hero images
export { HyatusHeroImg, GoldKioskHeroImg };