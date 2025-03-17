import Header from "@/lib/ui/heading";

export default function PrivacyPolicy() {
  return (
    <section>
      {/**header */}
      <Header
        name="Privacy policy"
        type="h1"
        className="text-[40px] text-center py-8"
      />
      {/**sub header */}
      <div className="font-bold text-lg py-4 ">
        <span className="font-amazingSlab">Last Update:</span> 25/02/2025
      </div>
      {/**content */}
      <div className="text-lg font-amazingSlab">
        Heireach Media is committed to protecting your privacy. If you have any
        questions regarding the use of your Personal Data, please contact us at
        <span className="font-bold"> grow@heireachmedia.com</span> . By using
        this site and our services, you consent to the processing of your
        Personal Data as described in this Privacy Policy. We may update this
        Privacy Policy from time to time, so we encourage you to review it
        periodically.
      </div>
    </section>
  );
}
