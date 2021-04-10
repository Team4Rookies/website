import fs from "fs";
import { GetServerSideProps } from "next";
import { Header } from "../components/Header";

type MemberData = {
  about: string;
  name: string;
  social: {
    twitter?: string;
  };
  slug: string;
  hasPicture: boolean;
};

type MembersPage = {
  membersData: MemberData[];
};

const Members = ({ membersData }: MembersPage) => {
  return (
    <div>
      <Header />
      <div>
        {membersData.map((member) => {
          return (
            <div>
              <h2>{member.name}</h2>
              {member.hasPicture && (
                <img
                  src={`https://github.com/Team4Rookies/website/raw/main/teams-info/${member.slug}/pic.png`}
                />
              )}
              <h3>About</h3>
              <p>{member.about}</p>
              {member.social.twitter && (
                <a href={member.social.twitter}>Twitter</a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<MembersPage> = async (
  context
) => {
  const path = process.cwd() + "/teams-info/";
  const members = fs.readdirSync(path);

  const membersData: MemberData[] = [];

  members.map((member) => {
    const memberPath = path + "/" + member;
    const memberFiles = fs.readdirSync(memberPath);
    if (!memberFiles.includes("info.json")) {
      return;
    }

    const data: MemberData = JSON.parse(
      fs.readFileSync(memberPath + "/info.json", "utf-8")
    );
    data.slug = member;
    data.hasPicture = memberFiles.includes("pic.png");

    membersData.push(data);
  });

  return {
    props: {
      membersData,
    },
  };
};

export default Members;
