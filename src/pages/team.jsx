import React, { useState } from 'react';
import Slider from '../team page component/slider';
import Text from '../team page component/text';
import First from '../team page component/first';
import Second from '../team page component/second';
import Advisors from '../team page component/advisors';
import Teammember from '../team page component/team member';
const Team = () => {
 

  return (
    <div>
      <Slider />
      <Text />
      <First />
      <Second />
      <Advisors />
      <Teammember />
    </div>
  ) 
}


export default Team;
