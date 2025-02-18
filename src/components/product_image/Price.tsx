import Image from "next/image";
import ZipLogo from "@/public/extra/zip_log.svg";

export const Price = () => {
  return (
    <div className="flex flex-col text-end border-t sm:border-t-0 border-b sm:border-b-0 border-gray-300 py-2 w-full justify-end my-2">
      {/* Price */}
      <p className="mb-0 text-2xl font-bold text-black ">From $199.00</p>

      {/* ZIP Pay Option */}
      <p className="mt-1 gap-1 text-gray-700 flex flex-wrap  text-end justify-end items-center">
        or ZIP it from <span className="font-bold text-black">$10/week</span>{" "}
        with
        <Image
          src={ZipLogo}
          alt="ZIP"
          className="inline-block h-4 ml-1 w-min"
        />
      </p>

      {/* <p className="mt-1 flex flex-wrap items-center justify-end gap-1 text-gray-700 text-end">
  or ZIP it from 
  <span className="font-bold text-black">$10/week</span> with
  <Image
    src={ZipLogo}
    alt="ZIP"
    className="inline-block h-4 w-auto ml-1"
  />
</p>
 */}
    </div>
  );
};
