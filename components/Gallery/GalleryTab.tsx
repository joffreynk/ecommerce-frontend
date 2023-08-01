"use client";

import Image from "next/image";

import { Image as ImageProp } from "@/types";
import { Tab } from "@headlessui/react";

const GalleryTab = ({ image }: { image: ImageProp }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt="image"
              className="object-cover object-center"
            />
          </span>
          <span
            className={`absolute inset-0  rounded-md ring-2 ring-offset-2 ${
              selected ? "ring-black" : "ring-transparent"
            }`}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
