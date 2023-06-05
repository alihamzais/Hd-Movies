import React from "react";
import Section from "../../Layout/Section/Section";
import { apiData } from "../../MobxStore.js/MobxTree";

function Webpage() {
  console.log(apiData.loader);

  return (
    <>
      <Section />
    </>
  );
}

export default Webpage;
