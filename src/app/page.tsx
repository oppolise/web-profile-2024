import Image from "next/image";
import Profile from "./_components/Profile";
import Bio from "./_components/Bio";
import Personality from "./_components/Personality";
import Education from "./_components/Education";
import Skill from "./_components/Skill";
import Goals from "./_components/Goals";
import Portfolio from "./_components/Portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container pt-4 mx-auto">
      <div className="flex gap-4 justify-end pb-4">
        <div>
          <Link href="/" className="hover:text-blue-600">
            Profile
          </Link>
        </div>
        <div>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-y-4 mx-72">
        <div className="col-span-1">
          <Profile />
        </div>
        <div className="grid col-span-6 xl:grid-cols-6 gap-4">
          <div className="grid col-span-3 gap-4">
            <Bio />
            <Personality />
            <Goals />
          </div>
          <div className="grid col-span-3 gap-4">
            <Skill />
            <Education />
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
}
