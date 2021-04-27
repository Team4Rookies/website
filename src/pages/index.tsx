import { Layout } from "../components/Layout";
import Image from "next/image"

const Index = () => {
  return (
    <Layout>
      <section className="h-screen">
        <div
          style={{
            backgroundImage: "url(main-section.jpeg)",
          }}
          className="h-full bg-cover bg-fixed"
        ></div>
      </section>
      <section className="h-40"></section>
      <section className="text-center">
        <div className="flex flex-col space-y-11">
          <h2 className="text-4xl text-blue-800">Didactical principles</h2>
          <span>
            Learning in a small group, with shared goals and collaboratively
            defined
          </span>
          <span>
            Give before Get approach, where the sharing motivation reinforce the
            learning
          </span>
          <span>
            Learning process, notes, briefings and materials are registered to
            help others
          </span>
          <span>Public presentation driving and reinforcing the learning</span>
          <span>
            Learning materials released under open source licenses, CC 4.0 BY-NC
            and Apache 2.0
          </span>
        </div>
        <style jsx>{`
          span {
            color: rgba(55, 65, 81, 1);
            font-style: italic;
          }
        `}</style>
      </section>
      <section className="h-40"></section>
      <section className="mx-auto">
        <div>
          <Image 
            src="/small-groups.jpeg"
            alt="Small groups"
            width={260}
            height={260}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
