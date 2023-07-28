import React from "react";
import Feature_box from "./feature_box";
import "./features.css"

function Features() {
  return (
    <div className="features">
      <Feature_box title="Scribble" properties="your ultimate companion for a tranquil and delightful note-taking experience. 
      Embrace the joy of effortless note creation and editing, capturing your thoughts, ideas, and gentle reminders with ease. 
      Organize your notes using charming tags or delightful categories, making finding them a breeze. Discover the peace and serenity 
      that Scribble brings to your heartwarming digital note-taking journey."/>
      <Feature_box title="Memoir" properties="the magical book writing app that takes you on a delightful writing adventure. With 
      Memoir, writing your masterpiece is joyful, as you effortlessly weave your thoughts onto digital pages. Enjoy the calm of 
      organizing chapters gracefully. Unleash your creativity and cherish your literary dreams with Memoir's enchanting allure."/>
      <Feature_box title="Muse" properties=" the artistic app that connects artists and sparks inspiration. Share your art, explore
       ideas, and connect with a warm creative community. Let Muse be your muse, igniting your imagination and fostering artistic 
       growth. Join us on a delightful artistic journey filled with creativity and support."/>

    </div>
  );
}

export default Features;
