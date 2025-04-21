"use client";
import ConnectForm from "../form/ConnectForm";
import { useEffect, useState } from "react";
import useConnectForm from "@/lib/hooks/useConnectForm";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import { facebook, insta, linkedIn, whatsapp, youtube } from "@/lib/constant";

export default function Modal() {
  const formContext = useConnectForm();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 3000);
  }, []);
  return (
    <Fragment>
      {openModal ? (
        <div
          className="fixed top-1/2 left-1/2 w-[90%] sm:w-[75%] lg:w-[50%] 
          -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-8 z-50 rounded-2xl"
        >
          <div className="flex justify-between items-center">
            <div></div>
            <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
            <div
              className="text-xl font-bold cursor-pointer"
              onClick={() => setOpenModal(false)}
            >
              X
            </div>
          </div>
          <ConnectForm {...formContext}>
            <div className="flex flex-wrap gap-8 flex-row mt-4 justify-center">
              <Link href={linkedIn} target="_blank">
                <Image
                  src="/images/footer/linkedin.svg"
                  alt="linkedIn"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={youtube} target="_blank">
                <Image
                  src="/images/footer/youtube.svg"
                  alt="youtube"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={insta} target="_blank">
                <Image
                  src="/images/footer/Vector.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={facebook} target="_blank">
                <Image
                  src="/images/footer/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={whatsapp} target="_blank">
                <Image
                  src="/images/footer/whatsapp.svg"
                  alt="linkedIn"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </ConnectForm>
        </div>
      ) : null}
    </Fragment>
  );
}
