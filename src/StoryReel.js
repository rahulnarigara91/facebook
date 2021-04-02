import React from "react";
import Story from "./Story";
import './StoryReel.css'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        title="Rahul Narigara"
        profileSrc="https://media-exp1.licdn.com/dms/image/C5103AQFa45vp-SrS3Q/profile-displayphoto-shrink_200_200/0/1537792044671?e=1620864000&v=beta&t=fi_ODa6efVj3fExPFOcdZDDS5V3D7uDjWvZtAS0ZCOM"
        image='https://i.pinimg.com/564x/ac/70/32/ac7032dbbc9fa894c302c640f959408b.jpg'
        desc = 'Hello this demo  use'
      />
      <Story
        title="John Abraham"
        profileSrc="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/08/03/488145-john9.jpg"
        image='https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        desc = 'Hello this demo  use'
      />
       <Story
        title="Ajay Devgn"
        profileSrc="data:image/jpeg;base64,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"
        image='https://i.pinimg.com/564x/ac/70/32/ac7032dbbc9fa894c302c640f959408b.jpg'
        desc = 'Hello this demo  use'
      />
       <Story
        title="Hritik Roshan"
        profileSrc="https://www.bollywoodhungama.com/wp-content/uploads/2020/05/No-remakes-for-Hrithik-Roshan.jpg"
        image='https://i.pinimg.com/564x/ac/70/32/ac7032dbbc9fa894c302c640f959408b.jpg'
      />
    </div>
  );
}

export default StoryReel;