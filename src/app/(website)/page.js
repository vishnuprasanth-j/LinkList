import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <section className="pt-32">
        <div className="flex-col justify-center items-center sm:flex lg:flex-row">
          <div>
            <div className="max-w-md mb-8">
              <h1 className="text-6xl font-bold text-t-1">
                Your one link
                <br />
                for everything
              </h1>
              <h2 className="text-gray-500 text-xl mt-6">
                Share your links, social profiles, contact info and more on one
                page
              </h2>
            </div>
            <HeroForm user={session?.user} />
          </div>

          <Image src={"/allicons.svg"} alt="8" width="400" height="400" />
        </div>
      </section>
    </main>
  );
}
