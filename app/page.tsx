import Header from "./components/Header";
import Hero from "./components/Hero";
import Community from "./components/Community";
import Future from "./components/Future";
import Footer from "./components/Footer";
import About from "./components/About";
import Platforms from "./components/Platforms";
import Team from "./components/Team";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home"><Hero /></section>
      <section id="About"><About /></section>
      <section id="Platforms"><Platforms /></section>
      <section id="team"><Team /></section>
      <section id="Community"><Community /></section>
      <section id="future"><Future /></section>
      <section id="Footer"><Footer /></section>
    </div>
  );
}
