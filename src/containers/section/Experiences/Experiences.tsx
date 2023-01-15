import React from "react";
import HeaderBox from "../About/HeaderBox";
import CustomTimelineExperience from "../../../components/Custom/Components/CustomTimelineExperience/CustomTimelineExperience";

const Experiences = () => {
  const now = new Date();
  return (
    <section className="flex flex-col gap-2 h-full">
      <HeaderBox title={"Expérience professionnel"} addButton />
      <div className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 shadow-md rounded-md">
        <CustomTimelineExperience
          period={{
            start: now,
            end: "Present",
          }}
          societe={"Societe"}
          poste={"Poste"}
          description={
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              quis nobis at iusto eveniet temporibus, ipsa a dolor tenetur ipsam
              ab sint ea quibusdam, vitae commodi consequatur, libero laboriosam
              fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Unde ipsam voluptatum voluptates sunt earum quaerat totam aperiam.
              Delectus animi magni impedit, laboriosam, nemo nihil consectetur
              expedita cupiditate, libero repellat harum?
            </div>
          }
        />

        <CustomTimelineExperience
          period={{
            start: now,
            end: "Present",
          }}
          societe={"Societe"}
          poste={"Poste"}
          description={
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              quis nobis at iusto eveniet temporibus, ipsa a dolor tenetur ipsam
              ab sint ea quibusdam, vitae commodi consequatur, libero laboriosam
              fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Unde ipsam voluptatum voluptates sunt earum quaerat totam aperiam.
              Delectus animi magni impedit, laboriosam, nemo nihil consectetur
              expedita cupiditate, libero repellat harum?
            </div>
          }
        />

        <CustomTimelineExperience
          period={{
            start: now,
            end: "Present",
          }}
          societe={"Societe"}
          poste={"Poste"}
          description={
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              quis nobis at iusto eveniet temporibus, ipsa a dolor tenetur ipsam
              ab sint ea quibusdam, vitae commodi consequatur, libero laboriosam
              fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Unde ipsam voluptatum voluptates sunt earum quaerat totam aperiam.
              Delectus animi magni impedit, laboriosam, nemo nihil consectetur
              expedita cupiditate, libero repellat harum?
            </div>
          }
        />

        <CustomTimelineExperience
          period={{
            start: now,
            end: "Present",
          }}
          societe={"Societe"}
          poste={"Poste"}
          description={
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              quis nobis at iusto eveniet temporibus, ipsa a dolor tenetur ipsam
              ab sint ea quibusdam, vitae commodi consequatur, libero laboriosam
              fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Unde ipsam voluptatum voluptates sunt earum quaerat totam aperiam.
              Delectus animi magni impedit, laboriosam, nemo nihil consectetur
              expedita cupiditate, libero repellat harum?
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Experiences;
