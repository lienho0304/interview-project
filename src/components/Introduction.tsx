export const Introduction = () => {
  return (
    <>
      <div className='flex items-center'>
        <img src={`${process.env.PUBLIC_URL}/logo.webp`} alt="Example" className="black-to-white-image w-36" />
        <span className='text-blue-500 text-xs'>Business</span></div>
      <div className=' flex flex-col gap-y-5 px-5 text-sm'>
        <div className="pt-20 text-lg">
          Welcome.
          <br />
          Let's start your journey
        </div>
        <p>
          Whether you're looking to enhance authenticity checks, streamline asset management, or secure ownership records, Vaultik is here to guide you every step of the way.
        </p>
        <p>Our cutting-edge approach to technology combined   with immutable security of blockchain offers a solution that's not just innovative but also reliable and user-friendly.</p>
        <p>Let's embark on this transformative journey together. Welcome aboard!</p>
      </div>

      <div className='mt-20 text-xs'>© 2024 Mintouge Limited</div>
    </>
  )
}
