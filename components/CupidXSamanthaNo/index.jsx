import React from "react";
import Profile3 from "../Profile3";
import X4 from "../X4";
import X6 from "../X6";
import "./CupidXSamanthaNo.css";

function CupidXSamanthaNo(props) {
  const {
    sorrySarahHasntBe,
    sorrySamanthaHasnt,
    name,
    sheDecidedToLearnMoreAboutYou,
    sheSaidShesNotI,
    sheSaidSheItWas,
    shouldIFindYouSo,
    profile3Props,
    x4Props,
    x6Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cupid-x-samantha-no screen">
        <Profile3 className={profile3Props.className} />
        <div className="overlap-group7-5">
          <div className="overlap-group1-15">
            <p className="sorry-sarah-hasnt-be-2 poppins-medium-blumine-12px">{sorrySarahHasntBe}</p>
          </div>
          <div className="x8-2">
            <div className="overlap-group5-5">
              <p className="sorry-samantha-hasnt poppins-medium-blumine-12px">{sorrySamanthaHasnt}</p>
            </div>
            <div className="overlap-group-22">
              <p className="name-6 poppins-medium-blumine-12px">{name}</p>
            </div>
            <div className="overlap-group1-16">
              <p className="she-decided-to-learn-more-about-you-1 poppins-medium-blumine-12px">
                {sheDecidedToLearnMoreAboutYou}
              </p>
            </div>
            <div className="overlap-group-22">
              <p className="she-said-shes-not-i poppins-medium-blumine-12px">{sheSaidShesNotI}</p>
            </div>
            <div className="overlap-group3-6">
              <p className="she-said-she-it-was poppins-medium-blumine-12px">{sheSaidSheItWas}</p>
            </div>
            <div className="overlap-group4-5">
              <p className="should-i-find-you-so poppins-medium-blumine-12px">{shouldIFindYouSo}</p>
            </div>
          </div>
        </div>
        <X4 damnYeahLetsFindSomeoneWithA={x4Props.damnYeahLetsFindSomeoneWithA} />
        <X6 className={x6Props.className} />
      </div>
    </div>
  );
}

export default CupidXSamanthaNo;
