import Image, { StaticImageData } from "next/image";

interface IconProps {
  icon: StaticImageData | string;
  alt: string;
}

export const CustomIcon: React.FC<IconProps> = ({ icon, alt }) => {
  return <Image src={icon} alt={alt} className="h-6 w-min"></Image>;
};
