import Image, { StaticImageData } from "next/image";

interface IconProps {
  icon: StaticImageData | string;
  alt: string;
  className?: string;
}

export const CustomIcon: React.FC<IconProps> = ({ icon, alt, className }) => {
  return (
    <Image src={icon} alt={alt} className={`h-6 w-min ${className}`}></Image>
  );
};
