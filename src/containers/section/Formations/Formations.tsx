import React from "react";
import CustomTimelineFormation from "../../../components/Custom/Components/CustomTimelineExperience/CustomTimelineFormation";
import HeaderBox from "../About/HeaderBox";

const Formations = () => {
  const now = new Date();

  return (
    <section className="flex flex-col gap-2 h-full">
      <HeaderBox title={"Formations"} addButton />

      <div className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 shadow-md rounded-md">
        <CustomTimelineFormation
          items={[
            {
              period: {
                start: now,
                end: "Present",
              },
              diplome: "Poste1",
              description: (
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum quis nobis at iusto eveniet temporibus, ipsa a dolor
                  tenetur ipsam ab sint ea quibusdam, vitae commodi consequatur,
                  libero laboriosam fugiat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ipsam voluptatum voluptates
                  sunt earum quaerat totam aperiam. Delectus animi magni
                  impedit, laboriosam, nemo nihil consectetur expedita
                  cupiditate, libero repellat harum?
                </div>
              ),
            },

            {
              period: {
                start: now,
                end: "Present",
              },
              diplome: "Poste 2",
              description: (
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum quis nobis at iusto eveniet temporibus, ipsa a dolor
                  tenetur ipsam ab sint ea quibusdam, vitae commodi consequatur,
                  libero laboriosam fugiat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ipsam voluptatum voluptates
                  sunt earum quaerat totam aperiam. Delectus animi magni
                  impedit, laboriosam, nemo nihil consectetur expedita
                  cupiditate, libero repellat harum?
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Formations;
