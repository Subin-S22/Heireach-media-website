"use client";
import ConnectForm from "../form/ConnectForm";
import { useEffect, useState } from "react";
import useConnectForm from "@/lib/hooks/useConnectForm";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import { facebook, insta, linkedIn, whatsapp, youtube } from "@/lib/constant";
import Header from "../heading";

export default function Modal() {
  const formContext = useConnectForm();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 5000);
  }, []);
  return (
    <Fragment>
      {openModal ? (
        <div
          className="fixed top-1/2 left-1/2 w-[90%] sm:w-[75%] lg:w-[50%] overflow-auto
          -translate-x-1/2 -translate-y-1/2 bg-gray-950 p-8 z-50 rounded-2xl max-h-[90vh]"
        >
          <div className="flex justify-between items-center">
            <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
            <section className="text-center">
              <Header typeof="h3" name="Make Your Brand Stand Out" />
              <p className="font-amazingSlab text-base font-semibold">
                Schedule Your Free Brand Growth Call Now
              </p>
            </section>
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
