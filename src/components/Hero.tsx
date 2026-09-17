import heroPortrait from '../assets/hero-portrait.webp'

export default function Hero() {
  return (
    <section className="Hero border-dark-primary relative flex min-h-screen flex-col items-center justify-center border-b">
      <h1 className="flex w-full items-center justify-between px-5">
        <span className="Hero-title-left text-dark-primary text-[6.875rem] leading-none font-semibold tracking-[-0.275rem] uppercase">
          III spaces
        </span>
        <div className="Hero-img size-125 shrink-0 overflow-hidden rounded-full">
          <img
            src={heroPortrait}
            alt=""
            className="size-full object-cover"
            width={1000}
            height={1000}
            fetchPriority="high"
          />
        </div>
        <span className="Hero-title-right text-dark-primary text-[6.875rem] leading-none font-semibold tracking-[-0.275rem] uppercase">
          III states
        </span>
      </h1>
      <p className="Hero-sub text-dark-primary/60 absolute bottom-[2.625rem] w-105 text-center text-[1.125rem] leading-[1.3] tracking-[-0.01125rem]">
        A quiet return to yourself.
        <br />
        Shaped by space, rhythm, and presence.
      </p>
    </section>
  )
}
