import "./Main.scss";

import React, {useEffect, useState} from "react";

import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Education from "./education/Education";
import Footer from "../components/footer/Footer";
import Greeting from "./greeting/Greeting";
import Header from "../components/header/Header";
import Podcast from "./podcast/Podcast";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import ScrollToTopButton from "./topbutton/Top";
import Skills from "./skills/Skills";
import SplashScreen from "./splashScreen/SplashScreen";
import StackProgress from "./skillProgress/skillProgress";
import StartupProject from "./StartupProjects/StartupProject";
import {StyleProvider} from "../contexts/StyleContext";
import Talks from "./talks/Talks";
import Twitter from "./twitter-embed/twitter";
import WorkExperience from "./workExperience/WorkExperience";
import {splashScreen} from "../portfolio";

// import {useLocalStorage} from "../hooks/useLocalStorage";

const Main = () => {
  // const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  // const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  // const changeTheme = () => {
  //   setIsDark(!isDark);
  // };

  return (
    // <div className={isDark ? "dark-mode" : null}>
    <div className={"dark-mode"}>
      <StyleProvider value={{isDark: true}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
