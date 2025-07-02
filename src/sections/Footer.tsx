import { mySocials } from "../constants";

function Footer() {
  return (
    <section className="flex flex-wrap items-center justify-between pb-3 gap-5 text-sm text-neutral-400 c-space">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="size-6" alt={social.name} />
          </a>
        ))}
      </div>
      <p className="text-sm">&copy; Pratyush Mishra. {new Date().getFullYear()} All rights reserved. </p>
    </section>
  );
}

export default Footer;
