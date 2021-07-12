import React, { useState } from "react";

const SearchBox = ({ getLocation }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="search-box">
      <label>Select a Location</label>
      <br />
      <select
        name="locations"
        onChange={(e) => setInputValue(e.target.value)}
        defaultValue="1"
      >
        <option value="1">Earth (C-137)</option>
        <option value="2">Abadango</option>
        <option value="3">Citadel of Ricks</option>
        <option value="4">Worldender's lair</option>
        <option value="5">Anatomy Park</option>
        <option value="6">Interdimensional Cable</option>
        <option value="7">Immortality Field Resort</option>
        <option value="8">Post-Apocalyptic Earth</option>
        <option value="9">Purge Planet</option>
        <option value="10">Venzenulon 7</option>
        <option value="11">Bepis 9</option>
        <option value="12">Cronenberg Earth</option>
        <option value="13">Nuptia 4</option>
        <option value="14">Giant's Town</option>
        <option value="15">Bird World</option>
        <option value="16">St. Gloopy Noops Hospital</option>
        <option value="17">Earth (5-126)</option>
        <option value="18">Mr. Goldenfold's dream</option>
        <option value="19">Gromflom Prime</option>
        <option value="20">Earth (Replacement Dimension)</option>
        <option value="21">Testicle Monster Dimension</option>
        <option value="22">Signus 5 Expanse</option>
        <option value="23">Earth (C-500A)</option>
        <option value="24">Rick's Battery Microverse</option>
        <option value="25">The Menagerie</option>
        <option value="26">Earth (K-83)</option>
        <option value="27">Hideout Planet</option>
        <option value="28">Unity's Planet</option>
        <option value="29">Dorian 5</option>
        <option value="30">Earth (Unknown dimension)</option>
        <option value="31">Earth (J19ζ7)</option>
        <option value="32">Roy: A Life Well Lived</option>
        <option value="33">Eric Stoltz Mask Earth</option>
        <option value="34">Earth (Evil Rick's Target Dimension)</option>
        <option value="35">Planet Squanch</option>
        <option value="36">Glaagablaaga</option>
        <option value="37">Resort Planet</option>
        <option value="38">Interdimensional Customs</option>
        <option value="39">Galactic Federation Prison</option>
        <option value="40">Gazorpazorp</option>
        <option value="41">Hamster in Butt World</option>
        <option value="42">Earth (Giant Telepathic Spiders Dimension)</option>
        <option value="43">Alphabetrium</option>
        <option value="44">Jerryboree</option>
        <option value="45">Krootabulon</option>
        <option value="46">Zigerion's Base</option>
        <option value="47">Pluto</option>
        <option value="48">Fantasy World</option>
        <option value="49">Zeep Xanflorp's Miniverse</option>
        <option value="50">Kyle's Teenyverse</option>
        <option value="51">Larva Alien's Planet</option>
        <option value="52">Earth (K-22)</option>
        <option value="53">Mr. Meeseeks Box</option>
        <option value="54">Vindicator's Base</option>
        <option value="55">Pawn Shop Planet</option>
        <option value="56">Mega Gargantuan Kingdom</option>
        <option value="57">Gear World</option>
        <option value="58">Earth (D-99)</option>
        <option value="59">Earth (D716)</option>
        <option value="60">Earth (D716-B)</option>
        <option value="61">Earth (D716-C)</option>
        <option value="62">Earth (J-22)</option>
        <option value="63">Froopyland</option>
        <option value="64">Detoxifier</option>
        <option value="65">Trunk World</option>
        <option value="66">Plopstar</option>
        <option value="67">Blips and Chitz</option>
        <option value="68">Girvonesk</option>
        <option value="69">Earth (C-35)</option>
        <option value="70">Snuffles' Dream</option>
        <option value="71">Earth (Pizza Dimension)</option>
        <option value="72">Earth (Phone Dimension)</option>
        <option value="73">Greasy Grandma World</option>
        <option value="74">Earth (Chair Dimension)</option>
        <option value="75">Árboles Mentirosos</option>
        <option value="76">Alien Day Spa</option>
        <option value="77">Earth (Fascist Dimension)</option>
        <option value="78">Snake Planet</option>
        <option value="79">Forbodulon Prime</option>
        <option value="80">Earth (Fascist Shrimp Dimension)</option>
        <option value="81">Earth (Fascist Teddy Bear Dimension)</option>
        <option value="82">Earth (Wasp Dimension)</option>
        <option value="83">Monogatron Mothership</option>
        <option value="84">Gorgon Quadrant</option>
        <option value="85">Midland Quasar</option>
        <option value="86">Mount Space Everest</option>
        <option value="87">Globaflyn</option>
        <option value="88">Heist-Con</option>
        <option value="89">Heistotron Base</option>
        <option value="90">Mount Olympus</option>
        <option value="91">Plitzville Montana</option>
        <option value="92">Earth (Tusk Dimension)</option>
        <option value="93">Gramuflack</option>
        <option value="94">Draygon</option>
        <option value="95">New Improved Galactic Federation Quarters</option>
        <option value="96">Story Train</option>
        <option value="97">Non-Diegetic Alternative Reality</option>
        <option value="98">Tickets Please Guy Nightmare</option>
        <option value="99">Morty’s Story</option>
        <option value="100">Ricks’s Story</option>
        <option value="101">Glorzo Asteroid</option>
        <option value="102">Alien Acid Plant</option>
        <option value="103">Merged Universe</option>
        <option value="104">Near-Duplicate Reality</option>
        <option value="105">NX-5 Planet Remover</option>
        <option value="106">Gaia</option>
        <option value="107">Defiance's Ship</option>
        <option value="108">Defiance's Base</option>
      </select>
      <br />
      <button onClick={(e) => getLocation(inputValue)}>Search</button>
    </div>
  );
};

export default SearchBox;
