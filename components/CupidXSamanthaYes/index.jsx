import React from "react";
import Profile3 from "../Profile3";
import X9 from "../X9";
import X6 from "../X6";
import "./CupidXSamanthaYes.css";

function CupidXSamanthaYes(props) {
  const {
    noButIAmAt930Pm,
    text10,
    sorrySarahHasntBe1,
    sorrySarahHasntBe2,
    name,
    sheDecidedToLearnMoreAboutYou,
    sheSaidShesInter,
    areYouAvailableTonightAt9Pm,
    howDidTheIntroGo,
    youBothLikeCars,
    shesConfirmedDet,
    howWasTheBigDay,
    sheDoesTooImOnIt,
    amazingIdLoveToSeeHerAgain,
    map,
    greatShellJoinTh,
    overlapGroup1,
    joinNow,
    text13,
    ar1,
    group1897,
    x91Props,
    x92Props,
    x6Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cupid-x-samantha-yes screen">
        <Profile3 />
        <div className="overlap-group14">
          <div className="x4-2">
            <div className="overlap-group1-10">
              <p className="x-at-9 poppins-medium-tickle-me-pink-14px">{noButIAmAt930Pm}</p>
            </div>
            <div className="text-10 poppins-medium-we-peep-12px">{text10}</div>
          </div>
          <div className="overlap-group2-7">
            <p className="sorry-sarah-hasnt-be poppins-medium-blumine-12px">{sorrySarahHasntBe1}</p>
          </div>
          <div className="x8-1">
            <div className="overlap-group9-3">
              <p className="sorry-sarah-hasnt-be-1 poppins-medium-blumine-12px">{sorrySarahHasntBe2}</p>
            </div>
            <div className="overlap-group-17">
              <p className="name-5 poppins-medium-blumine-12px">{name}</p>
            </div>
            <div className="overlap-group1-11">
              <p className="she-decided-to-learn-more-about-you poppins-medium-blumine-12px">
                {sheDecidedToLearnMoreAboutYou}
              </p>
            </div>
            <div className="overlap-group-17">
              <p className="she-said-shes-inter poppins-medium-blumine-12px">{sheSaidShesInter}</p>
            </div>
            <div className="overlap-group3-4">
              <p className="x-at-9 poppins-medium-blumine-12px">{areYouAvailableTonightAt9Pm}</p>
            </div>
            <div className="x4-3">
              <div className="overlap-group7-4">
                <p className="how-did-the-intro-go poppins-medium-blumine-12px">{howDidTheIntroGo}</p>
              </div>
              <div className="overlap-group4-3">
                <p className="you-both-like-cars poppins-medium-blumine-12px">{youBothLikeCars}</p>
              </div>
              <div className="overlap-group5-3">
                <p className="shes-confirmed-det poppins-medium-blumine-12px">{shesConfirmedDet}</p>
              </div>
              <div className="overlap-group6-2">
                <div className="bg-2"></div>
                <p className="how-was-the-big-day poppins-medium-blumine-12px">{howWasTheBigDay}</p>
              </div>
              <div className="overlap-group8-3">
                <p className="she-does-too-im-on-it poppins-medium-blumine-12px">{sheDoesTooImOnIt}</p>
              </div>
            </div>
          </div>
          <X9 yeahICouldBeConv={x91Props.yeahICouldBeConv} text4={x91Props.text4} className={x91Props.className} />
          <X9 yeahICouldBeConv={x92Props.yeahICouldBeConv} text4={x92Props.text4} className={x92Props.className} />
          <div className="overlap-group12">
            <p className="amazing-id-love-to-see-her-again poppins-medium-tickle-me-pink-12px">
              {amazingIdLoveToSeeHerAgain}
            </p>
          </div>
          <img className="map-1" src={map} alt="Map" />
          <div className="overlap-group13">
            <div className="overlap-group-18">
              <p className="great-shell-join-th poppins-medium-blumine-12px">{greatShellJoinTh}</p>
            </div>
            <div className="group-5">
              <div className="overlap-group1-12" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <div className="overlap-group-19">
                  <div className="join-now valign-text-middle">{joinNow}</div>
                </div>
              </div>
              <div className="text-13 poppins-medium-tiara-12px">{text13}</div>
            </div>
            <img className="ar-1" src={ar1} alt="ar 1" />
            <div className="group-1897" style={{ backgroundImage: `url(${group1897})` }}>
              <div className="bg-3"></div>
            </div>
          </div>
        </div>
        <X6 className={x6Props.className} />
      </div>
    </div>
  );
}

export default CupidXSamanthaYes;
