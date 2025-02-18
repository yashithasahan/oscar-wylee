export const FrameDetails = () => {
  return (
    <div className="mt-12 w-full border relative border-black rounded-2xl p-6 flex gap-2 md:gap-4 md:flex-row flex-col justify-center items-center ">
      {/* Title with line on both sides */}
      <div className="absolute right-0 left-0 top-0 -translate-y-1/2   flex items-center justify-center mb-4">
        <h2 className="mx-4 text-lg sm:text-3xl sm:text-nowrap font-bold text-black text-center bg-white px-2">
          About the Frames
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-xl font-regular px-8 text-center my-4">
        A classic brow-line glasses, reimagined. Marco has spring hinges and an
        adjustable nose fit for maximum comfort (and style). Now available in
        small.
      </p>

      <div className="flex flex-col sm:gap-4">
        {/* Material */}
        <h3 className="text-center font-bold text-xl text-black mb-4">
          Made from Acetate
        </h3>

        {/* Frame Fit and Measurements Table */}
        <div className="grid grid-cols-2 border border-black text-black font-semibold text-center divide-x divide-black">
          <div>
            <div className="p-3 font-bold">FRAME FIT</div>
            <div className="pb-3 font-normal">WIDE</div>
          </div>
          <div>
            <div className="p-3 font-bold">MEASUREMENTS</div>

            <div className="pb-3 font-normal ">56 - 19 - 148</div>
          </div>
        </div>

        {/* Extra Information */}
        <p className="text-gray-600 text-xs text-center mt-4">
          These measurements mean lens width, bridge, and temple length in
          millimeters (mm). They can be found on the inside of the temple arm.
          If you already have a pair that you like, you can compare it to these
          measurements.
        </p>
        <div className="hidden sm:block text-xs   border border-gray-400  p-4 max-w-3xl mx-auto text-center">
          {/* Regular Text */}
          <p className="text-gray-700  mb-2">
            Filter category 3 - General purpose sunglasses. High protection
            against sunglare. Good UV Protection. Not suitable for driving in
            twilight, at night, or under dull conditions.
          </p>

          {/* Bold Important Text */}
          <p className="text-black font-bold">
            This frame comes with polarised lenses. An additional $100 will be
            added to your order total for prescription orders.
          </p>
        </div>
      </div>
    </div>
  );
};
