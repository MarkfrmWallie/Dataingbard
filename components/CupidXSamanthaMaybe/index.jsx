import React from "react";
import Profile3 from "../Profile3";
import X4 from "../X4";
import X11 from "../X11";
import X6 from "../X6";
import "./CupidXSamanthaMaybe.css";

function CupidXSamanthaMaybe(props) {
  const {
    sorrySarahHasntBe,
    sorrySamanthaHasnt,
    name,
    sheDecidedToLearnMoreAboutYou,
    sheSeemsToBeOnT,
    itSeemsSheMightB,
    illGetItDone,
    x930Tonight,
    letsDoIt,
    text20,
    greatYoureTaking,
    map,
    profile3Props,
    x4Props,
    x11Props,
    x6Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cupid-x-samantha-maybe screen">
        <Profile3 className={profile3Props.className} />
        <div className="overlap-group11-1">
          <div className="overlap-group1-24">
            <p className="sorry-sarah-hasnt-be-3 poppins-medium-blumine-12px">{sorrySarahHasntBe}</p>
          </div>
          <div className="x8-4">
            <div className="overlap-group6-6">
              <p className="sorry-samantha-hasnt-1 poppins-medium-blumine-12px">{sorrySamanthaHasnt}</p>
            </div>
            <div className="overlap-group-30">
              <p className="name-8 poppins-medium-blumine-12px">{name}</p>
            </div>
            <div className="overlap-group1-25">
              <p className="she-decided-to-learn-more-about-you-2 poppins-medium-blumine-12px">
                {sheDecidedToLearnMoreAboutYou}
              </p>
            </div>
            <div className="overlap-group-30">
              <p className="she-seems-to-be-on-t poppins-medium-blumine-12px">{sheSeemsToBeOnT}</p>
            </div>
            <div className="overlap-group5-7">
              <p className="it-seems-she-might-b poppins-medium-blumine-12px">{itSeemsSheMightB}</p>
            </div>
            <div className="overlap-group3-11">
              <div className="bg-6"></div>
              <div className="ill-get-it-done poppins-medium-blumine-12px">{illGetItDone}</div>
            </div>
            <div className="overlap-group4-9">
              <div className="bg-7"></div>
              <div className="x930-tonight poppins-medium-blumine-12px">{x930Tonight}</div>
            </div>
          </div>
          <X4 damnYeahLetsFindSomeoneWithA={x4Props.damnYeahLetsFindSomeoneWithA} className={x4Props.className} />
          <X11 className={x11Props.className} />
        </div>
        <div className="x12">
          <div className="overlap-group8-5">
            <div className="bg-8"></div>
            <div className="lets-do-it poppins-medium-tickle-me-pink-14px">{letsDoIt}</div>
          </div>
          <div className="text-20 poppins-medium-we-peep-12px">{text20}</div>
        </div>
        <div className="group-4-2">
          <div className="overlap-group10-2">
            <p className="great-youre-taking poppins-medium-blumine-12px">{greatYoureTaking}</p>
            <img className="map-4" src={map} alt="Map" />
          </div>
        </div>
        <X6 className={x6Props.className} />
      </div>
    </div>
  );
}

export default CupidXSamanthaMaybe;
