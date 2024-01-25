import AboutBanner from "@/components/aboutPage/AboutBanner";
import MeetOurTeam from "@/components/aboutPage/Values/MeetOurTeam";
import Values from "@/components/aboutPage/Values/Values";
import OurMission from "@/components/aboutPage/ourMission/OurMission";
import OurStatistics from "@/components/aboutPage/ourStatistics/OurStatistics";
import React from "react";

const AboutPage = () => {
  return <div className="mx-auto">
  
    <OurStatistics />
    <OurMission />
    <Values />
    <MeetOurTeam />
    </div>;
};

export default AboutPage;
