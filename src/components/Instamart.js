/* import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  const [btn, SetBtn] = useState("Hide");
  return (
    <div className="border-2 border-solid border-black m-2 p-2">
      <h3 className="text-xl font-bold">{title}</h3>
      {isVisible ? (
        <>
          <button
            className="p-2 rounded-md bg-pink-300 cursor-pointer"
            onClick={() => setIsVisible(true)}
          >
            Hide
          </button>
          {<p>{description}</p>}
        </>
      ) : (
        <button
          className="p-2 rounded-md bg-pink-300 cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const InstaMart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCarrers: false,
  });
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">InstaMart</h1>
      <Section
        title={"About InstaMart"}
        description={
          "React Hooks can be a powerful addition to your application, however, implementing authentication and authorization on your own can still be tricky. Thanks to Auth0, you can implement it mostly out-of-the-box with just a little effort from your side! Auth0 is a managed authentication platform that provides connections to all of the major social media logins such as Twitter, Google, and Facebook.India is one of the strongest countries in the world. It is the seventh-largest country in the world area-wise and the second-most populous country in the world. India shares its borders with countries like Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar and Bangladesh. It also shares its borders with Sri Lanka and the Maldives. It is a secular and democratic country that respects all religions and the people of India have the liberty to practise any religion they want."
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCarrers: false,
          })
        }
      />

      <Section
        title={"Team InstaMart"}
        description={
          "India is one of the strongest countries in the world. It is the seventh-largest country in the world area-wise and the second-most populous country in the world. India shares its borders with countries like Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar and Bangladesh. It also shares its borders with Sri Lanka and the Maldives. It is a secular and democratic country that respects all religions and the people of India have the liberty to practise any religion they want.The Param Vir Chakra is India’s highest military decoration, given to those who have shown courage. Soldiers who put their lives on the line to safeguard residents are India’s heroes. Pandit Jawaharlal Nehru, often known as Pandit Nehru or Chacha Nehru, was India’s first prime minister. India is a land of many festivals, different dressing styles, and different food styles. People of different castes, creeds, and colours also live peacefully in India, and this is how it sets a perfect example of ‘Unity in Diversity’."
        }
        isVisible={sectionConfig.showTeam}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCarrers: false,
          })
        }
      />

      <Section
        title={"Carrers"}
        description={
          "India is a land with a vast variety of wildlife and a large variety of cultures. Situated in South Asia’s heartland, India is a densely populated country. It is a vastly diverse country in terms of culture, climate, religion, and language. India has chosen a number of emblems to represent our country’s image. Saffron, white, and green make up the Indian national flag. The Ashok chakra in the centre has a navy blue 24-spoke wheel that represents virtue.India is well-known for possessing the world’s greatest cultural diversity. Even for Indians, visiting and exploring every culture in India is quite difficult. India’s various cultures attract visitors from all over the world who want to come here at least once in their lives to experience India’s rich diversity.India is a secular and democratic country that gives the liberty to practise any religion. Along with that, every individual in India has the liberty to read any religious book of their choice. Every individual has the liberty to move to any part of the country and adapt to the culture of that region. Every state of India has its own official language"
        }
        isVisible={sectionConfig.showCarrers}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCarrers: true,
          })
        }
      />
    </div>
  );
};

export default InstaMart;
 */

import { useState } from "react";

 const Section = ({ title, description, index }) => {
  const [isVisible, setIsVisible] = useState(index === 0);

  return (
    <div className="border-2 border-solid border-black m-2 p-2">
      <h3 className="text-xl font-bold">{title}</h3>
      {isVisible ? (
        <>
          <button
            className="p-2 rounded-md bg-pink-300 cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="p-2 rounded-md bg-pink-300 cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const InstaMart = () => {
  const sections = [
    {
      title: "About InstaMart",
      description:
        "React Hooks can be a powerful addition to your application, however, implementing authentication and authorization on your own can still be tricky. Thanks to Auth0, you can implement it mostly out-of-the-box with just a little effort from your side! Auth0 is a managed authentication platform that provides connections to all of the major social media logins such as Twitter, Google, and Facebook.India is one of the strongest countries in the world. It is the seventh-largest country in the world area-wise and the second-most populous country in the world. India shares its borders with countries like Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar and Bangladesh. It also shares its borders with Sri Lanka and the Maldives. It is a secular and democratic country that respects all religions and the people of India have the liberty to practise any religion they want."
    },
    {
      title: "Team InstaMart",
      description:
        "India is one of the strongest countries in the world. It is the seventh-largest country in the world area-wise and the second-most populous country in the world. India shares its borders with countries like Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar and Bangladesh. It also shares its borders with Sri Lanka and the Maldives. It is a secular and democratic country that respects all religions and the people of India have the liberty to practise any religion they want.The Param Vir Chakra is India’s highest military decoration, given to those who have shown courage. Soldiers who put their lives on the line to safeguard residents are India’s heroes. Pandit Jawaharlal Nehru, often known as Pandit Nehru or Chacha Nehru, was India’s first prime minister. India is a land of many festivals, different dressing styles, and different food styles. People of different castes, creeds, and colours also live peacefully in India, and this is how it sets a perfect example of ‘Unity in Diversity’."
    },
    {
      title: "Careers",
      description:
        "India is a land with a vast variety of wildlife and a large variety of cultures. Situated in South Asia’s heartland, India is a densely populated country. It is a vastly diverse country in terms of culture, climate, religion, and language. India has chosen a number of emblems to represent our country’s image. Saffron, white, and green make up the Indian national flag. The Ashok chakra in the centre has a navy blue 24-spoke wheel that represents virtue.India is well-known for possessing the world’s greatest cultural diversity. Even for Indians, visiting and exploring every culture in India is quite difficult. India’s various cultures attract visitors from all over the world who want to come here at least once in their lives to experience India’s rich diversity.India is a secular and democratic country that gives the liberty to practise any religion. Along with that, every individual in India has the liberty to read any religious book of their choice. Every individual has the liberty to move to any part of the country and adapt to the culture of that region. Every state of India has its own official language"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">InstaMart</h1>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default InstaMart;
