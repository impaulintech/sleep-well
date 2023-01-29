import NextHead from "~/components/atoms/NextHead";

export default function Home() {
  return (
    <>
      <NextHead title="SleepWell | Home" hasIcon={false} />
      <main className="text-center flex justify-center items-center font-bold text-5xl text-white min-h-screen h-full">
        <span className="text-btn-2">Sleep Well</span>
      </main>
    </>
  );
}